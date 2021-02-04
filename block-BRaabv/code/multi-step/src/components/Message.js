function Message(props) {
    return (
        <div className="flex">
        <div className="img">
            <img src="/images/form-image.jpg" alt="form-svg"/>
        </div>
        <div className="form-details">
            <nav>
                <ul className="parent-list flex">
                    <li className="list-items"> <span className="box">1</span> <span>Sign Up</span></li>
                    <li className="list-items"> <span className="active box">2</span> <span>Message</span></li>
                    <li className="list-items"> <span className="box">3</span> <span>Checkbox</span></li>
                </ul>
            </nav>
            <div className="forms">
                <p>Step 2/3</p>
                <h2>Message</h2>

                <form className="message-form">
					<label className="message-label" htmlFor="message">Message</label>
					<textarea name="message" id="message" cols="30" rows="6" value={props.state.message} placeholder="Type Message Here" onChange={props.changeHandler}></textarea>
                    <div className="message">
                        <input type="radio" name="choice" id="choiceOne" className="radio" checked={props.state.choiceOne} onChange={props.radioHandler} />
                        <label htmlFor="choiceOne" className="radio">The number one choice</label>
                        <input type="radio" name="choice" id="choiceTwo" className="radio" checked={props.state.choiceTwo} onChange={props.radioHandler} />
                        <label htmlFor="choiceTwo" className="radio">The number one choice</label>
                    </div>
                </form>
                <div className="button-message flex-between">
                <button onClick={props.decrementHandler} className="prev-step">Back</button>
                <button onClick={props.incrementHandler} className="next-step">Next Step</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Message;