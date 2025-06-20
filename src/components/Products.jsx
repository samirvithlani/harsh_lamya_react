import React from 'react'
import { useState } from 'react'
import { ProductList } from './ProductList'
import { ProductContext } from './ProductContext'

export const Products = () => {

    const [products, setproducts] = useState([
        {
            id:1,
            name:"iphone",
            price:1000
        },
        {
            id:2,
            name:"chareger",
            price:100
        },
        {
            id:3,
            name:"bag",
            price:50
        }
    ])

    const deleteProduct = (id)=>{
        setproducts(products.filter((p)=>p.id!= id))
    }
    const productDispatcher = (action,payload)=>{

        switch(action){
            case "DELETE_PRODUCT":
                deleteProduct(payload)
            break    
            
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>PRODUCTS</h1>
        <ProductContext.Provider value={{products,productDispatcher}}>
            <ProductList></ProductList>
            
        </ProductContext.Provider>
        {/* <ProductList products ={products}></ProductList> */}
    </div>
  )
}
