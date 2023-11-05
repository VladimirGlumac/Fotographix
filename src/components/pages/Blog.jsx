import React from 'react';
import { BlogData } from "../Data/BlogData";
import { Link, Outlet } from 'react-router-dom';
import { MdDoubleArrow } from "react-icons/md"

export default function Blog() {
    return (
        <div className='blog-container'>
            <section className='blog-section-one'>
                <div className='trending-container'>
                    <h2 className='trending-text'>Trending</h2>
                    <div className='trending-list'>
                        {BlogData.map((data) => (
                            <Link to={data.LinkTo}>{data.BlogTitle}<MdDoubleArrow /></Link>
                        ))}

                    </div>
                </div>
                <div className='new-posts'>
                    <h2 className='latest-text'>Latest</h2>
                    <div className='posts-container'>
                        {BlogData.map((data) => (
                            <div className="blog-data-container" key={data.id}>
                                <h2 className='blog-title'>{data.BlogTitle}</h2>
                                <img className='blog-data-img' src={data.BlogImg} alt="" />
                                <p className='blog-text'>{data.BlogText}</p>
                                <div className='name-date'>
                                    <p>{data.Author}</p>
                                    <p>{data.date}</p>
                                </div>
                                <Link className='link-button' to={`${data.LinkTo}`}>Read More</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='blog-content'>

                </div>

            </section>

        </div>
    );
}