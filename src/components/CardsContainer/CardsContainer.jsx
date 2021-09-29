import Card from "../Card/Card";
import {lines} from '../../data/products'
import styles from './cardsContainer.module.css'

export default function CardsContainer(){
    return(<div className={styles.cardsContainer}>
        {lines.map(line=><Card id={line.id} name={line.name} image={line.image}/>)}
    </div>)
}