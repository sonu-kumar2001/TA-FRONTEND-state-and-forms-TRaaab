import React from "react"
import data from "../data.json"
import Menu from "./Menu"

class Toggle extends React.Component{
    constructor(props) {
        super()
        this.state = {
            activeCategory : "All",
        }
    }
    handleClick = (category) => {
        console.log(category,"handleclick category")
        this.setState({
            activeCategory : category,
        })
    }
    allHandler = (all) => {
        this.setState({
            activeCategory : all,
        })
    }
    render() {
        
        let menu = data.map(menu=> menu.category);
        let allData;
        if(this.state.activeCategory === "All") {
            allData = data;

        } else {
            allData = data.filter((menuA) => this.state.activeCategory === menuA.category);
            console.log(allData);
        }
        return(
            <section className = "food-section">
                <div className ="container">
                    <h1>Our Menu</h1>
                    <ul className= "category">
                        <li onClick = {()=> this.allHandler("All")}>All</li>
                        {
                            menu.map((category,i)=> {
                                return (
                                    <li key={i} className = {category === this.state.activeCategory ? "active" : ""} onClick = {()=> this.handleClick(category)}>{category}</li>
                                )
                            })
                        }
                    </ul>
                    <Menu allData={allData} />
                </div>
            </section>
        )
    }
}

export default Toggle