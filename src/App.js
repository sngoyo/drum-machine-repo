import React, {useState} from "react";
import './App.css';
import Button from "./Components/buttons.js";


function App() {
  const [powerchecked, setPowerChecked] = useState(false);
  const [bankchecked, setBankChecked] = useState(false);


    const Handlepower = ()=> {
      setPowerChecked(!powerchecked);
    }

    const Handlebank = () => {
      setBankChecked(!bankchecked);
    }


  return (
    <div id="drum-machine">
     <Button powerchecked={powerchecked} bankchecked={bankchecked} /> {/*Passing state as props from App component(Parent) to the Button component(Child)  */}
     <div className="container-controlsdisplay">
       <div className="power">
         <label className="labelPower" for="check">Power</label>
         <input type="checkbox" name ="" class="togglePower" id="check" checked={powerchecked} onChange={Handlepower} />

       </div>
       <div className="bank">
         <label className="labelBank" for="check">Bank</label>
         <input type="checkbox" name ="" class="toggleBank" checked={bankchecked} onChange={powerchecked ? Handlebank : ""}/>
       </div>

     </div>
  </div>
  );
}

export default App;
