import { useState } from "react";
const ContactUs = () => {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const nameChangeHandler = (e) => {
      setName(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const numberChangeHandler = (e) => {
        setPhoneNumber(e.target.value);
    }

    const  submitHandler =(e) => {
        e.preventDefault();
        const movieobj = {
            name:name,
            email:email,
            phoneNumber : phoneNumber,
        }

        fetch('https://react-http-6b09e-default-rtdb.firebaseio.com/movie.json'
        ,
    {
        method: 'POST',
        body:JSON.stringify(movieobj)
    });
    }

    return(
        <div>
            <label>Name</label>
            <input type = 'text' value={name} onChange={nameChangeHandler}/>
            <label>Email</label>
            <input type = 'text'value={email} onChange={emailChangeHandler}/>
            <label>Phone Number</label>
            <input type = 'Number'value={phoneNumber} onChange={numberChangeHandler}/>
            <button onClick={submitHandler}>submit Store</button>
        </div>
    )
} 
export default ContactUs;