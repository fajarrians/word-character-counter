import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="min-h-screen bg-[#F9F5FF] ">
        <Header />
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
