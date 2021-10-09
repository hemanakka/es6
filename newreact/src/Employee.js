import React, { Component } from 'react'

export default class Employee extends Component {

        constructor(props){
        super(props)
        this.state={
            name:"reddy",
            employees:[
                {name:"run"},
                {name:"stop"}
            ]
     
        }
    }
render(){
    setTimeout(()=>
        this.setState({name:"monkey"})
        ,3000)
return(
    <div>
        <h1>
            {this.state.employees[1].name}
        </h1>
        <h2>
            {this.state.name}
        </h2>
    </div>
    )
    }
}