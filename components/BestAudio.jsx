import listening from '../assets/listen_to.png'
function BestAudio() {
    return (
        <>
            <div className="page mb-60 flex justify-between items-center">
                <div className="page__block1">
                    <h2 className='uppercase text-[40px] mb-12 text-[15px]'>Bringing you the <br /> <span className='text-[#D87D4A]'>best</span> audio gear</h2>
                    <p>Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br /> experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.</p>
                </div>
                <div className="page__block2">
                    <img src={listening} alt="" />
                </div>
            </div>
        </>
    )
}

export default BestAudio
