function Match(props) {
    let h3 = null;
    if(!props.activeHouse || !props.activePerson) {
        h3 = <h3>Please Select House and a Person</h3>
    } else {
        h3 =  props.activePerson === props.activeHouse ? "You got a match" : "Sorry try again"
    }
    return h3;
}

export default Match;