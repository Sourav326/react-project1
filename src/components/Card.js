
import star from "../assets/star.png"


const Card = (props) => {
    return(
        <div className="inline-block px-3 card-main-div">
            <div className="w-64 h-auto max-w-xs overflow-hidden rounded-lg duration-300 ease-in-out">
                <img className="mainimage" src={props.coverImg} alt="Card" />
                <div className="flex mt-2">
                    <img className="star-image" src={star} alt="Card" />
                    <p className="text-start ml-1">{props.rating} <span className="text-slate-400">{props.location}</span></p>
                </div>
                <p className="leading-6">{props.title}</p>
                <p><span className="font-bold">{props.price}</span> / person</p>
            </div>
        </div>
    )
}

export default Card