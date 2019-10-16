import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import clicky_game from '../assets/images/thumbs/clicky_game.png'
import bamazon from '../assets/images/thumbs/bamazon.png'
import friend_finder from '../assets/images/thumbs/friend_finder.png'
import lunch_calculator from '../assets/images/thumbs/lunchbox_chi3.png'
import liri from '../assets/images/thumbs/liri.png'

const DEFAULT_IMAGES = [
    { id: '1', source: "https://github.com/bee25141/lunch-calculator", thumbnail: lunch_calculator, caption: 'Lunchbox Chi', description: "Finding the best 'bang for your buck' lunch in Chicago (Under Construction)"},
    { id: '2', source: "https://github.com/bee25141/Clicky-Game", thumbnail: clicky_game, caption: 'Clicky Game', description: 'React memory game'},
    { id: '3', source: "https://github.com/bee25141/FriendFinder", thumbnail: friend_finder, caption: 'Friend Finder', description: 'Web app to fiend friends with simmilar personalities'},
    { id: '4', source: "https://github.com/bee25141/bamazon", thumbnail: bamazon, caption: 'Bamazon', description: 'Command line storefront application utilizing MySql'},
    { id: '5', source: "https://github.com/bee25141/liri-node-app", thumbnail: liri, caption: 'Liri Node App', description: 'Command line node app that returns data for movies, concerts and songs'},
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Tony Bee"
        const siteDescription = "Welcome to My Portfolio"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hi! I'm Tony.</h2>
                        </header>
                        <p>I’m a Full Stack Developer and AWS Certified Solutions Architect proficient in Amazon Web Services, Docker, Kubernetes, React.js, Node.js, MySQL, MongoDB, Javascript, CSS and HTML. Upon graduating college I began my professional career in the real estate industry at Baird & Warner Title Services, 
                            where I worked my way up from a part-time scanner, to a leader within the operations. Over the past year I've been making a career shift into tech - completing the Northwestern Full Stack Coding Bootcamp and passing the 
                            AWS Certified Solutions Architect exam on my first attempt.</p>

                        <p>I’m in love with the learning experience, and the feeling of accomplishment that comes with solving difficult problems that require critical thinking. 
                            My experience in the bootcamp and my work with AWS has fostered a newfound passion for coding, DevOps, and cloud, and I look forward to a lifelong journey of learning in the field. </p>

                        <p>I'm seeking a Junior DevOps or Cloud Engineer position and very open to relocating for the right opportunity.
                            Feel free to contact me using the form below, or connect with me on LinkedIn! </p>
                        <ul className="actions">
                            <li><a href="https://www.linkedin.com/in/tony-bee-abab93174/" target="_blank" className="button">Connect on LinkedIn</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://github.com/bee25141" className="button">Full GitHub Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="mailto:bee25141@gmail.com">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Chicago, IL<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        815-600-4269
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:bee25141@gmail.com">bee25141@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex