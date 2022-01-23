import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'


export const Product = () => {

    const  handle  = useParams()
    

    useEffect(() => {
       console.log(handle)
    })
    return (
        <div>
            this is test
        </div>
    )
}
