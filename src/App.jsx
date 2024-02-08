import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <ToastContainer />
      <Nav />
      <Home />
      <Footer />
    </main>
  );
};

export default App;
