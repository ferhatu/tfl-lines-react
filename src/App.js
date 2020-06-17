import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");
  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => {
        setModes(data);
      });
  });
  const handleSelectedMode = (event) => {
    setSelectedMode(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <select className="select-bar" onChange={handleSelectedMode}>
        <option>Choose a Mode of Transport</option>
        {modes.map((modes, index) => {
          return (
            <option key={index} value={modes.modeName}>
              {modes.modeName}
            </option>
          );
        })}
      </select>
      <p>You selected mode: {selectedMode}</p>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// function App() {
//   const [modes, setModes] = useState([]);
//   const [selectedMode, setSelectedMode] = useState('');
//   const [lines, setLines] = useState([])
//   useEffect(() => {
//     fetch('https://api.tfl.gov.uk/Line/Meta/Modes')
//       .then(results => results.json())
//       .then(data => setModes(data))
//   }, []);
//   useEffect(() => {
//     fetch(`https://api.tfl.gov.uk/Line/Mode/${selectedMode}`)
//       .then(results => results.json())
//       .then(data => {
//         setLines(data)
//         console.log(data)
//       })
//   }, [selectedMode]);
//   const handleSelectChange = (event) => {
//     if (event.target.id === 'modes') {
//       setSelectedMode(event.target.value)
//     }
//   }

//   const renderSelect = (defaultOption, options, id) => {
//     return (
//       <select onChange={handleSelectChange}
//         id={id}>
//         <option selected={true}
//           value={defaultOption}>
//           {defaultOption}
//         </option>
//         {options.map((option, index) => {
//           return (
//             id === 'modes' ? <option key={index + option.modeName}
//               value={option.modeName}
//             >
//               {option.modeName}
//             </option> :
//               <option key={index + option.modeName}
//                 value={option.name}
//               >
//                 {option.name}
//               </option>
//           )
//         })}
//       </select>
//     )
//   }
//   return (
//     <div className="App">
//       {renderSelect('Choose a Mode of Transport...', modes, 'modes')}
//       {lines.length > 0 ? renderSelect('Choose a Line...', lines, 'lines') : null}
//       <p>You selected line: {selectedMode}</p>
//     </div>
//   );
// }
