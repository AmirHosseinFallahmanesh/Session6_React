import React,{useEffect} from 'react'
import queryString  from 'query-string'
import {  useLocation } from 'react-router-dom'
export const Shop = () => {
    var location=useLocation()
useEffect(() => {
    
    const parsed = queryString.parse(location.search);
    console.log(parsed);
    //=> {foo: 'bar'}
    
    console.log(location.hash);
    //=> '#token=bada55cafe'
  
})
//i love fateme
    return (
        <div>
            this is shop
        </div>
    )
}
