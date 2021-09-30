import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import img from '../../data/images/Epartner2.png'
import img2 from '../../data/images/Vtex.png'
import { useState } from 'react'

export default function Footer(){

    const[email, setEmail] = useState('')

    function handleChange(e){
        setEmail(e.target.value)
    }

    return(<div className={styles.footer}>
        <div className={styles.footer__container}>            
            <div className={styles.footer__section}>
                <span>SOBRE NOSOTROS</span>
                <ul>
                    <li>¿Quienes somos?</li>
                    <li>Nuestra historia</li>
                    <li>Nuestra información</li>
                </ul>
            </div>
            <div className={styles.footer__section}>
                <span>CATEGORIAS DESTACADAS</span>
                <ul>
                    <li>Profesionales de la salud</li>
                    <li>Protección e higiene</li>
                    <li>Control y prevensión</li>
                    <li>Movilidad</li>
                    <li>Independencia y cuidado en el hogar</li>
                    <li>Terapia respiratoria</li>
                    <li>Control</li>
                </ul>
            </div>
            <div className={styles.footer__section}>
                <span>SERVICIO AL CLIENTE</span>
                <ul>
                    <li>Politica de entregas</li>
                    <li>Politica de devoluciones</li>
                    <li>Politica de garantías</li>
                    <li>Politica de cancelación</li>
                    <li>Whatsapp 123 123 3434</li>
                    <li>PBX 01 8000 123 345</li>
                    <li>e-Mail: info@impomedical.com</li>
                </ul>
            </div>
            <div className={styles.footer__section}>
                <span style={{fontSize:'14px'}}>SUSCRIBETE A NUESTRO NEWLETTER</span>
                <input style={{marginTop:'25px', outline:'none'}} type="text" name="" id="" placeholder='Email' onChange={handleChange} value={email} /><br />
                <input type="checkbox" name="" id="" />
                <span style={{color:'white'}}>Aceptación de terminos y condiciones de manejo de datos</span><br />
                <span style={{color:'white'}}>Nuestros medios de pago</span>
                <div className={styles.pay}>
                    <div><FontAwesomeIcon icon={faMoneyBillWave}/></div>
                    <div><FontAwesomeIcon icon={faMoneyBillWave}/></div>
                    <div><FontAwesomeIcon icon={faMoneyBillWave}/></div>
                    <div><FontAwesomeIcon icon={faMoneyBillWave}/></div>
                    <div><FontAwesomeIcon icon={faMoneyBillWave}/></div>
                    <div><FontAwesomeIcon icon={faMoneyBillWave}/></div>
                    <div><FontAwesomeIcon icon={faMoneyBillWave}/></div>
                    <div><FontAwesomeIcon icon={faMoneyBillWave}/></div>
                    <div><FontAwesomeIcon icon={faMoneyBillWave}/></div>
                </div>
            </div>
        </div> 
        <div>
            <hr className={styles.footer__line} />
            <div className={styles.footer__developt}>
                <span>Desarrollado por</span>
                <img className={styles.icon} src={img} alt="" />
                <img className={styles.icon} src={img2} alt="" />
            </div>
        </div>
    </div>)
}