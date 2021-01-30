import React from "react"
import data from "../data.json"

class Accordion extends React.Component{
    constructor(props) {
        super()
        this.state = {
            question: ""
        }
    }
    questionHandler = (question) => {
        this.setState({
            question: question
        })
    }
    render() {
        return (
            <section className = "container">
                <div className ="accordion-question">
                    {
                        data.map(faq=> {
                            return (
                                <>
                                <div className = "question">
                                    <h2 className={this.state.question === faq.question ? "active" : "inactive"} onClick= {()=> this.questionHandler(faq.question)}>{faq.question}</h2>
                                </div>
                                <div className = "answer"> 
                                    <h2 className = {this.state.question === faq.question ? "visible" : "hidden"}>{faq.answer}</h2>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                    
            </section>
        )
    }
}

export default Accordion;