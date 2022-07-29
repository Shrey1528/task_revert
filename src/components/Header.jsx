import React from "react";
import { Button, Div } from "./ReusableStyles";

const Header = () => {
  return (
    <Div main>
      <Div sub>
        <h1 className="head">To-Do List</h1>
        <Div task>
          <p>Add a new task in the list</p>
          <Div field>
            <input type="text" placeholder="Enter the task here" />
            <Button submit>Submit</Button>
          </Div>
        </Div>
        <p>Added task in to-do list</p>
      </Div>
    </Div>
  );
};

export default Header;
