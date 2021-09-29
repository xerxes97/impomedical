import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Footer from "../../components/Footer/Footer";
import Help from "../../components/Help/Help";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import styles from './home.module.css'


export default function Home(){
    return(<div>
        <Navbar/>
        <Slider img={'home.jpg'} size={1}/>
        <CardsContainer/>
        <Help/>
        <Products type='NUEVA COLECCIÓN' newLine={true}/>
        <div className={styles.content__filter}>
            <div className={styles.filter__gray}></div>
            <ul className={styles.filter__options}>
                <li className={styles.option}>SILLAS DE RUEDAS</li>
                <li className={styles.option}>TERAPIA DEL HOGAR</li>
                <li className={styles.option}>MOVILIDAD</li>
            </ul>
            <Products style={'white'} type='AYUDAS PARA LA MARCHA'/>
        </div>
        <div className={styles.home__elements}>
            <Slider img={'img1.jpg'} size={0}/>
            <Slider img={'img2.jpg'} size={0}/>
        </div>
        <Products type='TERAPIA RESPIRATORIA'/>
        <Footer/>
    </div>)
}