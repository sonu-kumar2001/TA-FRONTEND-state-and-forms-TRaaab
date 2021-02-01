import React from "react";

class Button extends React.Component {
    constructor(props) {
        super()

        this.state= {
            default: false,
            success: false,
            error: false,
            warning: false,
            info: false,
        }
    }

    handleClick = (name)=> {
        this.setState({
            [name] : !this.state[name]
        })
    }

    render() {
        return (
            <section className="Notification">
                <div className="container">
                    <div className= "button-option">
                        <button className={this.state.default ? "active-state" : ""} onClick={()=> this.handleClick("default")}> {this.state.default ? "Hide Default" : "Show Default"} </button>
                        <button className={this.state.success ? "active-state" : ""} onClick={()=> this.handleClick("success")}> {this.state.default ? "Hide Success" : "Show Success"} </button>
                        <button className={this.state.error ? "active-state" : ""} onClick={()=> this.handleClick("error")}> {this.state.default ? "Hide Error" : "Show Error"} </button>
                        <button className={this.state.warning ? "active-state" : ""} onClick={()=> this.handleClick("warning")}> {this.state.default ? "Hide Warning" : "Show Warning"} </button>
                        <button className={this.state.info ? "active-state" : ""} onClick={()=> this.handleClick("info")}> {this.state.default ? "Hide Info" : "Show Info"} </button>
                    </div>

                    <div className="result">
                        <button className={this.state.default ? "active default" : "hide default"}><i class="fas fa-times" onClick={()=> this.handleClick("default")}></i> Default Notification</button>
                        <button className={this.state.success ? "active success" : "hide success"}><i class="fas fa-times" onClick={()=> this.handleClick("success")}></i> Success Notification</button>
                        <button className={this.state.error ? "active error" : "hide error"}> <i class="fas fa-times" onClick={()=> this.handleClick("error")}></i> Error Notification</button>
                        <button className={this.state.warning ? "active warning" : "hide warning"}> <i class="fas fa-times" onClick={()=> this.handleClick("warning")}></i> Warning Notification</button>
                        <button className={this.state.info ? "active info" : "hide info"}> <i class="fas fa-times" onClick={()=> this.handleClick("info")}></i> Info Notification</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Button;