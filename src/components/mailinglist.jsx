import React from "react";

export default function Mailing(props) {
    return (
        <div className="mailinglist">
            <p className="slogan">Get a fresh take on what you didn't learn in sex-ed.</p>
            <form><input className="emailinput"placeholder="jwhite@gmail.com"></input></form>
            <button className="mailinglistbtn" href="test.html">Join our mailing list</button>
            <div className="survey">
            <a className="quizlink" href="https://kristawhite122148.typeform.com/to/hNxxl3 " target="_blank" rel="noopener noreferrer">or take this short quiz</a>
        </div>
        </div>
    )
}