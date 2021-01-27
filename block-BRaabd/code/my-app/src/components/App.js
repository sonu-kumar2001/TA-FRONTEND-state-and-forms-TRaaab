import React from "react";

class App extends React.Component {
    constructor(props) {
        super()
        this.state = {
            imageUrl : ""
        }
    }

    imageChnage = (url)=> {
        this.setState({
            imageUrl : url
        })
    }
   
    render() {
        return (
            <section className = "container">
                <div className = "flex">
                    <button onClick = {()=> {this.imageChnage("/assets/basketball.jpg")}}>Basketball</button>
                    <button onClick = {()=> {this.imageChnage("/assets/cricket.jpeg")}}>Cricket</button>
                    <button onClick = {()=> {this.imageChnage("/assets/laptop.jpg")}}>Laptop</button>
                    <button onClick = {()=> {this.imageChnage("/assets/phone.jpg")}}>Phone</button>
                    <button onClick = {()=> {this.imageChnage("/assets/pubg.jpeg")}}>Pubg</button>
                    <button onClick = {()=> {this.imageChnage("/assets/tiger.jpg")}}>Tiger</button>
                    
                </div>
                <div className = "image">
                    <img src = {this.state.imageUrl} alt= "" />
                </div>
            </section>
        )
    }
}

export default App;