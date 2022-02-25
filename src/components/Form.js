import React from "react";
import Card from "./Card";

export default function Form() {
    const [formData, setFormData] = React.useState({
        fullName: "", 
        title: "", 
        email: "", 
        github__link: "", 
        linkedin__link: "", 
        bio:""
    })

    let isSubmitted = false;

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return (
                {
                    ...prevFormData,
                    [name]: value

                }
            )
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        isSubmitted = true;
        if(isSubmitted){
            console.log(isSubmitted + "hi")
        }
    }
    
    return (
        <div className="form">
             {isSubmitted && <Card />}
             <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="full name eg. Chansu Lin"
                className="form__input"
                name="fullName"
                onChange={handleChange}
                value={formData.fullName}
            />
            <input 
                type="text" 
                placeholder="title eg. Financial Analyst"
                className="form__input"
                name="title"
                onChange={handleChange}
                value={formData.title}
            />
            <input 
                type="email" 
                placeholder="email eg. chansu@mail.com"
                className="form__input"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <input 
                type="text" 
                placeholder="github profile link"
                className="form__input"
                name="github__link"
                onChange={handleChange}
                value={formData.github__link}
            />
            <input 
                type="text" 
                placeholder="linkedin profile link"
                className="form__input"
                name="linkedin__link"
                onChange={handleChange}
                value={formData.linkedin__link}
            />
            <textarea
                placeholder="short bio eg. Extremely professional cat financial analyst..."
                className="form__input"
                name="bio"
                onChange={handleChange}
                value={formData.bio}
            >
            </textarea>
            <button className="btn__dark">customize card</button>
            
        </form>
        </div>
       
    )
}