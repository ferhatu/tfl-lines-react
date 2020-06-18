import React, { useState, useEffect } from "react";

const Route = (props) => {
  const [selectedRoute, setSelectedRoute] = useState({});
  //   console.log(props.selectedLine);
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${props.selectedLine}/Route`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setSelectedRoute(data);
      });
  }, [props.selectedLine]);
  console.log(selectedRoute.routeSections);
  return (
        <div className ="route">
      <p className = "origin-route">
        {selectedRoute.routeSections && selectedRoute.routeSections[0]
          ? selectedRoute.routeSections[0].originationName
          : null}
      </p>
          <p className="destination-route">
        {selectedRoute.routeSections && selectedRoute.routeSections[0]
          ? selectedRoute.routeSections[0].destinationName
          : null}
      </p>
    </div>
  );
};
export default Route;
