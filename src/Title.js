import React from 'react'


export default function Title({mainTitle, subTitle}) {
  return (
    <>
        <h1 style = {{
                      color:'#2f3542',
                      borderBottom: '3px solid #b2bec3',
                      textAlign : "center"}}>
        {mainTitle}
        </h1>

        <h2>
        {subTitle}
        </h2>
  </>
    
  )
}
