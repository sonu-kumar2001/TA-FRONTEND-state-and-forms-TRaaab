import React from "react"

class Sidebar extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isVisible : true,
        }
    }
    handleClick = () => {
        this.setState((prevState)=> {
            return {
                isVisible: !prevState.isVisible
            };
        });
    };
    render() {
        return (
            <main>
                <section className = "sidebar-section">
                    <div className="flex">
                        <div className={this.state.isVisible ? "sidebar show" : "sidebar hide"}>
                            <ul>
                               <li>Home</li>
                               <li>Contact</li>
                               <li>About</li> 
                            </ul>
                        </div>
                        <div className="body"><h3>This is main body</h3></div>
                    </div>
                </section>
                <footer>
                    <button onClick = {this.handleClick}>{this.state.isVisible ? "Hide" : "Show"}</button>
                </footer>
            </main>
        )
    }
}

export default Sidebar; 