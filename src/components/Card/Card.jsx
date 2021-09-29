import img from '../../data/images/tapabocas.jpg'

export default function Card({id, name, image}){
    return(<div key={id}>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <span>{name}</span>
        </div>
    </div>)
}