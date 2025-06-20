import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { ProductSubList } from './ProductSubList'

export const ProductList = () => {
    const {products,productDispatcher} = useContext(ProductContext)
  return (
    <div style={{textAlign:"center"}}>
        <h1>ProductList</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p)=>{
                        return <tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>
                                <button onClick={()=>{productDispatcher("DELETE_PRODUCT",1)}}>DELETE</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>

        </table>
        <ProductSubList></ProductSubList>
    </div>
  )
}
