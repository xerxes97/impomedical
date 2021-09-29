import Product from '../Product/Product'
import {products} from '../../data/products'

export default function Products({type, newLine}){
    return(<div>
        <h1>{type}</h1>
        {
            newLine ? products.filter(item=>item.categories.new===true).map(item=><Product item={item}/>)
            :
            products.filter(item=>item.line===type).map(item=><Product item={item}/>)
        }
    </div>)
}