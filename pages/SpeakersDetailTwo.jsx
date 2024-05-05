
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';


import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";


//images 
import SPEAKERS__img from '../assets/product-zx9-speaker/desktop/image-removebg-preview(38).png'
// import EARPHONES__img_D from '../assets/product-xx99-mark-two-headphones/desktop/image-removebg-preview(47).png'
import HEADPHONES__img from '../assets/product-xx99-mark-one-headphones/desktop/image-removebg-preview(41).png'
import zx70 from '../assets/product-zx7-speaker/desktop/image-removebg-preview(49).png'
import { data_add } from "../redux/dataBaseSlice";



import bitmap_listen from '../assets/Bitmap_9.png'
import bitmap_phone from '../assets/Bitmap_10.png'
import bitmap_4 from '../assets/Bitmap_7.png'
import xx590 from '../assets/product-xx59-headphones/desktop/image-removebg-preview(48).png'
import Features from "../components/Features"
import Database from "../components/Database";
import BestAudio from "../components/BestAudio";
import Card from "../components/Card"


function SpeakersDetailTwo() {
    const [xx99, setXx99] = useState([])
    function notify () {
        
        const dataBase = {
            name: xx99.name,
            price: xx99.price,
            image: zx70
        }
        dispatch(data_add(dataBase))

        toast.success('Successfully created!')

        
    }

    useEffect(() => {
        fetch(`http://localhost:3000/zx7-speaker`)
            // setLoader(true)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setXx99(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.value)
    function handleInc() {
        dispatch(increment(1))
    }
    function handleDec() {
        dispatch(decrement(1))
    }
    return (
        <>
            <div className="w-[1440px] mx-auto">
                <div className="mx-auto flex flex-col  px-[165px] mb-24 mt-40">
                    <Link className="text-[15px]" to='/speakers'>Go Back</Link>

                    <div className="content mb-80 mt-20 flex justify-between gap-60 items-center">
                        <div className="content__block1 w-[160rem] flex bg-[#F1F1F1] h-[560px] justify-center items-center">
                            <img src={zx70} alt="" />
                        </div>
                        <div className="content__block2">
                            <h4 className='text-[#FFFFFF]  leading-relaxed opacity-50 text-[14px] text-[#D87D4A]'>N E W   P R O D U C T</h4>
                            <h2 className="text-[40px] text-black my-6">{xx99?.name}</h2>
                            <p className="text-[15px] mb-16 mt-8">{xx99?.description}</p>
                            <p className="text-[18px] font-bold">$ {xx99?.price}</p>
                            <div className="flex gap-4">
                                <div className="flex gap-16 justify-center mt-12 bg-[#F1F1F1] w-[150px] h-[48px] items-center">
                                    <span onClick={handleDec} className="text-3xl hover:text-[#D87D4A] cursor-pointer transition duration-200 px-2">-</span>
                                    <p className="text-3xl">{counter}</p>
                                    <span onClick={handleInc} className="text-3xl hover:text-[#D87D4A] cursor-pointer transition duration-200 px-2">+</span>
                                </div>

                                <button onClick={notify} className="bg-[#D87D4A] h-[48px] py-8 rounded-lg text-[13px] mt-[26.5px] flex justify-center items-center px-20 text-white hover:bg-[#FBAF85] transition duration-200">ADD TO CART</button>
                                <Toaster />

                            </div>

                        </div>
                    </div>


                    <Features></Features>

                    <Card image1={bitmap_listen} image2={bitmap_phone} image3={bitmap_4}></Card>

                    <div className="mb-96">
                        <h2 className="uppercase  text-[32px] text-center">you may also like</h2>
                        <div className="flex justify-between">
                            <div className="w-[350px] mt-24">
                                <div className="bg-[#F1F1F1] w-[350px] h-[318px] flex justify-center items-center">
                                    <img className="w-[148.38px] h-[193px]" src={SPEAKERS__img} alt="" />
                                </div>
                                <h4 className="text-[24px] flex justify-center my-12">ZX9 SPEAKER</h4>
                                <h4 className="flex justify-center items-center"><Link to='/speakers/speaker-1' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   w-[160px] text-center text-[12px]  uppercase'>See Product</Link></h4>


                            </div>
                            <div className="w-[350px] mt-24">
                                <div className="bg-[#F1F1F1] w-[350px] h-[318px] flex justify-center items-center">
                                    <img className="w-[148.38px] h-[193px]" src={HEADPHONES__img} alt="" />
                                </div>
                                <h4 className="text-[24px] flex justify-center my-12">XX99 MARK I</h4>
                                <h4 className="flex justify-center items-center"><Link to='/headphones/headpones-2' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   w-[160px] text-center text-[12px]  uppercase'>See Product</Link></h4>


                            </div>
                            <div className="w-[350px] mt-24">
                                <div className="bg-[#F1F1F1] w-[350px] h-[318px] flex justify-center items-center">
                                    <img className="w-[148.38px] h-[193px]" src={xx590} alt="" />
                                </div>
                                <h4 className="text-[24px] flex justify-center my-12">XX59</h4>
                                <h4 className="flex justify-center items-center"><Link to='/headphones/headpones-3' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   w-[160px] text-center text-[12px]  uppercase'>See Product</Link></h4>


                            </div>
                        </div>
                    </div>

                    <Database></Database>

                    <BestAudio></BestAudio>
                </div>
            </div>
        </>
    )
}

export default SpeakersDetailTwo

