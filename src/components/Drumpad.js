import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Drumpad = ({ handleKey }) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      handleKey(e);
    });
    return () => {
      document.removeEventListener("keydown", (e) => {
        handleKey(e);
      });
    };
  }, []);

  return (
    <div id={"drum-pad-container"}>
      <button
        onClick={(e) => handleKey(e)}
        value={"Q"}
        className={"drum-pad btn-floating btn-large green"}
        id={"heater1"}
      >
        <audio
          className={"clip"}
          id={"Q"}
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        ></audio>
        Q
      </button>
      <button
        onClick={(e) => handleKey(e)}
        value={"W"}
        className={"drum-pad btn-floating btn-large green"}
        id={"heater2"}
      >
        <audio
          className={"clip"}
          id={"W"}
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        ></audio>
        W
      </button>
      <button
        onClick={(e) => handleKey(e)}
        value={"E"}
        className={"drum-pad btn-floating btn-large green"}
        id={"heater3"}
      >
        <audio
          className={"clip"}
          id={"E"}
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        ></audio>
        E
      </button>
      <button
        onClick={(e) => handleKey(e)}
        value={"A"}
        className={"drum-pad btn-floating btn-large green"}
        id={"heater4"}
      >
        <audio
          className={"clip"}
          id={"A"}
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        ></audio>
        A
      </button>
      <button
        onClick={(e) => handleKey(e)}
        value={"S"}
        className={"drum-pad btn-floating btn-large green"}
        id={"dsc-oh"}
      >
        <audio
          className={"clip"}
          id={"S"}
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        ></audio>
        S
      </button>
      <button
        onClick={(e) => handleKey(e)}
        value={"D"}
        className={"drum-pad btn-floating btn-large green"}
        id={"kick-n-hat"}
      >
        <audio
          className={"clip"}
          id={"D"}
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        ></audio>
        D
      </button>
      <button
        onClick={(e) => handleKey(e)}
        className={"drum-pad btn-floating btn-large green"}
        value={"Z"}
        id={"cev-h2"}
      >
        <audio
          className={"clip"}
          id={"Z"}
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        ></audio>
        Z
      </button>
      <button
        onClick={(e) => handleKey(e)}
        value={"X"}
        className={"drum-pad btn-floating btn-large green"}
        id={"chord-1"}
      >
        <audio
          className={"clip"}
          id={"X"}
          src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
        ></audio>
        X
      </button>
      <button
        onClick={(e) => handleKey(e)}
        value={"C"}
        className={"drum-pad btn-floating btn-large green"}
        id={"dry-ohh"}
      >
        <audio
          className={"clip"}
          id={"C"}
          src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
        ></audio>
        C
      </button>
    </div>
  );
};

Drumpad.propTypes = {
  handleKey: PropTypes.func,
};

export default Drumpad;
