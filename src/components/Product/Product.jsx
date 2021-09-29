import img from '../../data/images/wheelchair.jpg'

export default function Product({item}){
    return(<div>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <span>{item.name || 'Prueba Producto'}</span><br />
            <span>{`${item.cost ? '$ '+item.cost : '$ 1000'}`}</span><br />
            <button>AGREGAR AL CARRITO</button>
        </div>
    </div>)
}