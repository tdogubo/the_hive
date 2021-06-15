import React from "react";
import { Dropdown } from "semantic-ui-react";

const Contact = () => {
  return (
    <Dropdown text="Contact" direction="left">
      <Dropdown.Menu>
        <Dropdown.Item icon="twitter" text="Twitter" />
        <Dropdown.Item icon="facebook f" text="Facebook" />
        <Dropdown.Item icon="instagram" text="Instagram" />
        <Dropdown.Item icon="mail" text="Email" />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Contact;
