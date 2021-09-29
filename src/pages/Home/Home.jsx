import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Footer from "../../components/Footer/Footer";
import Help from "../../components/Help/Help";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";

export default function Home(){
    return(<div>
        <Navbar/>
        <Slider/>
        <CardsContainer/>
        <Help/>
        <Products type='NUEVA COLECCIÓN' newLine={true}/>
        <Products type='AYUDAS PARA LA MARCHA'/>
        <Products type='TERAPIA RESPIRATORIA'/>
        <Footer/>
    </div>)
}