import { Link } from 'react-router-dom';
import XX99_Mark_II_Headphones__img from '../assets/product-xx99-mark-two-headphones/desktop/Bitmap.png'
import HEADPHONES__img from '../assets/product-xx99-mark-one-headphones/desktop/image-removebg-preview(41).png'
import SPEAKERS__img from '../assets/product-zx9-speaker/desktop/image-removebg-preview(38).png'
import EARPHONES__img from '../assets/product-yx1-earphones/desktop/image-removebg-preview(42).png'
import earphones__image from '../assets/product-yx1-earphones/desktop/Group12.png'
import BITMAP__IMG from '../assets/product-zx7-speaker/desktop/Bitmap.png'
import listening from '../assets/listen_to.png'
import { useEffect, useState } from "react"
// import Hero from "../components/Hero";
function Home() {
    const [headphones, setHeadphones] = useState(null);
    const [speakers, setSpeakers] = useState(null);
    const [zspeakers, zsetSpeakers] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/xx99-mark-two-headphones`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setHeadphones(data)
            })
            .catch(err => {
                console.log(err);
            })

        fetch(`http://localhost:3000/zx9-speaker`)
            .then(res => res.json())
            .then(data => {
                setSpeakers(data)
                // console.log(data);
            })
            .catch(err => {
                console.log(err);
            })

        fetch(`http://localhost:3000/zx7-speaker`)
            .then(res => res.json())
            .then(data => {
                zsetSpeakers(data)
                // console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className="bg-[#141414]">
                <div className="w-[1440px] mx-auto  mx-auto flex justify-between items-center px-[165px] mb-36">
                    <div className="hero flex justify-between items-center gap-24">
                        <div className="hero_block1">
                            <h4 className='text-[#FFFFFF]  leading-relaxed opacity-50 text-[14px]'>N E W   P R O D U C T</h4>
                            <h1 className='text-[56px] text-white mt-4 mb-8'>{headphones?.name}</h1>
                            <p className='text-[15px] text-white opacity-75 leading-[25px] mb-12'>{headphones?.description}</p>
                            <Link to='/headphones' className='text-white px-12 py-4 rounded-lg bg-[#D87D4A] hover:bg-[#FBAF85] transition duration-200   uppercase'>See Product</Link>
                        </div>
                        <div className="hero_block1">
                            <img className='w-[200rem] h-[600px]' width={708} height={700} src={XX99_Mark_II_Headphones__img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1440px] mx-auto">
                <div className='mx-auto flex flex-col  px-[165px] mb-24 mt-80'>
                    
                    <div className="main flex justify-between gap-12 mb-60">
                        <div className='w-[350px] h-[204px] bg-[#F1F1F1] flex flex-col justify-end pb-16 items-center rounded-lg'>
                            <img width={122} height={160} className='mb-12' src={HEADPHONES__img} alt="" />
                            <h3 className='text-[18px] text-[#000000] font-bold'>HEADPHONES</h3>
                            <Link className='text-[13px] mt-6 hover:text-[#D87D4A]' to='/headphones'>Shop <span className='text-[#D87D4A]'>{'>'}</span></Link>
                        </div>
                        <div className='w-[350px] h-[204px] bg-[#F1F1F1] flex flex-col justify-end pb-16 items-center rounded-lg'>
                            <img width={122} height={160} className='mb-12' src={SPEAKERS__img} alt="" />
                            <h3 className='text-[18px] text-[#000000] font-bold'>SPEAKERS</h3>
                            <Link className='text-[13px] mt-6 hover:text-[#D87D4A]' to='/speakers'>Shop <span className='text-[#D87D4A]'>{'>'}</span></Link>
                        </div>
                        <div className='w-[350px] h-[204px] bg-[#F1F1F1] flex flex-col justify-end pb-16 items-center rounded-lg'>
                            <img width={122} height={160} className='mb-12' src={EARPHONES__img} alt="" />
                            <h3 className='text-[18px] text-[#000000] font-bold'>EARPHONES</h3>
                            <Link className='text-[13px] mt-6 hover:text-[#D87D4A]' to='/earphones'>Shop <span className='text-[#D87D4A]'>{'>'}</span></Link>
                        </div>
                    </div>

                    <section className="sectioin flex justify-between bg-[#D87D4A] rounded-lg pt-36 px-40 gap-36">
                        <div className="section__block1">
                            <img width={410} height={493} className='h-[493px] w-[150rem]' src={SPEAKERS__img} alt="" />
                        </div>
                        <div className="section__block2">
                            <h2 className='text-white text-[56px] w-[261px]'>{speakers?.name}</h2>
                            <p className='text-[15px] text-white mt-12 mb-12'>{speakers?.description}</p>
                            <Link to='/speakers' className='text-white px-12 py-4 rounded-lg  bg-black hover:bg-[#4C4C4C] transition duration-200 uppercase'>See Product</Link>
                        </div>
                    </section>

                    <article className="article">
                        <div className="article__block1 relative top-[210px] left-[100px] ">
                            <h2 className='text-[56px] font-bold mb-12 '>{zspeakers?.name}</h2>
                            <Link to='/speakers' className='text-black hover:text-white font-bold px-12 py-4 rounded-lg  bg-transparent border-[3px] hover:bg-black border-black	 transition duration-200 uppercase'>See Product</Link>
                        </div>
                        <div className="article__block2">
                            <img className='h-[320px]' src={BITMAP__IMG} alt="" />
                        </div>
                    </article>

                    <div className="content mt-40 flex justify-between">
                        <div className="content__block1">
                            <img src={earphones__image} alt="" />
                        </div>
                        <div className="content__block2 bg-[#F1F1F1] w-[540px] h-[320px] py-36 px-36">
                            <h2 className='text-[28px] font-bold mb-12' >YX1 EARPHONES</h2>
                            <Link to='/earphones' className='text-black font-bold hover:text-white px-12 py-4 rounded-lg  bg-transparent border-[3px] hover:bg-black border-black	 transition duration-200 uppercase'>See Product</Link>
                        </div>
                    </div>

                    <div className="page mt-60 flex justify-between items-center">
                        <div className="page__block1">
                            <h2 className='uppercase text-[40px] mb-12 text-[15px]'>Bringing you the <br /> <span className='text-[#D87D4A]'>best</span> audio gear</h2>
                            <p>Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br /> experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.</p>
                        </div>
                        <div className="page__block2">
                            <img src={listening} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
