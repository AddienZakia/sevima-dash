function klik() {
  document.getElementById("ul").classList.toggle("hidden");
}

function Header() {
  return (
    <header className="flex justify-between items-center my-5 border-b-2 pb-5 border-abu">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ul
        id="ul"
        className="bg-white absolute md:static text-center space-y-5 md:space-y-0 pt-32 md:pt-0 inset-0 flex flex-col md:flex-row md:justify-between md:items-center md:space-x-5 font-semibold"
      >
        <li>
          <a href="#">Statistik</a>
        </li>
        <li>
          <a href="#">Anggota</a>
        </li>
        <li>
          <a href="#">Tambah</a>
        </li>
        <li className="block md:hidden">
          <a href="#">Sign In</a>
        </li>
      </ul>
      <a
        href="#"
        className="hidden md:block px-4 py-2 bg-blue-600 rounded-md text-white"
      >
        Sign In
      </a>

      <p
        className="block md:hidden text-4xl z-10 cursor-pointer"
        onClick={klik}
      >
        =
      </p>
    </header>
  );
}

export default Header;
