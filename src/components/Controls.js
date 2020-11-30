import React from "react";
import PropTypes from "prop-types";

const Controls = ({ display }) => {
  //id with display goes in here to show the drumpad being pressed on
  //drumpad is in state
  return (
    <div className={"col s2 controls"}>
      <span id={"display"} className={"flow-text"}>
        {display}
      </span>
    </div>
  );
};

Controls.propTypes = {
  display: PropTypes.string,
};

export default Controls;
