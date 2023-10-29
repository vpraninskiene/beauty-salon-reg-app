import "../RegistrationPage/RegistrationPage.css"
import { Button } from "../../components/Button/Button"

export const RegistrationPage = () => {
    return (
        <div className="registration-page-wrapper">
            <div className="registration-card-internal">
                <h3>Registration</h3>
                <form id="registration-form">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" required />
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" required />
                    <label for="email">Email</label>
                    <input type="email" id="email" required />
                    <label for="password">Password</label>
                    <input type="password" id="password" required/>
                    <div id="login-btn">
                        <Button theme="primary" title="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}