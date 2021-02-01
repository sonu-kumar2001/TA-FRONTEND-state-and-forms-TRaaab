import React from "react"

class Form extends React.Component {
    constructor(props) {
        super()

        this.state = {
            address:"",
            postalCode:"",
            city:"",
            country:"",
            isBillingAddressSame: false,
            billingAddress: "",
            billingPostalCode: "",
            billingCity: "",
            billingCountry: ""
        }
    }

    changeHandler = ({target}) => {
        let {name,value} = target;

        this.setState({
            [name] : value
        })
    }

    checkedHAndler = ({target}) => {
        this.setState({
            isBillingAddressSame: target.checked
        })
    }
    render() {
        return (
            <section className="billing-shipping-form">
                <div className="container">
                    <div className="flex-between">
                        <div className="shipping">
                            <h3>Shipping Address</h3>
                            <form>
                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" id="address" minLength="10" placeholder="e.g Hanuman Nagar, Patna" value={this.state.address} onChange={this.changeHandler} />
                                <label htmlFor="postalCode">Zip/Postal Code</label>
                                <input type="text" name="postalCode" id="postalCode" minLength="6" placeholder="e.g 800020" value={this.state.postalCode} onChange={this.changeHandler} />
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" id="city" minLength="3" placeholder="e.g Patna" value={this.state.city} onChange={this.changeHandler} />
                                <label htmlFor="country">Country</label>
                                <input type="text" name="country" id="country" minLength="3" placeholder="e.g India" value={this.state.country} onChange={this.changeHandler} />
                            </form>
                        </div>
                        <div className="billing">
                            <h3>Billing Address</h3>
                            <form>
                                <div className="flex">
                                <input type="checkbox" name="isBillingAddressSame" className="checkbox" id="isBillingAddressSame"  checked={this.state.isBillingAddressSame} onChange={this.checkedHAndler} />
                                <label htmlFor="isBillingAddressSame">Same as the Shipping Address?</label>
                                </div>
                                <label htmlFor="billingAddress">Address</label>
                                <input type="text" name="billingAddress" id="billingAddress" minLength="10" placeholder="e.g Hanuman Nagar, Patna" value={this.state.isBillingAddressSame ? this.state.address : this.state.billingAddress} onChange={this.changeHandler} />
                                <label htmlFor="billingPostalCode">Zip/Postal Code</label>
                                <input type="text" name="billingPostalCode" id="billingPostalCode" minLength="6" placeholder="e.g 800020" value={this.state.isBillingAddressSame ? this.state.postalCode: this.state.billingPostalCode} onChange={this.changeHandler} />
                                <label htmlFor="billingCity">City</label>
                                <input type="text" name="billingCity" id="billingCity" minLength="3" placeholder="e.g Patna" value={this.state.isBillingAddressSame? this.state.city : this.state.billingCity} onChange={this.changeHandler} />
                                <label htmlFor="billingCountry">Country</label>
                                <input type="text" name="billingCountry" id="billingCountry" minLength="3" placeholder="e.g India" value={this.state.isBillingAddressSame? this.state.country : this.state.billingCountry} onChange={this.changeHandler} />

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Form; 