import React from 'react'


export default function Title({mainTitle, subTitle}) {
  return (
    <div>
        <h1 style = {{backgroundColor: 'skyblue',borderBottom: '5px solid MediumSlateBlue',textAlign : "center"}}>
        {mainTitle}
        </h1>

        <h2>
        {subTitle}
        </h2>
  </div>
    
  )
}
