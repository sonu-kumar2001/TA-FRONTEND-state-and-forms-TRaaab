import ReactDOM from "react-dom"
import App, {NewApp} from "./components/App"
import "./stylesheets/style.css"

function CounterApp() {
    return <>
        <App/>
        <NewApp/>
    </>
}

ReactDOM.render(<CounterApp/>,document.getElementById("root"));