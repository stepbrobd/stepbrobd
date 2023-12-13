"use client";

import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="scale-[0.4167]">
      <Hamburger
        rounded
        toggled={isOpen}
        toggle={setOpen}
        size={48}
        duration={0.25}
        label="Menu"
      />
    </div>
  );
};

export default Menu;
