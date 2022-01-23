import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'

export function Dashboard() {

  const  handle  = useParams()

  useEffect(() => {
     console.log(handle.version)
     console.log(handle["type"])
  })
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }