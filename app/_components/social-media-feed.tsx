"use client";
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './social-media-feed.css';
import Image from 'next/image';
export interface SocialMediaPost {
  id: number;
  platform: 'facebook' | 'instagram';
  title: string;
  content: string;
  timestamp: string;
  link: string;
  user: string;
  userPicture: string;
}


const SocialMediaFeed: React.FC<{ posts: SocialMediaPost[] }> = ({ posts }) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
      setShowFullContent(false);
    }, 30000); // Change post every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentPost = posts[currentPostIndex];

  return (
    <div className="social-media-feed">
      <div className="social-media-post">
        <div className="flex items-start w-full">
          <Image
            src={currentPost.userPicture}
            alt={currentPost.user}
            width={80}
            height={80}
            className="social-media-post-image"
          />
          <div className="post-content">
            <div>
              <h2 className='text-lg'>{currentPost.title}</h2>
              <p className="text-base mb-4">
                {showFullContent ? currentPost.content : `${currentPost.content.slice(0, 400)}...`}
              </p>
            </div>
             <div className="flex items-center mb-1">
                {currentPost.platform === 'facebook' ? (
                  <FaFacebook className="text-highlight text-sm" />
                ) : (
                  <FaInstagram className="text-highlight text-sm" />
                )}
                <span className="text-sm ml-2">{currentPost.user}</span>
                <span className="text-sm ml-2">
                  {currentPost.timestamp}
                </span>
             
            <a
              href={currentPost.link}
              className="text-secondary hover:underline ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFeed;