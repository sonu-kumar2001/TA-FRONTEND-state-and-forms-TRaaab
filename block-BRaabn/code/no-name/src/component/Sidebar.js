import React from "react"

class Sidebar extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isVisible : false,
            popup : false,
        }
    }
    handleClick = () => {
        this.setState((prevState)=> {
            return {
                isVisible: !prevState.isVisible
            };
        });
    };
    popupClick = () => {
        this.setState((prevState)=> {
            return {
                popup: !prevState.popup
            };
        });
    };
    render() {
        return (
            <main>
                <section className = "sidebar-section">
                    <div className="flex">
                       {this.state.isVisible ? <Nav click={this.handleClick}/> : <Cross click={this.handleClick}/>}
                        <div className="body">
                        {this.state.popup ? <Popup click={this.popupClick}/> : <Button click={this.popupClick}/>}
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

function Nav(props) {
    return (
        <div className="sidebar">
            <div className="flex-between">
                <h3>Coding Addict</h3> 
                <i onClick={props.click} className="fas fa-times cross-red"></i>
            </div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li> 
            </ul>
        </div>
    )
}

function Cross(props) {
    return (
        <i onClick={props.click} className="fas fa-bars"></i>
    )
}

function Button(props) {
    return (
        <button onClick={props.click}>Show Modal</button>
    )
}

function Popup(props) {
    return (
        <div className="popup">
            <i onClick={props.click} className="fas fa-times cross-red"></i>
            <h3>Modal Content</h3>
        </div>
    )
}

export default Sidebar;