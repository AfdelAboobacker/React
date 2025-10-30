// //import Welcome from "./embeding-expression/welcome";
// // import './App.css';
// // import Conditional from './embeding-expression/Conditional';
// // import CallingFunction from './embeding-expression/CallingFunction';
// import RenderingList from "./embeding-expression/RenderingList";

// function App() {
//   return (
//     <>
//       {/* <Welcome /> */}
//       {/* <CallingFunction/> */}
//       {/* <Conditional/> */}
//       <RenderingList/>
//     </>
//   );
// }

// export default App;

import React, { Component } from "react";
import Basics from "./class-components/Basics";
import UsingProps from "./class-components/UsingProps";
import Counter from "./class-components/Counter";
import Mounting from "./class-components/life-cycle-Methods/mounting";
import Update from "./class-components/life-cycle-Methods/Update";
import UnMounting from "./class-components/life-cycle-Methods/UnMounting";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Basics/> */}
        {/* <UsingProps name='afdel'/> */}
        {/* <Counter /> */}
        {/* <Mounting /> */}
        {/* <Update/> */}
<UnMounting/>
      </div>
    );
  }
}
