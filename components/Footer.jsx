import logo from '../assets/audiophile.svg'

import { Link, NavLink } from "react-router-dom"
function Footer() {
    return (
        <>
            <footer className="bg-[#0E0E0E] ">
                <div className="w-[1440px] mx-auto  h-36 ">
                    <div className='w-[1110px] mx-auto flex justify-between items-center py-12'>
                        <div className="logo">
                            <Link to='/'><img src={logo} alt="" /></Link>
                        </div>
                        <div className="navigation">
                            <ul className='flex gap-12'>
                                <li className='leading-6 text-white hover:text-[#D87D4A] transition duration-200'>
                                    <NavLink className='text-[13px]' to='/'>HOME</NavLink>
                                </li>
                                <li className='leading-6 text-white hover:text-[#D87D4A] transition duration-200'>
                                    <NavLink className='text-[13px]' to='/headphones'>HEADPHONES</NavLink>
                                </li>
                                <li className='leading-6 text-white hover:text-[#D87D4A] transition duration-200'>
                                    <NavLink className='text-[13px]' to='/speakers'>SPEAKERS</NavLink>
                                </li>
                                <li className='leading-6 text-white hover:text-[#D87D4A] transition duration-200'>
                                    <NavLink className='text-[13px]' to='/earphones'>EARPHONES</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='bg-[#0E0E0E] pb-24'>
                <div className='w-[1110px] mx-auto'>
                    <div className='flex justify-between items-end'>
                        <div>
                            <p className='text-white text-[15px] opacity-50'>Audiophile is an all in one stop to fulfill your audio needs. We are a small team <br /> of music lovers and sound specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility - we are open 7 <br /> days a week.</p>

                        </div>
                        <div className='flex gap-8'>
                            <Link className='text-white text-4xl hover:text-[#D87D4A]'><i className="fa-brands fa-square-facebook"></i></Link>
                            <Link className='text-white text-4xl hover:text-[#D87D4A]'><i className="fa-brands fa-twitter"></i></Link>
                            <Link className='text-white text-4xl hover:text-[#D87D4A]'><i className="fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
                <div className='w-[1110px] mx-auto'>
                    <h4 className='text-white opacity-50 text-[15px] mt-24'>Copyright 2021. All Rights Reserved</h4>
                </div>
            </div>
        </>
    )
}

export default Footer
