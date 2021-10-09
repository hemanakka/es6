import React, { Component } from 'react'

export default class Login extends Component {
    render(props) {
        return (
            <div>
                <h1>
                    Login page:{this.props.name}
                </h1>
            </div>
        )
    }
}