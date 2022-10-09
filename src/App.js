import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{useState} from "react";


function App() {
  const [mode,setMode]=useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(messege,type)=>{
    setAlert(
      {
        msg:messege,
        type:type
      }
    )
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  document.title=`TextUtils - ${mode.charAt(0).toUpperCase()+mode.slice(1).toLowerCase()} mode`
  const toggleMode=()=>{
    console.log("hey")
    if(mode==="light")
    {
      setMode('dark')
      document.body.classList.remove("bg-light")
      document.body.classList.add("bg-dark")
      document.body.style.color="white"
      showAlert("Dark mode has been Enebled","success")
    }
    else{
      setMode('light')
      document.body.classList.remove("bg-dark")
      document.body.classList.add("bg-light")
      document.body.style.color="black"
      showAlert("Light mode has been Enebled","success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />{ /*it is called props like passing veriables to the html same as templates*/}
      <Alert alert={alert}/>
      <div className="container-fluid">
        <Textform heading="Enter the Text To Analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
