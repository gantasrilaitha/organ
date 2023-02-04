import { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
export default function Expandible(props) {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full px-20 py-12">
      <div
        className="flex flex-row justify-between"
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}
      >
        <h3 className="font-small text-xl">{props.name}</h3>
        {open ? (
          <BsFillCaretDownFill size={32} />
        ) : (
          <BsFillCaretUpFill size={32} />
        )}
      </div>
      {open ? <div></div> : props.children}
    </div>
  );
}
