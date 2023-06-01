import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

//styling css file-->
import "./index.css";

// my pages --->
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import MySkills from "./pages/MySkills";

// cursor animate
import AnimatedCursor from "react-animated-cursor";

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="myskills" element={<MySkills />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="services" element={<Services />}></Route>
    </Route>
  )
); */

const App = () => {
  return (
    <div>
      <div className="cursor">
        <AnimatedCursor
          innerSize={10}
          outerSize={40}
          outerAlpha={3}
          innerScale={0.6}
          outerScale={1.5}
          outerStyle={{
            padding: "0.8px",
            border: "dashed 2px white",
            borderColor: "white",
            width: "50px",
            height: "50px",
            backgroundColor: "tarnsparent",
          }}
          innerStyle={{
            backgroundColor: "white",
            padding: "10px",
          }}
        />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="myskills" element={<MySkills />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="services" element={<Services />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
};

export default App;
