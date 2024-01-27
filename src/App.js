import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { useState } from "react";
import { writeUserData } from "./utils/functions";

const initialValues = {
  username:"",
  phoneNumber:"",
  gender:""
}

function App() {

const [info, setinfo] = useState("");

const handleSubmit = (e)=>{
  e.preventDefault();
  writeUserData(info);

}

  return (
    <div className="App">
      <FormComponent info={info} setinfo={setinfo} handleSubmit={handleSubmit} />
      <Contacts /> 
    </div>
  );
}

export default App;
