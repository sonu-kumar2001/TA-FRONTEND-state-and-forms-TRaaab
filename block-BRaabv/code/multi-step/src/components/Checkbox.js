function Checkbox(props) {
    return (
        <div className="flex">
            <div className="img">
                <img src="/images/form-image.jpg" alt="form-svg"/>
            </div>
            <div className="form-details">
                <nav>
                    <ul className="parent-list flex">
                        <li className="list-items"> <span className="box">1</span> <span>Sign Up</span></li>
                        <li className="list-items"> <span className="box">2</span> <span>Message</span></li>
                        <li className="list-items"> <span className="active box">3</span> <span>Checkbox</span></li>
                    </ul>
                </nav>
                <div className="forms">
                    <p>Step 3/3</p>
                    <h2>Checkbox</h2>

                    <form className="checkbox-form">

                        <div className="checkbox-flex">
                            <input type="radio" name="sex" id="male" className="hidden" checked={props.state.male} onChange={props.radioHandler} />
                            <label htmlFor="male" className="w-full p-2">
                                <img src="/images/male.jpg" alt="male" className="w-46" />
                            </label>

                            <input type="radio" name="sex" id="female" className="hidden" checked={props.state.female} onChange={props.radioHandler} />
                            <label htmlFor="female" className="w-full p-2">
                                <img src="/images/female.jpg" alt="female" className="w-46" />
                            </label>
                        </div>
                        
                        <div className="policy">
                            <input type="checkbox" name="checkbox" id="option" required />
                            <label htmlFor="option">I want to add this option</label>

                            <input type="checkbox" name="policy" id="policy" required />
                            <label htmlFor="policy">Please accept policy to proceed further</label>
                        </div>
                    </form>

                    
                    <button onClick={props.decrementHandler} className="next-step">Back</button>
                </div>
            </div>
        </div>
    )
}

export default Checkbox