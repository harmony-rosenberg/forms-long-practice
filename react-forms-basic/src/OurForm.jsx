import { useState, useEffect } from "react";

function OurForm(){
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [phoneType, setPhoneType] = useState()
// const [staff, setStaff] = useState();
const [bio, setBio] = useState('');
// const [signUp, setSignUp] = useState();
const [validation, setValidation] = useState({})

useEffect(() => {
	const errors = {};
	if (!name.length) errors['name']='Please enter your Name';
	if (!email.includes('@')) errors['email']='Please provide a valid Email';
	if (phone.length < 9 || typeof phone !== Number) errors['phone'] = 'Please provide a valid phone number';
	if (!phoneType) errors['phoneType'] = "Please select a phone type";
	if (!bio || bio.length > 280) errors["bio"] = "Bio must be between 1 and 280 characters";

	setValidation(errors);
}, [name, email, phone, phoneType, bio])

const onSubmit = e => {
	e.preventDefault();
	if (Object.values(validation).length)
		return alert(`The following errors were found:

	${validation.name ? "* " + validation.name : ""}
	${validation.email ? "* " + validation.email : ""}
	${validation.phone ? "* " + validation.phone : ""}
	${validation.phoneType ? "* " + validation.phoneType : ""}
	${validation.bio ? "* " + validation.bio : ""}`);
}

return (
<div>
	<h2>Our Form</h2>
	<form onSubmit={onSubmit}>
		<div>
			<label htmlFor='name'>Name:</label>
			<input id='name'
			type='text'
			onChange={e => setName(e.target.value)}
			value={name}/>
		</div>
		<div>
			<label htmlFor='email'>Email:</label>
			<input id='email'
			type='text'
			onChange={e => setEmail(e.target.value)}
			value={email}/>
		</div>
		<div>
			<label htmlFor='phone'>Phone:</label>
			<input id='phone'
			type='text'
			onChange={e => setPhone(e.target.value)}
			value={phone} />
			<label htmlFor="phoneType">phone type </label>
			<select name="phoneType"
			onChange={e => setPhoneType(e.target.value)}
			value={phoneType}>
			<option>home</option>
			<option>work</option>
			<option>mobile</option>
			</select>
		</div>
		<div>
			<label htmlFor="Staff"> Staff</label>
			<div>
				<label htmlFor="staff">instructor</label>
			<input type="radio" id="staff" name="staff" />
			</div>
			<div>
				<label htmlFor="staff">student</label>
			<input type="radio" id="staff" name="staff" />
			</div>
			<div>
				<label htmlFor="bio">Bio</label>
				<textarea name="bio" onChange={e => setBio(e.target.value)} value={bio} />
			</div>
			<div>
				<label htmlFor="signUp">Sign Up for email notifications</label>
				<div>
				<input type="checkBox" />
				<label htmlFor="signUp" id="yes">Yes</label>
				</div>
				<div>
				<input type="checkBox" />
				<label htmlFor="signUp" id="no">No</label>
				</div>
			</div>
		</div>
		<button>Submit</button>
	</form>
</div>
)}

export default OurForm;
