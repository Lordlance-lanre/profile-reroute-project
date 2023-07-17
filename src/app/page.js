'use client'
import './globals.css'
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

    let [validationMessageForEmail, setValidationMessageForEmail] = useState('');
  let [validationMessageForPassword, setValidationMessageForPassword] = useState('');


  const [openToggle, setOpenToggle] = useState(true);
  const [closeToggle, setCloseToggle] = useState(false);


  const router = useRouter();

   const handleChange = (event) =>{
  const {name, value} = event.target;
  switch(name){
    case 'email':

      //Email Form validation
      const inputEmail = document.getElementById('emailAddress')?.value;
      let emailArr = inputEmail.split("");
      if(inputEmail === ''){
        validationMessageForEmail =  "This is a required field";
        setValidationMessageForEmail(validationMessageForEmail);
      }else{
        validationMessageForEmail = " ";
        setValidationMessageForEmail(validationMessageForEmail);
      }
      
      emailArr.forEach((elem) => {
        var theIndexOf = emailArr.indexOf("@");
        if(emailArr.length > theIndexOf && theIndexOf !== -1){
          validationMessageForEmail =  " ";
          setValidationMessageForEmail(validationMessageForEmail);
        }else{
          validationMessageForEmail =  "Please Input a valid email address";
          setValidationMessageForEmail(validationMessageForEmail);
        }
      })
      break;

    case 'password':
      
    //Password Form validation
      const inputPassword = document.getElementById('password')?.value;
      if(inputPassword === ''){
        validationMessageForPassword =  "This is a required field";
        setValidationMessageForPassword(validationMessageForPassword);
      }else{
        validationMessageForPassword = " ";
        setValidationMessageForPassword(validationMessageForPassword);
      }
      break;

    default:
      break;
  }
  }

  const moveToProfile = (e) =>{
    e.preventDefault();

    const inputEntries = {
         email: email,
         password: password
      }

      if(email.split("").includes("@") && password.length > 5){
        toast("Login successful",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: 'success'
        })
         localStorage.setItem('Entries', email);
         localStorage.setItem('Values', email);
        setTimeout(() => router.push("/profile"), 500);
      } 
  }

 


  return (
    <div className="bg-emerald-900 md:w-full h-screen w-screen ">
      <h3 className="text text-emerald-300 text-center pt-20 pb-10 text-4xl md:text-6xl">Login Interview project</h3>
      
      <div className="flex justify-center mt-12">
        <img src="/images/email.svg" className="w-10 mr-7" alt=""/>
        <input  onChange={(elem) => setEmail(elem.target.value)}  onChangeCapture={handleChange} value={email} type="text" name="email"  id="emailAddress" placeholder="Email" className="w-[290px] md:w-[370px] outline-emerald-200 rounded-lg py-3 px-3 text-xl"/>
      </div>
       <span className="flex justify-center ml-[39px] text-red-300 mt-2">{validationMessageForEmail}</span>
      <div className="flex justify-center mt-16">
        <img src="/images/password.svg" className="w-10 mr-7 mt-4" alt=""/>
        {
        openToggle && 
            <div>
              <input type="password" onChange={(elem) => setPassword(elem.target.value)} onChangeCapture={handleChange} value={password} id="password" name="password" placeholder="Password" placeholder="Password" className="flex mx-auto mt-5 px-6 border rounded border-slate-200 py-4 outline-indigo-300 text-sm w-[290px] md:w-[370px]"/>

              <img src="./images/Vector (5).svg" alt="" className="absolute mx-[246px] md:mx-[319px] -mt-9" onClick={() => {setOpenToggle(null); setCloseToggle(true);}}/>
            </div>
        }

        {
         closeToggle && 
            <div>

              <input type="text" onChange={(elem) => setPassword(elem.target.value)} onChangeCapture={handleChange} value={password} id="password" name="password" placeholder="Password" className="flex mx-auto mt-5 px-6 border rounded border-slate-200 py-4 outline-indigo-300 text-sm w-[290px] md:w-[370px]"/>
              <img src="./images/Vector (16).svg" alt="" className="absolute mx-[246px] md:mx-[319px] -mt-9" onClick={() => {setCloseToggle(null); setOpenToggle(true)}}/>
            </div>
        }
      </div>
       <span className="flex justify-center mr-[36px] text-red-300 mt-2">{validationMessageForPassword}</span>


     {
     	email !== "" ? <button onClick={moveToProfile} className="flex mx-auto mt-20 hover:bg-emerald-400 bg-emerald-300 text-2xl hover:text-emerald-100 transition ease-in-out duration-500 text-emerald-900 py-1 rounded-lg font-bold px-12">Submit</button> :  <button onClick={moveToProfile} disabled className="flex mx-auto mt-20 bg-emerald-300 hover:bg-emerald-400 transition ease-in-out duration-500 hover:text-emerald-100 text-2xl text-emerald-900 py-1 rounded-lg font-bold px-12">Submit</button>
     }
     <ToastContainer />
    </div>
  )
}

