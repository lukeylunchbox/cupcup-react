import React from 'react'

//Without JSX
import './App.scss'

// function App(){
//     return React.createElement('div', {}, 
//     React.createElement('div', {}, "Hello Worlds"),
//     React.createElement('div', {}, React.createElement('span', {}, " Worlds"))
// )}

//USING  JSX
const style = {
    width: "600px"
}

function App() {
    return <div className="main"> 
        <h1 className="title">Hello World</h1>
        {/* Comments are like this */}
        <img style= {style} src= 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350'/>
        <h2>HI!</h2>
        <p>Hello World</p>
         </div>
}

// function App() {
//     return <div className="main"> 

// }

export default App