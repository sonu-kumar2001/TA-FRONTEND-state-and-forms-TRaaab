import React from "react"

class MultipleForm extends React.Component {
    constructor(props) {
        super()

        this.state = {
            text: "",
            date: "",
            textarea: ""
        }

        this.file = React.createRef();
    }

    changeHandler = ({target})=> {
        let {name, value} = target;
        this.setState({
            [name] : value
        });
    }

    fileHandler = (event) => {
        alert(event.target.files[0].name);
    }

    render() {
        return (
            <section className= "multiple-form">
                <div className="container">
                    <form>
                        <label htmlFor="input-text">Text Input</label>
                        <input type="text" id="input-text" name= "text" value={this.state.text} onChange={this.changeHandler} />
                        <label htmlFor="input-date">Date Input</label>
                        <input type="date" id="input-date" name="date" value={this.state.date} onChange={this.changeHandler} />
                        <label htmlFor="input-file">File Input</label>
                        <input type="file" id="input-file" ref={this.file} onChange={this.fileHandler} />
                        <label htmlFor="input-readonly">Read-Only Input</label>
                        <input type="text" id="input-readonly" value="This can only be copied" readOnly />
                        <label htmlFor="input-disabled">Disabled Input</label>
                        <input type="text" id="input-disabled" disabled />
                        <label htmlFor="input-textarea">Textarea</label>
                        <textarea id="input-textarea" cols="30" rows="3" name= "textarea" value={this.state.textarea} onChange={this.changeHandler} />
                    </form>
                </div>
            </section>
        )
    }
}

export default MultipleForm;