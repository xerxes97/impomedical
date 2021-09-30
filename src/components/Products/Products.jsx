import Product from '../Product/Product'
import {products} from '../../data/products'
import styles from './products.module.css'

export default function Products({sty, type, newLine}){
    return(<div key={type} className={styles.products}>
        <h1 className={`${sty ? styles.whiteTitle : styles.title}`}>{type}</h1>
        <div className={styles.products__Container}>
            {
                newLine ? products.filter(item=>item.categories.new===true).map(item=><Product item={item}/>)
                :
                products.filter(item=>item.line===type).map(item=><Product item={item}/>)
            }
        </div>
    </div>)
}