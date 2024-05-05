import { Link } from "react-router-dom"
import HEADPHONES__img from '../assets/product-xx99-mark-one-headphones/desktop/image-removebg-preview(41).png'
import EARPHONES__img_D from '../assets/product-xx99-mark-two-headphones/desktop/image-removebg-preview(47).png'
import xx590 from '../assets/product-xx59-headphones/desktop/image-removebg-preview(48).png'

import { useEffect, useState } from "react"
import Database from "../components/Database"
import BestAudio from "../components/BestAudio"

function Headphones() {
    const [headphones, setHeadphones] = useState([])
    const [zheadphones, zsetHeadphones] = useState([])
    const [xx59, setXX59] = useState([])
    // const [loader, setLoader] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:3000/xx99-mark-two-headphones`)
        // setLoader(true)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setHeadphones(data)
            })
            .catch(err => {
                console.log(err);
            })
            
        fetch(`http://localhost:3000/xx99-mark-one-headphones`)
        // setLoader(true)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                zsetHeadphones(data)
            })
            .catch(err => {
                console.log(err);
            })
            
        fetch(`http://localhost:3000/xx59-headphones`)
        // setLoader(true)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setXX59(data)
            })
            .catch(err => {
                console.log(err);
            })
           
    }, [])
    return (
        <>
            <div className="bg-[#141414]">
                <div className="w-[1440px] mx-auto  mx-auto flex justify-between items-center px-[165px] mb-4">
                    <div className="hero flex justify-center items-center py-40">
                        <h1 className="text-[40px] text-white">HEADPHONES</h1>
                    </div>
                </div>
            </div>
            <div className="w-[1440px] mx-auto">
                <div className="mx-auto flex flex-col  px-[165px] mb-24 mt-80 ">
                    <div className="content mb-80 flex justify-between gap-60 items-center">
                        <div className="content__block1 w-[160rem] flex bg-[#F1F1F1] h-[560px] justify-center items-center">
                            <img src={EARPHONES__img_D} alt="" />
                        </div>
                        <div className="content__block2">
                            <h4 className='text-[#FFFFFF]  leading-relaxed opacity-50 text-[14px] text-[#D87D4A]'>N E W   P R O D U C T</h4>
                            <h2 className="text-[40px] text-black my-6">{headphones?.name}</h2>
                            <p className="text-[15px] mb-16 mt-8">{headphones?.description}</p>
                            <Link to='/headphones/headpones-1' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   uppercase'>See Product</Link>
                        </div>
                    </div>

                    <div className="hero mb-80 flex justify-between gap-60 items-center">
                        <div className="hero__block2">
                            <h2 className="text-[40px] text-black my-6">{zheadphones?.name}</h2>
                            <p className="text-[15px] mb-16 mt-8">{zheadphones?.description}</p>
                            <Link to='/headphones/headpones-2' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   uppercase'>See Product</Link>
                        </div>
                        <div className="hero__block1 w-[160rem] flex bg-[#F1F1F1] h-[560px] justify-center items-center">
                            <img src={HEADPHONES__img} alt="" />
                        </div>

                    </div>

                    <div className="article mb-80 flex justify-between gap-60 items-center">
                        <div className="article__block1 w-[160rem] flex bg-[#F1F1F1] h-[560px] justify-center items-center">
                            <img src={xx590} alt="" />
                        </div>
                        <div className="article__block2">
                            <h2 className="text-[40px] text-black my-6">{xx59?.name}</h2>
                            <p className="text-[15px] mb-16 mt-8">{xx59?.description}</p>
                            <Link to='/headphones/headpones-3' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   uppercase'>See Product</Link>
                        </div>
                    </div>

                    <Database></Database>
                    <BestAudio></BestAudio>
                </div>
            </div>
        </>
    )
}

export default Headphones
