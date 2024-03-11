import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                Home
                <Link to={'/list'}>List이동</Link>
                <Link to={'/my'}>my이동</Link>
            </div>
        )
    }
}

export default Home