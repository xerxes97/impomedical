import Card from "../Card/Card";
import {lines} from '../../data/products'

export default function CardsContainer(){
    return(<div>
        {lines.map(line=><Card id={line.id} name={line.name} image={line.image}/>)}
    </div>)
}