import React from 'react'
import { useHistory } from 'react-router-dom';

export const Home = (props) => {
  const history = useHistory();
  console.log(history)
    return (
        <div>
        <h2>Home</h2>
        <button onClick={() => history.push("/cantact?name=tesr")}>  Go To Dashboard </button>
       
        <button onClick={() => history.push(history.goBack())}>  Back </button>
      </div>
    )
}
