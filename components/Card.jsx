function Card(props) {
    return (
        <>
            <div className="flex justify-between mb-96">
                <div className="flex flex-col gap-12">
                    <img className="rounded-2xl" src={props.image1} alt="" />
                    <img className="rounded-2xl" src={props.image2} alt="" />
                </div>
                <div>
                    <img className="rounded-2xl" src={props.image3} alt="" />
                </div>
            </div>
        </>
    )
}

export default Card
