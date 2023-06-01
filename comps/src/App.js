import { useState } from "react";
import SideBar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPAge from "./pages/AccordionPage";
import DropDownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPAge></AccordionPAge>
        </Route>
        <Route path="/">
          <DropDownPage></DropDownPage>
        </Route>
        <Route path="/buttons">
          <ButtonPage></ButtonPage>
        </Route>
        <Route path="/modal">
          <ModalPage></ModalPage>
        </Route>
      </div>
    </div>
  );
}

export default App;
