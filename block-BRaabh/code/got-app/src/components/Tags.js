import React from "react"
import data from "../data.json"
import People from "./People";

class Tags extends React.Component {
    constructor(props) {
        super()
        this.state = {
            activeHouse : "",
        }
    }
    activeHandle = (house) => {
        this.setState({
            activeHouse : house,
        })
    }
    render() {
         return (
            <>
            {
                data.map((house)=> {
                    return <button key = {house.name} onClick = {()=>this.activeHandle(house.name)}>{house.name}</button>
                })
            }
            <People activeHouse={this.state.activeHouse} houseThis={this}/>
            </>
        )
        
    }
}

export default Tags