import React from 'react'
import Summary from "./Summary";

// const App =()=>{
//   return(
// <div>
//     <h1>My Todo App</h1>
//   </div>
//   ); }
// export default App;


const App =()=>(
<div>
    <h1>My Todo App</h1>
    <Summary todoCount={5} completedTodosCount={2} />
  </div>
  );
  export default App;