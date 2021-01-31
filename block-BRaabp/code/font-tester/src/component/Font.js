import React from "react"
import Card from "./Card"
class Font extends React.Component {
    constructor(props) {
        super()
        this.state = {
            font: "",
            size:"20"
        }
    }

    changeHandle = (event) => {
        event.preventDefault()
        this.setState({
            font: event.target.value
        })
    }

    sizeHandle = (event) => {
        this.setState({
            size: event.target.value
        })
    }

    render() {
        return (
            <section className="font-section">
                <h1>Font Tester</h1>
                <div className="container">
                        <input value={this.state.font} onChange={this.changeHandle} type="text" placeholder="Type Something"></input>
                        <span>{this.state.size}px</span>  <input vlaue= {this.state.size} onChange={this.sizeHandle} type="range" min="10" max="100" step="1"></input>
                        <Card font={this.state.font} size={this.state.size} />
                </div>
            </section>
        )
    }
}


export default Font