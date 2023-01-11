import React from "react"
import firebase  from "./firebase"

class App extends React.Component{
  handleChange = (e) => {
    const{name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca Varified")
      },
      defaultCountry : "IN"
    });
  }
  onSignInSubmit = (e) => {
      e.preventDefault()
      this.configureCaptcha()
      const phoneNumber = "+91" +  this.state.mobile
      console.log(phoneNumber)

      const appVerifier = window.recaptchaVerifier;
      //const auth = getAuth();
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("Otp has been sent")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("SMS not sent")
    });
  }
  render(){
    return(
            <div>
                <h2>Login Form</h2>
                <form onSubmit={this.onSignInSubmit}>
                    <div id="sign-in-button"></div>
                    <input type="name" name="name" placeholder="Enter Name" required onChange={this.handleChange}/>
                    <div id="sign-in-button"></div>
                    <input type="email" name="email" placeholder="Enter Email" required onChange={this.handleChange}/>
                    <div id="sign-in-button"></div>
                    <input type="number" name="mobile" placeholder="Mobile Number" required onChange={this.handleChange}/><br/>
                    <button type="submit">Submit</button>
                </form>

                <h2>Enter OTP</h2>
                <form onSubmit={this.onSubmitOTP}>
                    <input type="number" name="opt" placeholder="OTP Number" required onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            

    )
  }
}
export default App