//import Welcome from "./embeding-expression/welcome";
// import './App.css';
// import Conditional from './embeding-expression/Conditional';
// import CallingFunction from './embeding-expression/CallingFunction';
// import RenderingList from "./embeding-expression/RenderingList";
// import Basics from "./functional-components/Basics";
// import Props from "./functional-components/Props";
// import State from "./functional-components/state";

// import Home from "./3.functional-components/hooks/useContext-hook/dark&light-mode/Home";
import { ThemeProvider } from "./3.functional-components/hooks/useContext-hook/dark&light-mode/ThemeContext";
import Navbar from "./nested-Routing/NavBar";
import { UserApiProvider } from "./3.functional-components/hooks/useContext-hook/userList/UserApiContext";
import UserLIst from "./3.functional-components/hooks/useContext-hook/userList/UserLIst";
// import Timer from "./3.functional-components/hooks/useEffect-hook/Timer";
// import UserList from "./3.functional-components/hooks/useEffect-hook/UserList";
// import TextInput from "./3.functional-components/hooks/useState/textInput";
// import Toggle from "./3.functional-components/hooks/useState/Toggle";
import Home from "./nested-Routing/Home";
import About from "./nested-Routing/About";
import Service from "./nested-Routing/Service";
import { Route, Routes } from "react-router-dom";
import WebDev from "./nested-Routing/services/WebDev";
import AppDev from "./nested-Routing/services/AppDev";
import Design from "./nested-Routing/services/Design";
function App() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <CallingFunction/> */}
      {/* <Conditional/> */}
      {/* <RenderingList/> */}
      {/* <Basics/> */}
      {/* <State /> */}
      {/* <Props/> */}
      {/* hooks and life cycle methode */}
      {/* <Timer/> */}
      {/* <UserList /> */}
      {/* <TextInput/> */}
      {/* <Toggle/> */}
      {/*-------------------------useContext Hook-------------------------- */}
      {/* <ThemeProvider>
        <Home />
      </ThemeProvider> */}
      {/* <UserApiProvider>
        <UserLIst/>
      </UserApiProvider> */}
      <Navbar />
      <div className="container-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* nested route */}
          <Route path="/service" element={<Service />}>
            <Route path="web-development" element={<WebDev />} />
            <Route path="app-development" element={<AppDev />} />
            <Route path="design" element={<Design />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

// import React, { Component } from "react";
// import Basics from "./class-components/Basics";
// import UsingProps from "./class-components/UsingProps";
// import Counter from "./class-components/Counter";
// import Mounting from "./class-components/life-cycle-Methods/mounting";
// import Update from "./class-components/life-cycle-Methods/Update";
// import UnMounting from "./class-components/life-cycle-Methods/UnMounting";
// import ButtonUnMount from "./class-components/life-cycle-Methods/ButtonUnMount";
// import Timer from "./class-components/life-cycle-Methods/Timer";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Basics/> */}
//         {/* <UsingProps name='afdel'/> */}
//         {/* <Counter /> */}
//         {/* <Mounting /> */}
//         {/* <Update/> */}
// {/* <UnMounting/> */}
// {/* <ButtonUnMount/> */}
// {/* <Timer/> */}

//       </div>
//     );
//   }
// }
