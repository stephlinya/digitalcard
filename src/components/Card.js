import React from "react";

export default function Card(props) {
    return(
       <div className="card" onClick={()=> alert("Sorry this doesn't do anything yet")}>
           <div className="card__text">
                <h2 className="card__name">{props.fullName}</h2>
                <h3 className="card__title">{props.title}</h3>
                <p className="card__bio">{props.bio}</p>
            </div>
            <div className="card__footer">
                <div className="card__socials">
                    <a href="{props.githubLink}" target="_blank"><img src="./github-logo.png" className="social-logo" alt=""/></a>
                    <a href="{props.linkedinLink}" target="_blank"><img src="./linkedin-logo.png" className="social-logo" alt=""/></a>
                </div>
                <a href="#" className="card__email">{props.email}</a>
            </div>
       </div>
    )
}