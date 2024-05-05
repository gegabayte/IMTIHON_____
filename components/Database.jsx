import { Link } from "react-router-dom"
import HEADPHONES__img from '../assets/product-xx99-mark-one-headphones/desktop/image-removebg-preview(41).png'
import SPEAKERS__img from '../assets/product-zx9-speaker/desktop/image-removebg-preview(38).png'
import EARPHONES__img from '../assets/product-yx1-earphones/desktop/image-removebg-preview(42).png'

function Database() {
    return (
        <div>
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

        </div>
    )
}

export default Database
