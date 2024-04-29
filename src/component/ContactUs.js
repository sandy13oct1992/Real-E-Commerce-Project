import { useState } from "react";
const ContactUs = () => {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [isLoading,setIsLoading] =useState(false);

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
        setIsLoading(true);
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
    }).then((res) => {
        setIsLoading(false)
    }
    );
    }

    return(
        <div>
            <label>Name</label>
            <input type = 'text' value={name} onChange={nameChangeHandler}/>
            <label>Email</label>
            <input type = 'text'value={email} onChange={emailChangeHandler}/>
            <label>Phone Number</label>
            <input type = 'Number'value={phoneNumber} onChange={numberChangeHandler}/>
            {!isLoading && <button onClick={submitHandler}>submit Store</button>}
            {isLoading && <p>Loading.....</p>}
        </div>
    )
} 
export default ContactUs;