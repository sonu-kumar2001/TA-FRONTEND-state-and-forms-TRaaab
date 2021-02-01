import React from "react"

class FormValidate extends React.Component {
    constructor(props) {
        super()

        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            errors: {
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            }
        }
    }

    validateEmail = (email) => {
		const regex = /\S+@\S+\.\S+/;
		return regex.test(email);
  }

    changeHandler = ({target}) => {
        let {name, value} = target;
        let error = this.state.errors;

        switch (name) {
            case "username":
                error.username = value.length < 4 ? "username must be at least 3 character" : ""
                break;
            case "email" :
                error.email = this.validateEmail(value) ? "" : "Email is not valid"
                break;
            case "password" :
                error.password = value.length < 7 ? "Password must be at least 6 character" : ""
                break;
            case "confirmPassword" :
                error.confirmPassword = this.state.password === value ? "" : "Password didn't matched"
                break;
            default:
                break;
        }

        this.setState({
            error,[name] : value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert("Successfully registered");
    }

    render() {
        const{username,email,password,confirmPassword} = this.state.errors;
        return (
            <section className = "form-validaton">
                <div className="container">
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" required value={this.state.username} onChange={this.changeHandler} className={username ? "error" : "success"}/>
                        <span className="text-red">{username}</span>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required value={this.state.email} onChange={this.changeHandler} className={email ? "error" : "success"}/>
                        <span className="text-red">{email}</span>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required value={this.state.password} onChange={this.changeHandler} className={password ? "error" : "success"}/>
                        <span className="text-red">{password}</span>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="text" name="confirmPassword" id="confirm-password" required value={this.state.confirmPassword} onChange={this.changeHandler} className={confirmPassword ? "error" : "success"}/>
                        <span className="text-red">{confirmPassword}</span>
                        <input type="submit" value="submit"></input>
                    </form>
                </div>
            </section>
        )
    }
}

export default FormValidate;