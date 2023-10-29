import { LoginCard } from "../LoginCard/LoginCard"
import "../Cards/Cards.css"
import { RegistrationCard } from "../RegistrationCard/RegistrationCard"

export const Cards = () => {
    return (
        <div className="welcome-block-wrapper">
            <LoginCard/>
            <RegistrationCard/>
        </div>
    )
}