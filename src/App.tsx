import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="flex flex-col bg-secondary font-montserrat min-h-screen text-gray-300">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default App;
