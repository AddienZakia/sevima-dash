import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  let [state, setstate] = useState("block");

  function Klik() {
    if (window.innerWidth >= 768) return;
    document.getElementById("ul").classList.toggle("hidden");
  }

  return (
    <header className="flex justify-between items-center my-5 border-b-2 pb-5 border-abu">
      <NavLink to={"/"}>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </NavLink>
      <ul
        id="ul"
        className={
          state +
          " bg-white absolute md:static text-center space-y-5 md:space-y-0 pt-32 md:pt-0 inset-0 flex flex-col md:flex-row md:justify-between md:items-center md:space-x-5 font-semibold"
        }
      >
        <li>
          <NavLink to={"/"} onClick={Klik}>
            Statistik
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Anggota"} onClick={Klik}>
            Anggota
          </NavLink>
        </li>
        <li>
          <NavLink to={"/tambah"} onClick={Klik}>
            Tambah
          </NavLink>
        </li>
      </ul>

      <p
        className="block md:hidden text-4xl z-10 cursor-pointer"
        onClick={Klik}
      >
        =
      </p>
    </header>
  );
}

export default Header;
