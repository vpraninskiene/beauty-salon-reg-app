import { Button } from "../Button/Button"
import "../LoginCard/LoginCard.css"

export const LoginCard = () => {
    return (
        <div className="login-card-wrapper">
            <h3>Welcome back</h3>
            <p>Administrator Log in</p>
            <form id="login-form">
				<label for="email">Email</label>
				<input type="email" id="email" />
				<label for="password">Password</label>
				<input type="password" id="password" />
                <div id="login-btn">
                    <Button theme="primary" title="Log in"/>
				</div>
            </form>
        </div>
    )
}