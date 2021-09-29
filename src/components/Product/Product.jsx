import img from '../../data/images/wheelchair.jpg'
import styles from './product.module.css'

export default function Product({item}){
    return(<div key={item.id} className={styles.product}>
        <div>
            <img className={styles.img} src={img} alt="" />
        </div>
        <div>
            <span>{item.name || 'Prueba Producto'}</span><br />
            <span>{`${item.cost ? '$ '+item.cost : '$ 1000'}`}</span><br />
            <button>AGREGAR AL CARRITO</button>
        </div>
    </div>)
}