import React from "react";

const ResultsContainer = (props) => {
  return (
      <div className="row">
        {props.children}
      </div>
  );
}

export default ResultsContainer;
