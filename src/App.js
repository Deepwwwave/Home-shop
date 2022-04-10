import "./App.css";
import Header from "./Container/Header/Header";
import Home from "./Container/Home/Home";
import Footer from "./Container/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer>Mention Legal</Footer>
    </div>
  );
}

export default App;
