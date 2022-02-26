import React from "react";
import Card from "./Card";


export default function Section() {
    const [formData, setFormData] = React.useState({
        fullName: "", 
        title: "", 
        email: "", 
        github__link: "", 
        linkedin__link: "", 
        bio:""
    })

    const [isSubmitted, setIsSubmitted] = React.useState(false)

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
        setIsSubmitted(prevIsSubmitted => !prevIsSubmitted)
        if(isSubmitted){
            setFormData(prevFormData => {
                return (
                    {
                        fullName: "", 
                        title: "", 
                        email: "", 
                        github__link: "", 
                        linkedin__link: "", 
                        bio:""
    
                    }
                )
            })
        }        

    }
    
    return (
        <div className="form">
            {isSubmitted && 
                <Card 
                    fullName={formData.fullName}
                    title={formData.title}
                    email={formData.email}
                    githubLink={formData.github__link}
                    linkedinLink={formData.linkedin__link}
                    bio={formData.bio}
                />}

             <form style={isSubmitted ? {display: "none"} : {display: "block"}}>
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
            </form>
            <button type="submit" className="btn__dark" onClick={handleSubmit}>{isSubmitted ? "redo" : "customize card"}</button>
        </div>
       
    )
}