import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

export const ProductSubList = () => {
    const {products} = useContext(ProductContext)
    
  return (
    <div>
        <h1>ProductSubList</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((p)=>{
                        return <tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                        </tr>
                    })
                }
            </tbody>

        </table>
    </div>
  )
}
