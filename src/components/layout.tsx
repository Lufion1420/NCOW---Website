import { Outlet } from "react-router-dom";
import Swiper from "swiper";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
