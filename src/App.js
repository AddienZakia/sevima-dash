import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./Styles/output.css";
import Root from "./Route/Root";
import Statistik from "./Route/Statistik";
import Anggota from "./Route/Anggota";
import Konfigurasi from "./Route/Konfigurasi";
import Laporan from "./Route/Laporan";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Statistik />} />
      <Route path="Anggota" element={<Anggota />} />
      <Route path="Tambah" element={<Konfigurasi />} />
      <Route path="Anggota/:id" element={<Laporan />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
