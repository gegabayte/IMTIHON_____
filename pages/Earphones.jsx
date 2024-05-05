import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { PuffLoader } from "react-spinners"
import EARPHONES__img from '../assets/product-yx1-earphones/desktop/image-removebg-preview(42).png'
import Database from "../components/Database"
import BestAudio from "../components/BestAudio"

function Earphones() {
    const [yx1, setYx1] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        fetch(`http://localhost:3000/yx1-earphones`)
            .then(res => res.json())
            .then(data => {
                setYx1(data)
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoader(false)
            })
    }, [])
    return (
        <>
            <div className="bg-[#141414]">
                <div className="w-[1440px] mx-auto  mx-auto flex justify-between items-center px-[165px] mb-36">
                    <div className="hero flex justify-center items-center py-40">
                        <h1 className="text-[40px] text-white">EARPHONES</h1>
                    </div>
                </div>
            </div>
            <div className="w-[1440px] mx-auto">
                <div className="mx-auto flex flex-col  px-[165px] mb-24 mt-80">
                    {
                        loader && <PuffLoader color="#36d7b7" />
                    }

                    {
                        !loader && <div className="content mb-80 flex justify-between gap-60 items-center">
                            <div className="content__block1 w-[160rem] flex bg-[#F1F1F1] h-[560px] justify-center items-center">
                                <img className="w-[300px]" src={EARPHONES__img} alt="" />
                            </div>
                            <div className="content__block2">
                                <h4 className='text-[#FFFFFF]  leading-relaxed opacity-50 text-[14px] text-[#D87D4A]'>N E W   P R O D U C T</h4>
                                <h2 className="text-[40px] text-black my-6">{yx1?.name}</h2>
                                <p className="text-[15px] mb-16 mt-8">{yx1?.description}</p>
                                <Link to='/earphones/earpones-1' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   uppercase'>See Product</Link>
                            </div>
                        </div>
                    }

                    <Database></Database>
                    <BestAudio></BestAudio>
                </div>
            </div>
        </>
    )
}

export default Earphones
