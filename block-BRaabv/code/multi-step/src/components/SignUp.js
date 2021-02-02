function SignUp(props) {
    return (
        <div className="flex">
            <div className="img">
                <img src="/images/form-image.jpg" alt="form-svg"/>
            </div>
            <div className="form-details">
                <nav>
                    <ul className="parent-list flex">
                        <li className="list-items"> <span className="active box">1</span> <span>Sign Up</span></li>
                        <li className="list-items"> <span className="box">2</span> <span>Message</span></li>
                        <li className="list-items"> <span className="box">3</span> <span>Checkbox</span></li>
                    </ul>
                </nav>
                <div className="forms">
                    <p>Step 1/3</p>
                    <h2>Sign Up</h2>

                    <form className="signup-form">
                        <div className="input-flex">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" required value={props.state.firstName} placeholder="Sonu" onChange={props.changeHandler} />
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" name="date" id="dob" required onChange={props.changeHandler} />
                        </div>

                        <div className="input-flex">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" required value={props.state.lastName} placeholder="Kumar" onChange={props.changeHandler} />
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" required value={props.state.email} placeholder="email@xyz.com" onChange={props.changeHandler} />
                        </div>

                        <label htmlFor="address">Address</label>
						<input type="text" name="address" id="address" required value={props.state.address} placeholder="Hanuman nagar, Patna-20" onChange={props.changeHandler} />
                    </form>

                    <button onClick={props.incrementHandler} className="next-step">Next Step</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;