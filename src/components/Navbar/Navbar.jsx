import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHandsWash, faHeartbeat, faSearch, faShoppingCart, faUserNurse, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Navbar(){

    const[search, setSearch] = useState('')

    function handleChange(e){
        setSearch(e.target.value)
    }

    return(<div className={styles.navbar}>
        <div className={styles.navbar__user}>
            <div className={styles.item}>
                <span>Logo</span><br />
                <span style={{fontSize:'10px'}}>IMPORMEDICAL</span>
            </div>
            <div className={styles.searchBar}>
                <input onChange={handleChange} className={styles.navbar__search} placeholder='¿QUE ESTÁS BUSCANDO? ESCRÍBELO AQUÍ...' type="text" value={search} />
                <FontAwesomeIcon className={styles.icon} icon={faSearch}/>
            </div>
            <div className={styles.item}><span style={{color:'#0071ea', fontWeight:'bold'}}>MIS PEDIDOS</span></div>
            <div className={styles.item}><span style={{fontSize:'15px'}}>HOLA ALIADO</span><br /><span style={{color:'#0071ea', fontSize:'23px', cursor:'pointer'}}>INGRESA</span></div>
            <div className={styles.item}>
            <FontAwesomeIcon style={{color:'#0071ea', fontSize:'23px'}} icon={faShoppingCart}/>
                <span> CARRITO</span>
            </div>
        </div>
        <div>
            <ul className={styles.list}>
                <li style={{width:'10%', color:'#0071ea', cursor:'pointer'}}><FontAwesomeIcon icon={faBars}/></li>
                <li className={styles.list__item}><FontAwesomeIcon style={{color:'#0071ea'}} icon={faWheelchair}/> MOVILIDAD</li>
                <li className={styles.list__item}><FontAwesomeIcon style={{color:'#0071ea'}} icon={faHeartbeat}/> CUIDADO EN EL HOGAR</li>
                <li className={styles.list__item}><FontAwesomeIcon style={{color:'#0071ea'}} icon={faUserNurse}/> PROFESIONALES DE LA SALUD </li>
                <li className={styles.list__item}><FontAwesomeIcon style={{color:'#0071ea'}} icon={faHandsWash}/> TAPABOCAS Y DESINFECCIÓN</li>
            </ul>
        </div>
    </div>)
}