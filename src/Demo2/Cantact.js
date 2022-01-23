import React,{useEffect} from 'react'
import {  useLocation } from 'react-router-dom'

function useQuery() {
  const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
export const Cantact = () => {
    let query = useQuery();
      
    useEffect(() => {
       
        console.log(query.get("name"))
        console.log(query.get("test"))
    })
    return (
        <div>
            this is test
        </div>
    )
}
