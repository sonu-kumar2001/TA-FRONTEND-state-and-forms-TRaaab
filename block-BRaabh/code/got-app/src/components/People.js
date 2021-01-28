import React from "react"
import data from "../data.json"
import Match from "./Match"

class People extends React.Component {
    constructor(props) {
        super()
        this.state = {
            activePerson : ""
        }
    }
    personHandler = (name) => {
        this.setState({
            activePerson : name
        })
    }

    resetHandler = () => {
        this.setState({
            activePerson: ""
        })
        this.props.houseThis.setState({
            activeHouse: ""
        })
    }
    render() {
        return (
            <>
            <section className ="people-image">
                <div className="flex">
                    {
                      data.map((house)=> {
                          return house.people.map(people=> {
                              return <img key={people.name} onClick = {()=> this.personHandler(house.name)} src={people.image} alt="people"/>
                          })
                      })  
                    }
                </div>
            </section>
            <button onClick={this.resetHandler}>Reset</button>
            <Match activeHouse={this.props.activeHouse} activePerson={this.state.activePerson} />
            </>
        )
    }
}

export default People