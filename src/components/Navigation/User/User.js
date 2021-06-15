import React from "react";
import { Dropdown } from "semantic-ui-react";

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const User = () => (
  <Dropdown floating icon="user circle" direction="left">
    <Dropdown.Menu>
      <Dropdown.Item text="Login" />
      <Dropdown.Item text="Register" />
    </Dropdown.Menu>
  </Dropdown>
);

export default User;
