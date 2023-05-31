import { useState } from "react";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPAge from "./pages/AccordionPage";
import DropDownPage from "./pages/DropdownPage";

function App() {
  return (
    <div>
      <Link to={"/accordion"}>Go To Accordion</Link>
      <Link to={"/dropdown"}> Go To DropDown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPAge></AccordionPAge>
        </Route>
        <Route path="/dropdown">
          <DropDownPage></DropDownPage>
        </Route>
      </div>
    </div>
  );
}

export default App;
