import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchApi=(url)=>{

    const [data, setdata] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)

    useEffect(() => {

        callApi()
      
    }, [])
    
    const callApi = async()=>{

        setloading(true)
        const res = await axios.get(url)
        setdata(res.data.data)
        setloading(false)

    }
    return {data,error,loading,callApi}


}