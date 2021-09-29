import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHandsWash, faHeartbeat, faSearch, faShoppingCart, faUserNurse, faWheelchair } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(){
    return(<div className={styles.navbar}>
        <div className={styles.navbar__user}>
            <div>Logo</div>
            <div>
                <input type="text" name="" id="" />
                <FontAwesomeIcon icon={faSearch}/>
            </div>
            <div><span>MIS PEDIDOS</span></div>
            <div><span>HOLA ALIADO</span><span>INGRESA</span></div>
            <div>
            <FontAwesomeIcon icon={faShoppingCart}/>
                <span>CARRITO</span>
            </div>
        </div>
        <div>
            <ul className={styles.list}>
                <li><FontAwesomeIcon icon={faBars}/></li>
                <li><FontAwesomeIcon icon={faWheelchair}/> MOVILIDAD</li>
                <li><FontAwesomeIcon icon={faHeartbeat}/> CUIDADO EN EL HOGAR</li>
                <li><FontAwesomeIcon icon={faUserNurse}/> PROFESIONALES DE LA SALUD </li>
                <li><FontAwesomeIcon icon={faHandsWash}/> TAPABOCAS Y DESINFECCIÓN</li>
            </ul>
        </div>
    </div>)
}