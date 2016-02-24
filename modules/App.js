import React from 'react'

// modules/App.js
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
// modules/App.js
// ...
    render() {
        return (
                <div>
                    <h1>Ghettohub Issues</h1>
                    <ul role="nav">
                        <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/repos">Repos</NavLink></li>
                    </ul>

                    {/* add this */}
                    {this.props.children}

                </div>
        )
    }
})
