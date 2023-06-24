import Header from "../Component/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="mx-10">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
