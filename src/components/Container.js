import React from "react";
import PropTypes from "prop-types";
import Drumpad from "./Drumpad";
import Controls from "./Controls";
import { useState } from "react";

let names = {
  Q: "heater1",
  W: "heater2",
  E: "heater3",
  A: "heater4",
  S: "dsc-oh",
  D: "kick-n-hat",
  Z: "cev-h2",
  X: "chord_1",
  C: "dry-ohh",
};

const Container = (props) => {
  const [display, updateDisplay] = useState("");
  const [key, updateKey] = useState("");

  const handleDisplay = (key) => {
    updateDisplay(names[key]);
  };

  const handleSound = (key) => {
    let sound = document.getElementById(key);
    sound.play();
  };

  const handleKey = (e) => {
    let audioId = e.target.firstChild.id || e.key.toUpperCase();
    let name = e.target.value || e.key.toUpperCase();
    console.log(audioId);
    updateKey(key);
    handleDisplay(name);
    handleSound(audioId);
  };
  return (
    <div id={"drum-machine"}>
      <Drumpad handleKey={handleKey} handleSound={handleSound} />
      <Controls display={display} />
    </div>
  );
};

Container.propTypes = {};

export default Container;
