import img from '../../data/images/wheelchair.jpg'
import { products } from '../../data/products'
import styles from './product.module.css'

export default function Product({item}){
    return(<div key={item.id} className={styles.product}>
        <div>
            <img className={styles.img} src={img} alt="" />
        </div>
        <div className={styles.productInfo}>
            <span>{item.name || 'Prueba Producto'}</span><br />
            <span style={{fontWeight:'bold', fontSize:'25px'}}>{`${item.cost ? '$ '+item.cost : '$ 1000'}`}</span><br />
            <button className={styles.productBtn}>AGREGAR AL CARRITO</button>
        </div>
    </div>)
}