import { Outlet } from "react-router";
import { Footer, Header } from "/src/components/";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
