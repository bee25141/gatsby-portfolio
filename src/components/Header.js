import React from 'react'

import Footer from './Footer'
// import avatar from '../assets/images/avatar.jpg'
import me from "../assets/images/me.jpg"

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={me} alt="" /></a>
                    <h1><strong>Tony Bee</strong>, Full Stack Web Developer<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
