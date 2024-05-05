import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Register() {
    const navigate = useNavigate();
    const userNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [bkl, setBkl] = useState(false);


    const validate = () => {
        if (!userNameRef.current.value) {
            alert('username is not empty');
            userNameRef.current.focus();
            return false
        }
        if (!emailRef.current.value) {
            alert('email is not empty');
            emailRef.current.focus();
            return false
        }
        if (!passwordRef.current.value) {
            alert('password is not empty');
            passwordRef.current.focus();
            return false
        }
        if (passwordRef.current.value.length < 8) {
            alert('password is the error');
            passwordRef.current.focus();
            return false
        }
        return true
    }
    function getData() {
        let users = [];
        if (localStorage.getItem("users")) {
            users = localStorage.getItem("users");
        }
        return users;
    }
    function handleClick(e) {
        e.preventDefault();
        let isValid = validate();

        if (isValid) {
            let user = {
                userName: userNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }
            let users = getData();
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            navigate('/login')
            userNameRef.current.value = null
            emailRef.current.value = null
            passwordRef.current.value = null

        }


    }
    function handleClickCl() {
        setBkl(!bkl)
    }
    
    return (
        <>
            <div className="w-[498.46px] mx-auto">
                <form className= "flex mt-[50px] flex-col py-[35px] gap-[2px] px-[30px] shadow-2xl rounded-lg">
                    <h1 className="text-[27.9px] text-center mb-12 " >Let’s go!</h1>
                    <label className="text-[15.94px] cursor-pointer" htmlFor="name">Full Name</label>
                    <input ref={userNameRef} id="name" className="bg-transparent	 mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border	border-[#D1D1D1]" type="text" placeholder="John Doe" />
                    <i className="text-[#D1D1D1] fa-regular fa-user text-[20px] relative top-[-38px] left-[9px]"></i>
                    <label className="text-[15.94px] cursor-pointer" htmlFor="email">Email</label>
                    <input ref={emailRef} id="email" className="bg-transparent	 mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border	border-[#D1D1D1]" type="email" placeholder="example@site.com" />
                    <i className="text-[#D1D1D1] fa-regular fa-envelope text-[20px] relative top-[-38px] left-[9px]"></i>
                    <label className="text-[15.94px] cursor-pointer" htmlFor="pass">Choose Password</label>
                    <input ref={passwordRef} id="pass" className="bg-transparent mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border text-[#D1D1D1]	border-[#D1D1D1]" type={bkl ? 'text' : 'password'}  placeholder="Minimum 8 characters"/>
                    <i className="texthttps://pub-7be1d45c4a744f86846c80e90df909eb.r2.dev/homework/attachments/d0c73830-50b3-4b71-b78e-88c46871cb67.rar-[#D1D1D1] fa-solid fa-lock text-[20px] relative top-[-38px] left-[9px]"></i>
                    <span onClick={handleClickCl} className=" relative top-[-60px] left-[400px] cursor-pointer text-[18px] text-[#D1D1D1]">{bkl ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</span>
                    <button onClick={handleClick} className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[59.78px] rounded-lg text-[15.94px]">Sign Up</button>
                    <h4 className="text-[15.94px] text-center mt-6">or login with SSO</h4>
                    <Link to='/login' className='mt-12 hover:underline'>Login</Link>
                </form>
            </div>
        </>
    )
}

export default Register
