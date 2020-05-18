import React from "react";

const SearchBar = (props) => {
  return (
      <div className="row">
          <div className="col s12">
              <div className="card amber lighten-5">
                <div className="card-content">
                        <div className="input-field white-text" style={ {dasdjfcolor: "#FFFAF0" }}>
                            <input onChange={props.handleInputChange} placeholder="Find a book" id="search-bar" type="text" className="validate" />
                        </div>
                        <button className="btn-floating pulse halfway-fab waves-effect waves-light btn" onClick={props.handleSubmit}><i className="material-icons left">search</i></button>
                </div>
              </div>
          </div>
      </div>
  );
}

export default SearchBar;
