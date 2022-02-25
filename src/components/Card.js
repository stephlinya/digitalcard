import React from "react";

export default function Card() {
    return(
       <div className="card">
           <div className="card__text">
                <h2 className="card__name">Chansu Lin</h2>
                <h3 className="card__title">financial analyst</h3>
                <p className="card__bio">Extremely professional cat financial analyst. Ready to work and build innovative products. Increased profit margins by 100% at Purrfect Paw Salon.</p>
            </div>
            <div className="card__footer">
                <div className="card__socials">
                    <img src="./github-logo.png" className="social-logo"/>
                    <img src="./linkedin-logo.png" className="social-logo"/>
                </div>
                <a href="#" className="card__email">chansu@mail.com</a>
            </div>
       </div>
    )
}