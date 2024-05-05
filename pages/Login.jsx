import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('users'))
  const [bkl, setBkl] = useState(false);


  function handleClick(e) {
    e.preventDefault()
    let users = user.find((el) => {
      return el.password == passwordRef.current.value && el.userName == userNameRef.current.value
    })
    if (users) {
      navigate('/')
    } else {
      alert('Parol yoki Email NoTogri')
    }
    userNameRef.current.value = null
    passwordRef.current.value = null


  }
  function handleClickCl() {
    setBkl(!bkl)
}



  return (
    <>
      <div className="w-[498.46px] mx-auto">
        <form className="flex mt-[50px] flex-col py-[35px] gap-[2px] px-[30px] shadow-2xl rounded-lg">
          <h1 className="text-[27.9px] text-center mb-12">Welcome back!</h1>
          <label className="text-[15.94px] cursor-pointer" htmlFor="text">UserName</label>
          <input ref={userNameRef} id="text" className=" mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border	border-[#D1D1D1]" type="text" placeholder="Enter your userName" />
          <i className="text-[#D1D1D1] fa-regular fa-user text-[20px] relative top-[-38px] left-[9px]"></i>
          <label className="text-[15.94px] cursor-pointer" htmlFor="pass">Password</label>
          <input ref={passwordRef} id="pass" className=" mt-[10px] w-[418.43] h-[49.81px] px-[38px] text-[15px] outline-none rounded-lg border	border-[#D1D1D1]" type={bkl ? 'text' : 'password'} placeholder="Minimum 8 characters" />
          <i className="text-[#D1D1D1] fa-solid fa-lock text-[20px] relative top-[-38px] left-[9px]"></i>
          <span onClick={handleClickCl} className=" relative top-[-60px] left-[400px] cursor-pointer text-[18px] text-[#D1D1D1]">{bkl ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}</span>
          <button onClick={handleClick} className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[59.78px] rounded-lg text-[15.94px]">Sign Up</button>
          <h4 className="text-[15.94px] text-center mt-6">or login with SSO</h4>
          <Link to='/register' className='mt-12 hover:underline'>Register</Link>
        </form>
      </div>
    </>
  )
}

export default Login

