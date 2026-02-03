import React from "react";
import Link from "next/link";

function Menuitem({ title, adress, Icon }) {
  return (
    <Link href={adress} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}

export default Menuitem;
