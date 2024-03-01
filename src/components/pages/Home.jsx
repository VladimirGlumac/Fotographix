import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bgImage from "../../videos/backgroundvideo.mp4"
import { motion } from 'framer-motion'
import ImageFilter from './ImageRender'
import UserReviewList from './UserReviewList'
import reviewsData from "../Data/UserData"
import Wave from 'react-wavify'
export default function Home() {


    return (
        <div>
            <section className="home-welcome">
                <video autoPlay loop muted className="video-background">
                    <source src={bgImage} type='video/mp4' />
                </video>
                <h1 className='hello-text'>Welcome to FOTOGRAPHIX</h1>
                <h2 className='text-h2'>At Fotographix, we believe that every photo tells a unique story, a personal perspective, an artistic vision. Join our vibrant community of photographers and artists!</h2>
                <div className="home-buttons">
                    <motion.div
                        className='box'
                        whileHover={{ scale: [null, 1.5, 1.4] }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className='home-button'>Join us</button>
                    </motion.div>
                    <motion.div
                        className='box'
                        whileHover={{ scale: [null, 1.5, 1.4] }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/blog">
                            <button className='home-button'>Learn More</button>
                        </Link>
                    </motion.div>
                </div>

            </section>
            <section className="home-page-two">

                <ImageFilter />

            </section>
            <section id='section3' className="home-page-three">
                <h1 className='features-text'><span className='features-text-span'>Our Features & Services </span></h1>
                <div className=' features-container'>
                    <div className='features'>
                        <h2 className='feature-name'>Photography</h2>
                        <p className='feature-description'>High-Quality Visual Storytelling</p>
                        <p>Our platform is a vibrant hub for photography enthusiasts of all levels. Whether you're a professional photographer or just love snapping moments on your smartphone, we offer the perfect space to showcase your visual storytelling skills.</p>
                        <a href="/blog/photography" className='learn-more-button'>Learn More</a>
                    </div>
                    <div className='features'>
                        <h2 className='feature-name'>Editing Tools</h2>
                        <p className='feature-description'>Connect and Collaborate</p>
                        <p>Take your creative work to the next level with our powerful editing tools. Whether you're an amateur or a pro, our platform provides a suite of editing options to help you refine your photos and videos, turning them into true works of art.</p>
                        <a href='/blog/editing' className='learn-more-button'>Learn More</a>
                    </div>
                    <div className='features'>
                        <h2 className='feature-name'>Resources and Tools</h2>
                        <p className='feature-description'>Equip Yourself for Success</p>
                        <p>Explore our curated collection of resources and tools designed to help you succeed in the world of visual storytelling. From camera gear recommendations to legal guides, we've got you covered.</p>
                        <a className='learn-more-button' href='/blog/gear'>Learn More</a>
                    </div>
                    <div className='features'>
                        <h2 className='feature-name'>Photographing Wildlife</h2>
                        <p className='feature-description'>Capture the Nature</p>
                        <p>Our guide to photographing wildlife provides you with essential techniques and insights for capturing breathtaking moments in the wild. Discover the beauty of nature and enhance your photography skills with our comprehensive resources.</p>
                        <a href='/blog/wildlife' className='learn-more-button'>Learn More</a>
                    </div>

                </div>
            </section>
            <section className="home-page-four "><h1 className='features-text'><span className='features-text-span'>Our User Reviews</span></h1>


                <div className='users-container'>
                    <UserReviewList reviews={reviewsData} />
                </div>
                <Wave fill='#1c1c1c'
                    paused={false}
                    style={{ display: 'flex' }}
                    options={{
                        height: 30,
                        amplitude: 40,
                        speed: 0.25,
                        points: 3,

                    }}
                />
            </section>

        </div>
    )
}
