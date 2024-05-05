import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from "react";
import { data__del } from "../redux/dataBaseSlice";

function CheckOut() {
    const nameRef = useRef(null)
    const emailREf = useRef(null)
    const phoneREf = useRef(null)
    const addresREf = useRef(null)
    const zipREf = useRef(null)
    const cityREf = useRef(null)
    const countryREf = useRef(null)
    const moneyREf = useRef(null)
    const pinREf = useRef(null)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function validate() {
        if (!nameRef.current.value) {
            alert('Name is not empty')
            nameRef.current.focus();
            return false
        }
        if (nameRef.current.value.length < 3) {
            alert('Enter your name correctly')
            nameRef.current.focus();
            return false
        }
        if (Number(nameRef.current.value)) {
            alert('Please enter your name correctly, it cannot contain numbers')
            nameRef.current.focus();
            return false
        }

        if (!emailREf.current.value) {
            alert('Email is not empty')
            emailREf.current.focus();
            return false
        }
        if (emailREf.current.value.length < 5) {
            alert('Enter your Email correctly')
            emailREf.current.focus();
            return false
        }

        if (!phoneREf.current.value) {
            alert('Phone Number is not empty')
            phoneREf.current.focus();
            return false
        }
        if (phoneREf.current.value.length <= 11) {
            alert('Enter your phone number correctly')
            phoneREf.current.focus();
            return false
        }
        if (!Number(phoneREf.current.value)) {
            alert('Enter your phone number correctly')
            phoneREf.current.focus();
            return false
        }

        if (!addresREf.current.value) {
            alert('Addres is not empty')
            addresREf.current.focus();
            return false
        }
        if (addresREf.current.value.length < 7) {
            alert('Enter your Address correctly')
            addresREf.current.focus();
            return false
        }

        if (!zipREf.current.value) {
            alert('Zip code is not empty')
            zipREf.current.focus();
            return false
        }
        if (zipREf.current.value.length < 4) {
            alert('Enter your Zip Code correctly')
            zipREf.current.focus();
            return false
        }
        if (!Number(zipREf.current.value)) {
            alert('Enter your Zip Code correctly')
            zipREf.current.focus();
            return false
        }

        if (!cityREf.current.value) {
            alert('City is not empty')
            cityREf.current.focus();
            return false
        }
        if (cityREf.current.value.length < 3) {
            alert('Enter your City correctly')
            cityREf.current.focus();
            return false
        }
        if (Number(cityREf.current.value)) {
            alert('Enter your City correctly')
            cityREf.current.focus();
            return false
        }

        if (!countryREf.current.value) {
            alert('Country is not empty')
            countryREf.current.focus();
            return false
        }
        if (countryREf.current.value.label < 4) {
            alert('Enter your Country correctly')
            countryREf.current.focus();
            return false
        }
        if (Number(countryREf.current.value)) {
            alert('Enter your Country correctly')
            countryREf.current.focus();
            return false
        }

        if (!moneyREf.current.value) {
            alert('e-Money Number is not empty')
            moneyREf.current.focus();
            return false
        }
        if (moneyREf.current.value.length < 8) {
            alert('Enter your e-Money Number correctly')
            moneyREf.current.focus();
            return false
        }
        if (!Number(moneyREf.current.value)) {
            alert('Enter your e-Money Number correctly')
            moneyREf.current.focus();
            return false
        }

        if (!pinREf.current.value) {
            alert('e-Money Pin is not empty')
            pinREf.current.focus();
            return false
        }
        
        if (!Number(pinREf.current.value)) {
            alert('Enter your e-Money Pin correctly')
            pinREf.current.focus();
            return false
        }
        return true;
    }
    const handleRCH = () => {
        dispatch(data__del())
        navigate('/')
    }

    const handleclC = () => {
        let isValid = validate();
        if (isValid) {
            document.getElementById('my_modal_3').showModal()
        }
    }
    const dataBase = useSelector(state => state.dataBase.value)


    return (
        <>
            <div className="w-[1440px] mx-auto">
                <div className="mx-auto flex flex-col  px-[165px] mb-24 mt-40">
                    <Link className="text-[15px]" to='/headphones'>Go Back</Link>
                    <div className="flex justify-between ">
                        <div className="py-12 px-12 [w-730px]">
                            <h1 className="text-[32px] font-bold">CHECKOUT</h1>
                            <form className="mt-8">
                                <div>
                                    <h4 className="uppercase text-[#D87D4A] text-[13px] my-12">Billing Details</h4>
                                    <div className="flex gap-8">
                                        <div className="flex flex-col">
                                            <label className="text-[12px] cursor-pointer" htmlFor="name">Name</label>
                                            <input ref={nameRef} type="text" id="name" placeholder="Alexei Ward" className="input mt-4  cursor-pointer input-bordered input-lg  w-[340px]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-[12px] cursor-pointer" htmlFor="email">Email Address</label>
                                            <input ref={emailREf} type="email" id="email" placeholder="alexei@mail.com" className="input mt-4  cursor-pointer input-bordered input-lg  w-[340px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-12">
                                        <label className="text-[12px] cursor-pointer" htmlFor="phone">Phone Number</label>
                                        <input ref={phoneREf} type="number" id="phone" placeholder="+1 202-555-0136" className="input mt-4 w-[700px] cursor-pointer input-bordered input-lg w-[700px]" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="uppercase text-[#D87D4A] text-[13px] my-12">shipping info</h4>
                                    <div className="flex flex-col mt-12">
                                        <label className="text-[12px] cursor-pointer" htmlFor="addres">Address</label>
                                        <input ref={addresREf} type="text" id="addres" placeholder="1137 Williams Avenue" className="input mt-4 w-[309px] cursor-pointer input-bordered input-lg w-full" />
                                    </div>
                                    <div className="flex gap-8 mt-12">
                                        <div className="flex flex-col">
                                            <label className="text-[12px] cursor-pointer" htmlFor="code">ZIP Code</label>
                                            <input ref={zipREf} type="number" id="code" placeholder="10001" className="input mt-4  cursor-pointer input-bordered input-lg w-[340px]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-[12px] cursor-pointer" htmlFor="City">City</label>
                                            <input ref={cityREf} type="email" id="City" placeholder="New York" className="input mt-4  cursor-pointer input-bordered input-lg w-[340px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-12">
                                        <label className="text-[12px] cursor-pointer" htmlFor="Country">Country</label>
                                        <input ref={countryREf} type="email" id="Country" placeholder="United States" className="input mt-4 w-[309px] cursor-pointer  input-bordered input-lg w-full" />
                                    </div>

                                </div>
                                <div>
                                    <h4 className="uppercase text-[#D87D4A] text-[13px] my-12">payment details</h4>
                                    <div className="flex justify-between">
                                        <div>
                                            <label htmlFor="">Payment Method</label>
                                        </div>
                                        <div>
                                            <div className={`flex items-center w-[340px]  gap-4 border-[2px] rounded-lg py-4 px-12 hover:border-[#D87D4A] cursor-pointer `}>
                                                <input type="radio" id="e-Money" name="radio-6" className="radio radio-warning" checked />
                                                <label htmlFor="e-Money" className="cursor-pointer">e-Money</label>
                                            </div>
                                            <div className="flex items-center  w-[340px]  gap-4 border-[2px] rounded-lg py-4 px-12 mt-4  hover:border-[#D87D4A] cursor-pointer ">
                                                <input type="radio" name="radio-6" id="Cash" className="radio radio-warning" />
                                                <label htmlFor="Cash" className="cursor-pointer">Cash on Delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex flex-col mt-12">
                                            <label className="text-[12px] cursor-pointer" htmlFor="Number">e-Money Number</label>
                                            <input ref={moneyREf} type="number" id="Number" placeholder="238521993" className="input mt-4  cursor-pointer  input-bordered input-lg w-[340px]" />
                                        </div>
                                        <div className="flex flex-col mt-12">
                                            <label className="text-[12px] cursor-pointer" htmlFor="Money">e-Money PIN</label>
                                            <input ref={pinREf} type="number" id="Money" placeholder="6891" className="input mt-4  cursor-pointer  input-bordered input-lg w-[340px]" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="py-12 px-12 w-[350px]">
                            <h1 className="text-[32px] font-bold uppercase">summary</h1>
                            <div className='flex flex-col gap-8 my-8'>
                                {
                                    dataBase.length > 0 && dataBase.map((data, index) => {
                                        return (
                                            <div key={index} className='flex justify-between items-center'>
                                                <div className='w-28 h-28 bg-[#F1F1F1] flex justify-center items-center rounded-lg'>
                                                    <img className='w-20 h-20' src={data.image} alt="" />
                                                </div>
                                                <div className='flex flex-col items-center'>
                                                    <h2 className='font-bold text-[15px]'>{data.name}</h2>
                                                    <p className='text-[14px]'>$ {data.price}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex  justify-between mt-12">
                                <h3 className="text-[15px] opacity-50">TOTAL</h3>
                                <p className="font-bold text-[18px] items-center">$ 5,396</p>
                            </div>
                            <div className="flex  justify-between mt-4">
                                <h3 className="text-[15px] opacity-50">SHIPPING</h3>
                                <p className="font-bold text-[18px] items-center">$ 50</p>

                            </div>
                            <div className="flex  justify-between mt-4">
                                <h3 className="text-[15px] opacity-50">VAT (INCLUDED)</h3>
                                <p className="font-bold text-[18px] items-center">$ 1,079</p>
                            </div>
                            <div className="flex  justify-between mt-8 ">
                                <h3 className="text-[15px] opacity-50">GRAND TOTAL</h3>
                                <p className="font-bold text-[18px] items-center text-[#D87D4A]">$ 5,446</p>
                            </div>

                            <button onClick={handleclC} className="w-[300px] h-[48px] mt-12 bg-[#D87D4A] text-white rounded-lg text-[13px]">CONTINUE & PAY</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box w-11/12 max-w-5xl py-20 px-20">
                                    <h2 className="align-left text-[32px]">THANK YOU <br />FOR YOUR ORDER</h2>
                                    <p className="text-[15px] opacity-50">You will receive an email confirmation shortly.</p>
                                    <div className='flex flex-col gap-8 my-8 bg-[#F1F1F1] p-12'>
                                        {
                                            dataBase.length > 0 && dataBase.map((data, index) => {
                                                return (
                                                    <div key={index} className='flex justify-between items-center '>
                                                        <div className='flex justify-between items-center'>
                                                            <div className='w-28 h-28 bg-[#F1F1F1] flex justify-center items-center rounded-lg'>
                                                                <img className='w-20 h-20' src={data.image} alt="" />
                                                            </div>
                                                            <div className='flex flex-col items-center'>
                                                                <h2 className='font-bold text-[15px]'>{data.name}</h2>
                                                                <p className='text-[14px]'>$ {data.price}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="bg-black w-3/6 h-full">
                                           
                                        </div>
                                        <hr />
                                    </div>
                                    <button onClick={handleRCH} className="w-full h-[48px] mt-12 bg-[#D87D4A] text-white rounded-lg text-[13px]">BACK TO HOME</button>

                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut
