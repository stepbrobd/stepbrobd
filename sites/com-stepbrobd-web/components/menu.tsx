"use client";

import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Hamburger
        rounded
        toggled={isOpen}
        toggle={setOpen}
        size={20}
        duration={0.25}
        label="Menu"
      />
    </div>
  );
};

export default Menu;
