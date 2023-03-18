import { Outlet } from "react-router-dom";
import { Global } from "./theme/global";

export default function App () {
  return (
    <>
      <Outlet />
      <Global />
    </>
  )
}