import { Link } from "react-router-dom"
import SPEAKERS__img from '../assets/product-zx9-speaker/desktop/image-removebg-preview(38).png'
import zx70 from '../assets/product-zx7-speaker/desktop/image-removebg-preview(49).png'
import { useEffect, useState } from "react"
import BestAudio from "../components/BestAudio"
import Database from "../components/Database"
function Speakers() {
    const [zx9, setZx9] = useState([])
    const [zx7, setZx7] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/zx9-speaker`)
            .then(res => res.json())
            .then(data => {
                setZx9(data)
            })
            .catch(err => {
                console.log(err);
            })

        fetch(`http://localhost:3000/zx7-speaker`)
            .then(res => res.json())
            .then(data => {
                setZx7(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className="bg-[#141414]">
                <div className="w-[1440px] mx-auto  mx-auto flex justify-between items-center px-[165px] mb-36">
                    <div className="hero flex justify-center items-center py-40">
                        <h1 className="text-[40px] text-white">SPEAKERS</h1>
                    </div>
                </div>
            </div>
            <div className="w-[1440px] mx-auto">
                <div className="mx-auto flex flex-col  px-[165px] mb-24 mt-80">

                    <div className="content mb-80 flex justify-between gap-60 items-center">
                        <div className="content__block1 w-[160rem] flex bg-[#F1F1F1] h-[560px] justify-center items-center">
                            <img src={SPEAKERS__img} alt="" />
                        </div>
                        <div className="content__block2">
                            <h4 className='text-[#FFFFFF]  leading-relaxed opacity-50 text-[14px] text-[#D87D4A]'>N E W   P R O D U C T</h4>
                            <h2 className="text-[40px] text-black my-6">{zx9?.name}</h2>
                            <p className="text-[15px] mb-16 mt-8">{zx9?.description}</p>
                            <Link to='/speakers/speaker-1' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   uppercase'>See Product</Link>
                        </div>
                    </div>


                    <div className="content mb-80 flex justify-between gap-60 items-center">
                        <div className="content__block2">
                            <h2 className="text-[40px] text-black my-6">{zx7?.name}</h2>
                            <p className="text-[15px] mb-16 mt-8">{zx7?.description}</p>
                            <Link to='/speakers/speaker-2' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   uppercase'>See Product</Link>
                        </div>
                        <div className="content__block1 w-[160rem] flex bg-[#F1F1F1] h-[560px] justify-center items-center">
                            <img src={zx70} alt="" />
                        </div>  
                    </div>
                    <Database></Database>
                    <BestAudio></BestAudio>
                </div>
            </div>
        </>
    )
}

export default Speakers
