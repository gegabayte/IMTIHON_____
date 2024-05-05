import { Link, NavLink, useNavigate } from 'react-router-dom'
import { data__del } from '../redux/dataBaseSlice';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, counter__del } from "../redux/counterSlice";
import logo from '../assets/audiophile.svg'
import shope from '../assets/Shape.svg'

function Header() {
    const dataBase = useSelector(state => state.dataBase.value)
    const counter = useSelector(state => state.counter.value)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleCh() {
        navigate('/checkout')
    }
    
    function handleInc() {
        dispatch(increment(1))
    }

    function handleDec() {
        dispatch(decrement(1))
    }

    function handleclok() {
        dispatch(data__del())
        dispatch(counter__del())
    }

    function hendleModal(e) {
        e.preventDefault()
        document.getElementById('my_modal_2').showModal();
    }

    return (
        <header className="bg-[#141414] ">
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
                    <div className="market">
                        <Link onClick={hendleModal}><img className='cursor-pointer hover:opacity-75 transition duration-200' src={shope} alt="" /></Link>
                        <dialog id="my_modal_2" className="modal">

                            <div className="modal-box  w-11/12 max-w-2xl ">
                                <div className='flex justify-between mb-12'>
                                    <h2 className='text-[18px]'>Cart {dataBase.length}</h2>
                                    <h4 onClick={handleclok} className='text-[15px] hover:text-[#D87D4A] cursor-pointer hover:underline transition duration-200'>Remove all</h4>
                                </div>
                                <div className='flex flex-col gap-8'>
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
                                                    <div className="flex gap-8 justify-center  bg-[#F1F1F1] w-[96px] h-[32px] items-center">
                                                        <span onClick={handleDec} className="text-3xl hover:text-[#D87D4A] cursor-pointer transition duration-200 px-2">-</span>
                                                        <p className="text-3xl">{counter}</p>
                                                        <span onClick={handleInc} className="text-3xl hover:text-[#D87D4A] cursor-pointer transition duration-200 px-2">+</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='flex justify-between mt-8'>
                                    <h2 className='text-[18px]'>TOTAl</h2>
                                    <h4 className='text-[15px] font-bold'>$ </h4>
                                </div>
                                <button onClick={handleCh} className='text-[13px] w-full bg-[#D87D4A] text-white rounded-lg mt-8 h-[48px] uppercase'>checkout</button>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>

                        </dialog>
                    </div>
                </div>
                <div className='w-[1110px] mx-auto'>
                    <hr />
                </div>

            </div>
        </header>
    )
}

export default Header
