import './styles.css'
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function profile(){
	const router = useRouter();
	const [isLoggedIn, setIsLoggedIn] = useState("");

	

	useEffect(() =>{
		const getEntries = localStorage.getItem('Entries');
		setIsLoggedIn(getEntries);
	},[])

	const moveToLogin = () =>{
		toast("Logout successful",{
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
		localStorage.removeItem("Entries");
	 	setTimeout(() => router.push("/"), 500);
	}

	if(isLoggedIn !== null){
		return(
		<div className=" bg-emerald-900 w-full h-screen py-4">
			<h3 className="text md:text-[60px] pt-2 md:pt-10 text-3xl text-emerald-200 font-bold text-center">Welcome {isLoggedIn}</h3>
			<div className="bg-emerald-100 w-9/12 mt-20 mx-auto rounded-lg h-[500px]">
				<h3 className="text md:text-[40px] pt-2 md:pt-10 text-xl text-emerald-700 font-bold text-center">Profile</h3>

				<div className="pt-5 px-5 ">
					<img src="/images/Rectangle.png" className="mx-auto mt-7 md:w-16"/>

					<div className=" text-center text-[11px] md:text-xl pt-10">					
						<p className="pb-3 text-emerald-700 font-semibold tracking-wide">Email Address: {isLoggedIn}</p>
						<p className="pb-3 text-emerald-700 font-semibold tracking-wide">DOB: July-13th-2023</p>
						<p className="pb-3 text-emerald-700 font-semibold tracking-wide">Phone Number: 123-456-789</p>
						<p className="pb-3 text-emerald-700 font-semibold tracking-wide">Details:  Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
					</div>
				</div>
				<button onClick={moveToLogin} className="flex hover:bg-emerald-400 hover:text-emerald-100 transition ease-in-out duration-500 mx-auto mt-10 md:mt-12 bg-emerald-300 text-2xl text-emerald-900 py-1 rounded-lg font-bold px-12">Logout</button>
			</div>
			<ToastContainer />
		</div>
		)

	}else{
		router.push("/");
		
		return(
			<div>

			</div>
			)
	}

}
export default profile;