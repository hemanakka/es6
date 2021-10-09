import React, { usestate } from 'react'

export default function Hook() {
let [name,setName]=usestate("rug")
        return (
            <div>
              <h1 onMouseOver={()=>setName(name:"Reddy")}>
                </h1>  
            </div>
        )
    }
