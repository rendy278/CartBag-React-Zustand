import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <main className="bg-secondary font-montserrat overflow-hidden w-full h-full text-gray-300">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </main>
  );
};

export default App;
