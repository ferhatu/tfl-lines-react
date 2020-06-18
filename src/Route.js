import React, { useState, useEffect } from "react";

const Route = (props) => {
  const [selectedRoute, setSelectedRoute] = useState({});

  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${props.selectedLine}/Route`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectedRoute(data);
      });
  }, [props.selectedLine]);
  return (
    <div>
      {console.log(typeof selectedRoute)}
      {/* <p>{selectedRoute.routeSections[0].originationName}</p> */}
    </div>
  );
};
export default Route;
