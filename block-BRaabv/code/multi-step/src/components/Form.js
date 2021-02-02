import React from "react"
import SignUp from "./SignUp";
import Message from "./Message";
import Checkbox from "./Checkbox"

class Form extends React.Component {
    constructor(props) {
        super()
        this.state = {
            steps: 1,
            firstName:"",
            lastName: "",
            date: "",
            email: "",
            address: "",
            message: "",
            choiceOne: false,
            choiceTwo: false,
            male: false,
            female: false,
            option: "",
            policy: ""
        }
    }
    changeHandler = ({target}) => {
        let {name , value} = target
        this.setState({
            [name] : value
        })
    }

    radioHandler = ({target}) => {
        let {id} = target
        this.setState({
            [id] : !this.state[id]
        })
    }

    incrementHandler = () => {
        this.setState({
            steps : this.state.steps + 1
        })
    }
    decrementHandler= () => {
        this.setState({
            steps: this.state.steps - 1
        })
    }

    render() {
        function showUi(steps,incrementHandler,decrementHandler,radioHandler,changeHandler,thisState) {
            if(steps === 1) {
                return <SignUp incrementHandler={incrementHandler} changeHandler={decrementHandler} state={thisState} />
            } else if(steps === 2) {
                return <Message decrementHandler={decrementHandler} incrementHandler={incrementHandler} radioHandler={radioHandler} changeHandler={changeHandler} state={thisState}/>
            } else {
                return  <Checkbox decrementHandler={decrementHandler} radioHandler={radioHandler} changeHandler={changeHandler} state={thisState}/>
            }
        }
        return (
            <section className="multi-step-from">
                <div className="container">
                    {
                        showUi(this.state.steps,this.incrementHandler,this.decrementHandler,this.radioHandler,this.changeHandler, this)
                    }
                </div>
            </section>
        )
    }
}

export default Form;