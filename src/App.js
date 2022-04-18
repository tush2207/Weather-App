import Weatherapp from "./Components/Weather/Weatheraap"
function App() {
  return (
    <>
    <Weatherapp/>
    </>
   
  );
}
export default App;


// import React, { useState } from 'react';

// function App() {

//   let [result1, setResult1] = useState('');
//   let [result2, setResult2] = useState('');
//   let [result3, setResult3] = useState('');
//   let [result4, setResult4] = useState('');

//   let hello = (e) => {
//     setResult1('Hello ' + e.target.value);
//   }

//   let selectCategory = (e) => {
//     setResult2(e.target.value + ' is selected');
//   }

//   let selectFile = (e) => {
//     var selectedFile = e.target.files[0];
//     let result = 'File name: ' + selectedFile.name;
//     result += '<br>File type: ' + selectedFile.type;
//     result += '<br>File size: ' + selectedFile.size;
//     setResult3(result);
//   }

//   let selectFiles = (e) => {
//     let selectedFiles = e.target.files;
//     let result = '';
//     for (var i = 0; i < selectedFiles.length; i++) {
//       result += '<br>File name: ' + selectedFiles[i].name;
//       result += '<br>File type: ' + selectedFiles[i].type;
//       result += '<br>File size: ' + selectedFiles[i].size;
//       result += '<br>--------------------------';
//     }
//     setResult4(result);
//   }

//   return (
//     <div>
//       <fieldset>
//         <legend>Demo 1</legend>
//         <input type="text" onChange={hello} placeholder="Input your name" />
//         <br />
//         {result1}
//       </fieldset>

//       <fieldset>
//         <legend>Demo 2</legend>
//         Category <select onChange={selectCategory}>
//           <option value="c1">Category 1</option>
//           <option value="c2">Category 2</option>
//           <option value="c3">Category 3</option>
//           <option value="c4">Category 4</option>
//         </select>
//         <br />
//         {result2}
//       </fieldset>

//       <fieldset>
//         <legend>Demo 3</legend>
//         Photo <input type="file" onChange={selectFile} />
//         <br />
//         <span dangerouslySetInnerHTML={{ __html: result3 }}></span>
//       </fieldset>

//       <fieldset>
//         <legend>Demo 4</legend>
//         Photos <input type="file" onChange={selectFiles} multiple={true} />
//         <br />
//         <span dangerouslySetInnerHTML={{ __html: result4 }}></span>
//       </fieldset>

//     </div>
//   );
// };

// export default App;