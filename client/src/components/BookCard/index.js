import React from "react";

const BookCard = (props) => {
  return (
    <div className="col s12 m6 l4">
        <div className="card large amber lighten-4">

          <div className="card-image">
            <img src={ props.book.image ? props.book.image : "https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg"}></img>
            <h4 className="card-title" style={{ opacity: .6 }}>
              <a className=" amber lighten-5 waves-effect btn-flat" href={ props.book.link ? props.book.link : "https://books.google.com/" }>{ props.book.title ? props.book.title : "Book Title" }</a>
            </h4>
            <button className="btn-floating halfway-fab waves-effectbtn" onClick={props.handleSubmit} style={ { bottom: "5px" }}>
                <i className="material-icons left red">{ props.saved ? "remove" : "add" }</i>
            </button>
          </div>
          <div className="card-content">
              <h6><strong> { props.book.authors ? props.book.authors : "Unknown" } </strong>({ props.book.publishedDate? props.book.publishedDate : "0000" })</h6>
              <p style={ { fontSize: "12px" }}>
                { props.book.description ? props.book.description : "No Description"}
              </p>

          </div>

        </div>
    </div>
  );
}

export default BookCard;
