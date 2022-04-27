import React from "react";

export default function(){
    return(
        <div className="card">
            <img src ="../images/katie-zaferes.png" className="card--image"/>
            <div className="card--stats">
                <img src="../images/star.png"/>
                <span className="gray"> 5.0  </span>
                <span className="gray">(6)  </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p >
                <span className="bold">From $136</span> <span> / person</span></p>
        </div>
    )
}