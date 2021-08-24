import axios from 'axios'
import { useEffect, useState } from 'react'

function Product() {
    const [product, setProduct] = useState([])
    useEffect(async () => {
        const res = await axios.get('/products');
        console.log(res.data)
        setProduct(res.data);
    }, [])
    return (
        <div>
            {product.map(prod => <h1 key={prod.id}>{prod.name} {prod.category}</h1>)}
        </div>
    )
}

export default Product
