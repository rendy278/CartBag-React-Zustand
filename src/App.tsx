import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="flex flex-col bg-secondary font-montserrat min-h-screen text-gray-300">
      <Navbar />
      <Footer />
    </main>
  );
};

export default App;
