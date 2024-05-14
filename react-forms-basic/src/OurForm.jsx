import { useState } from "react";

function OurForm(){
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [phoneType, setPhoneType] = useState()
// const [staff, setStaff] = useState();
const [bio, setBio] = useState('');
// const [signUp, setSignUp] = useState();
const [validation, setValidation] = useState({})
return (
<div>
	<h2>Our Form</h2>
	<form>
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
