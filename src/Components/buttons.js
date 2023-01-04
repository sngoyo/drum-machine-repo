import React from "react";
import {useState, useRef, useEffect} from "react";



function Button (props) {
    const [song, setSong]= useState("");
    const [volume, setVolume] = useState(0.5);
    const audioRefQ= useRef(null);
    const audioRefW= useRef(null);
    const audioRefE = useRef(null);
    const audioRefA = useRef(null);
    const audioRefS = useRef(null);
    const audioRefD = useRef(null);
    const audioRefZ = useRef(null);
    const audioRefX = useRef(null);
    const audioRefC = useRef(null);
    const [volumeChanged, setVolumeChanged] = useState(false); //For displaying interchangeably values of volume and song when button clicked in one display div


    const Handlevolume = (e)=> {
      setVolume(e.target.value)
      setVolumeChanged(true);
    }

    useEffect(() => {

        document.addEventListener("keydown", handleKeyDown); //Attach the event listener to the document object

      return () => {document.removeEventListener("keydown", handleKeyDown);// this removes the event listener when the component unmounts
    };


    }, [props.bankchecked, props.powerchecked, volumeChanged]);//the second argument is an array of values(here is props.bankchecked and props.powerchecked) that the effect depends on. if any of the values in the array change the effect will be rerun


   {/* const audioSources = {
      Q: props.bankchecked ? 'heater-1' : 'linn-CHINA1.wav',
      W: props.bankchecked ? 'Heater-2' : 'linn-BONGO1.wav',
      E: props.bankchecked ? 'Heater-3' : 'linn-RIDE-V2',
      A: props.bankchecked ? 'Heater-4' : 'linn-CONGAHH',
      S: props.bankchecked ? 'heater-6' : 'linn-CONGA-H-v2',
      D: props.bankchecked ? 'Dsc_oh' : 'linn-CHHS',
      Z: props.bankchecked ? 'Kick_n_Hat' : 'linn-CABASA',
      X: props.bankchecked ? 'RP4_KICK_1' : 'linn-BDRUM13',
      C: props.bankchecked ? 'Cev_H2' : 'linn-TOMHI3'
    };


    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
      const audioSource = audioSources[key];
      if (audioSource) {
        setSong(audioSource);
        audioRef.current.src = audioSource;
        audioRef.current.volume = volume;
        audioRef.current.play();
      }
    };    */}

    const handleKeyDown = (e) => {
      setVolumeChanged(false);
      const key = e.key.toUpperCase();
        console.log(props.bankchecked);

      if (props.powerchecked === true){
       if (key === "Q") {

          if (props.bankchecked === true){
            setSong("heater-1")
          } else {
            setSong("linn-CHINA1.wav")
          }
        audioRefQ.current.volume = volume;
        audioRefQ.current.play();


      } else if (key === "W"){
        if(props.bankchecked === true){
          setSong("Heater-2")
        } else {
          setSong("linn-BONGO1.wav")
        }
        audioRefW.current.volume = volume;
        audioRefW.current.play();

       } else if (key ==="E"){
         if (props.bankchecked === true){
           setSong("Heater-3")
         } else {
          setSong("linn-RIDE-V2")
         }
        audioRefE.current.volume = volume;
        audioRefE.current.play();

      }else if (key ==="A"){
         if (props.bankchecked === true){
            setSong("Heater-4")
         } else {
            setSong("linn-CONGAHH")
         }
        audioRefA.current.volume = volume;
        audioRefA.current.play();

     } else if (key === "S"){
         if (props.bankchecked === true){
        setSong("heater-6")
         } else {
          setSong("linn-CONGA-H-v2")
         }
        audioRefS.current.volume = volume;
        audioRefS.current.play();


      } else if (key ==="D"){
        if (props.bankchecked === true){
          setSong("Dsc_oh")
        } else {
          setSong("linn-CHHS")
        }
        audioRefD.current.volume = volume;
        audioRefD.current.play();


        } else if (key ==="Z"){
        if (props.bankchecked === true){
          setSong("Kick_n_Hat")
        } else {
          setSong("linn-CABASA")
        }
        audioRefZ.current.volume = volume;
        audioRefZ.current.play();

     } else if (key ==="X"){
        if (props.bankchecked === true){
          setSong("RP4_KICK_1")
        } else {
          setSong("linn-BDRUM13")
        }
        audioRefX.current.volume = volume;
        audioRefX.current.play();


        }else if (key === "C"){
        if (props.bankchecked === true){
          setSong("Cev_H2")
        } else {
          setSong("linn-TOMHI3")
        }
        audioRefC.current.volume = volume;
        audioRefC.current.play();
      }

   } else {
     return;
   }
  }


    const handleplaysong = (e) => {
       const name = e.target.name; //it is the name of that button when clicked
       const value = e.target.value; //value of that button but not used in this code
       setVolumeChanged(false); // to clear volume from being displayed in div display and instead displays song name when a button is clicked

       if (name === "Q") {
        if (props.bankchecked === true){
        setSong("heater-1")
        } else {
          setSong("linn-CHINA1.wav")
        }
        audioRefQ.current.volume = volume;
        audioRefQ.current.play();

    } else if (name === "W"){
        if(props.bankchecked === true){
          setSong("Heater-2")
        } else {
          setSong("linn-BONGO1.wav")
        }
        audioRefW.current.volume = volume;
        audioRefW.current.play();

       } else if (name ==="E"){
         if (props.bankchecked === true){
           setSong("Heater-3")
         } else {
          setSong("linn-RIDE-V2")
         }
        audioRefE.current.volume = volume;
        audioRefE.current.play();

      }else if (name ==="A"){
         if (props.bankchecked === true){
            setSong("Heater-4")
         } else {
            setSong("linn-CONGAHH")
         }
        audioRefA.current.volume = volume;
        audioRefA.current.play();

     } else if (name === "S"){
         if (props.bankchecked){
        setSong("heater-6")
         } else {
          setSong("linn-CONGA-H-v2")
         }
        audioRefS.current.volume = volume;
        audioRefS.current.play();


      } else if (name ==="D"){
        if (props.bankchecked){
          setSong("Dsc_oh")
        } else {
          setSong("linn-CHHS")
        }
        audioRefD.current.volume = volume;
        audioRefD.current.play();


        } else if (name ==="Z"){
        if (props.bankchecked){
          setSong("Kick_n_Hat")
        } else {
          setSong("linn-CABASA")
        }
        audioRefZ.current.volume = volume;
        audioRefZ.current.play();

     } else if (name ==="X"){
        if (props.bankchecked){
          setSong("RP4_KICK_1")
        } else {
          setSong("linn-BDRUM13")
        }
        audioRefX.current.volume = volume;
        audioRefX.current.play();


        }else if (name === "C"){
        if (props.bankchecked){
          setSong("Cev_H2")
        } else {
          setSong("linn-TOMHI3")
        }
        audioRefC.current.volume = volume;
        audioRefC.current.play();


      }
    }



      let volumeresult =<div id="display" class="displayfield"> <span className="text">{props.powerchecked ? "Volume: " + Math.round(volume*100): ""}</span></div>

      let  songresult = <div id="display" class="displayfield"> <span className="text">{song}</span></div>

      let  bankchecking= <div id="display" class="displayfield"> <span className="text">{props.bankchecked ? "freecodeCampsongs" : "Linn"}</span></div>



    return(
        <div className="buttons-container" >
          <div className="buttons-div"   onKeyDown={handleKeyDown}>
            <button className="drum-pad"  id = "Heater-1" name="Q"  onClick={props.powerchecked ? handleplaysong : ""}>{props.bankchecked ? <audio
             src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ref={audioRefQ}
            className="clip" id="Q" autoplay>Q</audio> : <audio
            src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/127[kb]linn-CHINA1.wav.mp3"
           ref={audioRefQ}
           className="clip" id="Q" ></audio>}Q</button>

            <button className="drum-pad" id = "Heater-2" name="W" onClick={props.powerchecked ? handleplaysong : ""}>
            {props.bankchecked ? <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            ref={audioRefW}
            className="clip" id="W" autoplay ></audio> : <audio
            src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/16[kb]linn-BONGO1.wav.mp3"
            ref={audioRefW}
            className="clip" id="W" autoplay ></audio>}W</button>

            <button className="drum-pad" id = "Heater-3" name="E" onClick={props.powerchecked ? handleplaysong : ""}>
            {props.bankchecked ? <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            ref={audioRefE}
            className="clip" id="E" autoplay></audio>: <audio
            src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/122[kb]linn-RIDE-v2.wav.mp3"
            ref={audioRefE}
            className="clip" id="E" autoplay></audio>}E</button>

            <button className="drum-pad" id = "Heater-4" name="A" onClick={props.powerchecked ? handleplaysong : ""}>
              {props.bankchecked ? <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            ref={audioRefA} className="clip" id="A" autoplay></audio> :  <audio
            src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/13[kb]linn-CONGAHH.wav.mp3"
            ref={audioRefA} className="clip" id="A" autoplay></audio>}A</button>


            <button className="drum-pad" id = "Heater-6" name="S" onClick={props.powerchecked ? handleplaysong : ""}>
            {props.bankchecked ? <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            ref={audioRefS}
            className="clip" id="S" autoplay></audio> : <audio
            src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/30[kb]linn-CONGA-H-v2.wav.mp3"
            ref={audioRefS}
            className="clip" id="S" autoplay></audio>}S</button>


            <button className="drum-pad" id = "Dsc_oh"   name="D"  onClick={props.powerchecked ? handleplaysong : " "}>{props.bankchecked ? <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            ref={audioRefD}
            className="clip" id="D" autoplay></audio> : <audio
            src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/8[kb]linn-CHHS.wav.mp3"
            ref={audioRefD}
            className="clip" id="D" autoplay></audio>}D</button>


            <button className="drum-pad" id = "Kick_n_Hat" name="Z"  onClick={props.powerchecked ? handleplaysong : ""}>{props.bankchecked ? <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            ref={audioRefZ}
            className="clip" id="Z" autoplay></audio> : <audio
            src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/10[kb]linn-CABASA.wav.mp3"
            ref={audioRefZ}
            className="clip" id="Z" autoplay></audio>}Z</button>


            <button className="drum-pad" id = "RP4_KICK_1" name="X"  onClick={props.powerchecked ? handleplaysong : ""}>{props.bankchecked ? <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            ref={audioRefX}
            className="clip" id="X" autoplay></audio>: <audio
            src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/34[kb]linn-BDRUM13.wav.mp3"
            ref={audioRefX}
            className="clip" id="X" autoplay></audio>}X</button>

            <button className="drum-pad" id = "Cev_H2" name="C" onClick={props.powerchecked ? handleplaysong : ""}>{props.bankchecked ? <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            ref={audioRefC}
            className="clip" id="C" autoplay></audio>: <audio
            src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/Linn%20Drums/45[kb]linn-TOMHI3.wav.mp3"
            ref={audioRefC}
            className="clip" id="C" autoplay></audio>}C</button>
          </div>

          {/* "Linn Drums"  Display output below*/}

           { volumeChanged ? volumeresult : songresult}


            <div className="volumebarcontainer">
         <input type="range" min={0} max={1} step={0.02} value={volume} onChange={props.powerchecked ? Handlevolume : ""} className="volumebar"/>
       </div>


        </div>
    );
}

export default Button;