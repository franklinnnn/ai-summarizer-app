import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <Nav />
      <Main />
    </main>
  );
};

export default App;
