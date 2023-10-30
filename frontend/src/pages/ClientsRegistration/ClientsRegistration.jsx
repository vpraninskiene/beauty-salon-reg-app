import { DatePickerComponent } from "../../components/DatePicker/DatePicker"
import "../ClientsRegistration/ClientsRegistration.css"
import { Button } from "../../components/Button/Button"

export const ClientsRegistration = () => {
    return (
        <main>
			<section >
			<h2>Add new registration</h2>
				<form className="client-registration-form">
					<label htmlFor="client-fname">First Name</label>
					<input required type="text" name="client-fname" id="client-fname" />
					<label htmlFor="client-lname">Last Name</label>
					<input required type="text" name="client-fname" id="client-fname"/>
					<label htmlFor="client-email">Email</label>
					<input required type="email" name="client-email" id="client-email"/>
                    <label>Date/Time</label>
                    <DatePickerComponent/>
					<div>
						<Button theme="primary" title="Submit"/>
					</div>
				</form>
			</section>
			<section>
				<h2>Registrations</h2>
				<div id="registrations-list">
					<table>
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Date</th>
								<th>Time</th>
								<th>Update</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>
				</div>
			</section>
		</main>
    )
}