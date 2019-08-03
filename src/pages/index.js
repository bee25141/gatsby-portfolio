import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

// import thumb01 from '../assets/images/thumbs/01.jpg'
// import thumb02 from '../assets/images/thumbs/02.jpg'
// import thumb03 from '../assets/images/thumbs/03.jpg'
// import thumb04 from '../assets/images/thumbs/04.jpg'
// import thumb05 from '../assets/images/thumbs/05.jpg'
// import thumb06 from '../assets/images/thumbs/06.jpg'

import clicky_game from '../assets/images/thumbs/clicky_game.png'
import bamazon from '../assets/images/thumbs/bamazon.png'
import friend_finder from '../assets/images/thumbs/friend_finder.png'
import crystals_collector from '../assets/images/thumbs/crystals_collector.png'
import lunch_calculator from '../assets/images/thumbs/lunch_calculator.png'
import liri from '../assets/images/thumbs/liri.png'

import clicky_game_full from '../assets/images/fulls/clicky_game.png'
import bamazon_full from '../assets/images/fulls/bamazon.png'
import friend_finder_full from '../assets/images/fulls/friend_finder.png'
import crystals_collector_full from '../assets/images/fulls/crystals_collector.png'
import lunch_calculator_full from '../assets/images/fulls/lunch_calculator.png'
import liri_full from '../assets/images/fulls/liri.png'

// import full01 from '../assets/images/fulls/01.jpg'
// import full02 from '../assets/images/fulls/02.jpg'
// import full03 from '../assets/images/fulls/03.jpg'
// import full04 from '../assets/images/fulls/04.jpg'
// import full05 from '../assets/images/fulls/05.jpg'
// import full06 from '../assets/images/fulls/06.jpg'

// const DEFAULT_IMAGES = [
//     { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
//     { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
// ];
const DEFAULT_IMAGES = [
    { id: '1', source: clicky_game_full, thumbnail: clicky_game, caption: 'Clicky Game', description: 'React memory game'},
    { id: '2', source: friend_finder_full, thumbnail: friend_finder, caption: 'Friend Finder', description: 'Web app to fiend friends with simmilar personalities'},
    { id: '3', source: bamazon_full, thumbnail: bamazon, caption: 'Bamazon', description: 'Command line storefront application utilizing MySql'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
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
                        <p>I’m a web developer proficient in HTML, CSS, Javascript, React.js, Node.js, Express,
                        MySql, and MongoDB. Upon graduating college I began my professional career in the real estate industry at Baird
                        & Warner Title Services, where I’ve worked my way up as a part time scanner, to a leader within the operations.

                        I’m currently in the last few weeks of the Northwestern Full Stack
                        Developer Coding Bootcamp and will soon be transitioning into my career as a
                        software engineer. I’m in love with the learning experience, and the
                        feeling of accomplishment that comes with solving difficult problems
                        that require critical thinking. My experience in the bootcamp has
                        fostered a newfound passion for coding and web development, and I look
                        forward to a lifelong journey of learning in the field.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
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