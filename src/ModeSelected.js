import React, { useState, useEffect } from "react";

const ModeSelected = (props) => {
  const [line, setLine] = useState([]);
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${props.selectedMode}`)
      .then((res) => res.json())
      .then((data) => {
        setLine(data);
        console.log(data);
        console.log({ line });
      });
  }, [props.selectedMode]);
  return (
    <div></div>
//  <select>
//    {line.map((item)=>{
//      return (
//        <option>
//          {item.name}
//        </option>
//      )
//    })}
//  </select>
  )
};
export default ModeSelected;
