import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>{ /*it is called props like passing veriables to the html same as templates*/}
      {/* <Navbar/>*/}
      <div className="container-fluid">
      <Textform heading="Enter the Text To Analyze"/>
      </div>
    </>
  );
}

export default App;
