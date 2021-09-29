import styles from './card.module.css'
import img from '../../data/images/tapabocas.jpg'

export default function Card({id, name, image}){
    return(<div className={styles.card} key={id}>
        <div>
            <img className={styles.img} src={img} alt="" />
        </div>
        <div>
            <span>{name}</span>
        </div>
    </div>)
}