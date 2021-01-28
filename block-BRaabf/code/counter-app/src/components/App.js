import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter : 0,
            step : 1
        }
    }
    selectStep = (num) => {
        this.setState({
            step: num
        })
    }
    incrementHandler = () => {
        this.setState({
            counter: this.state.counter + this.state.step,
        })
    }
    decrementHandler = () => {
        this.setState({
            counter: this.state.counter - this.state.step,
        })
    }
    resetHandler =() => {
        this.setState({
            counter: 0,
        })
    }
    render() {
        return (
            <section className = "container">
                <h2>{this.state.counter}</h2>
                <div className="button-step">
                    <button onClick={()=>{this.selectStep(5)}}>5</button>
                    <button onClick={()=>{this.selectStep(10)}}>10</button>
                    <button onClick={()=>{this.selectStep(15)}}>15</button>
                </div>
                <div className="button-counter">
                    <button onClick ={ this.incrementHandler}>Increment</button>
                    <button onClick ={ this.decrementHandler}>Decrement</button>
                    <button onClick = { this.resetHandler}>Reset</button>
                </div>
            </section>
        )
    }
}

export class NewApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter : 0,
            step : 1,
            maxValue : Infinity
        }
    }
    selectStep = (num) => {
        this.setState({
            step: num
        })
    }
    maxValue = (num) => {
        this.setState({
            maxValue: num
        })
    }
    incrementHandler = () => {
        this.setState({
            counter: this.state.counter < this.state.maxValue ? this.state.counter  + this.state.step : this.state.counter,
        })
    }
    decrementHandler = () => {
        this.setState({
            counter: this.state.counter - this.state.step,
        })
    }
    resetHandler =() => {
        this.setState({
            counter: 0,
        })
    }
    render() {
        return (
            <section className = "container">
                <h2>{this.state.counter}</h2>
                <div className="button-step">
                    <button onClick={()=>{this.selectStep(5)}}>5</button>
                    <button onClick={()=>{this.selectStep(10)}}>10</button>
                    <button onClick={()=>{this.selectStep(15)}}>15</button>
                    <div className="button-max">
                        <button onClick = {()=> {this.maxValue(15)}}>15</button>
                        <button onClick = {()=> {this.maxValue(100)}}>100</button>
                        <button onClick = {()=> {this.maxValue(200)}}>200</button>
                    </div>
                </div>
                <div className="button-counter">
                    <button onClick ={ this.incrementHandler}>Increment</button>
                    <button onClick ={ this.decrementHandler}>Decrement</button>
                    <button onClick = { this.resetHandler}>Reset</button>
                </div>
            </section>
        )
    }
}


export default App;

