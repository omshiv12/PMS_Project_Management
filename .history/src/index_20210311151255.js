import React from "react";
import ReactDOM from 'react-dom';
function Card(){
    return(
        <>
    <div className="cards">
        <div className="card">
            <img src="" alt="myPic" className="card_img"/>
            <div className="card_info">
                <span className="card__category">
                    <h3 className="card__title"></h3>
                    <a href="" target="_blank">
                        <button>Watch Now </button>
                    </a>
                </span>
            </div>
        </div>
    </div>
    </>
    )
}
ReactDOM.render(
    <Card/>
    ,document.getElementById("root")
);