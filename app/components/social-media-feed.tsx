"use client";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export interface SocialMediaPost {
  id: number;
  platform: "facebook" | "instagram";
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
    }, 5000); // Adjusted interval for better reading time

    return () => clearInterval(interval);
  }, [posts.length]);

  const currentPost = posts[currentPostIndex];

  return (
    <div className="social-media-feed max-w-screen-lg p-2 mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
      <div>
        <div className="flex items-center p-4">
          <Image
            src={currentPost.userPicture}
            alt={currentPost.user}
            width={60}
            height={60}
            className="social-media-post-image w-16 h-16 rounded-full"
          />
          <h2 className="flex justify-center text-4xl ml-4 p-2 text-dark">
            {currentPost.title}
          </h2>
        </div>
        <div className="post-content p-2">
          <p className="text-base p-2 text-typography">
            {showFullContent
              ? currentPost.content
              : `${currentPost.content.slice(0, 400)}...`}
          </p>
          <div className="flex items-center p-2">
            {currentPost.platform === "facebook" ? (
              <FaFacebook className="text-highlight text-2xl" />
            ) : (
              <FaInstagram className="text-highlight text-2xl" />
            )}
            <span className="text-sm ml-2 text-secondary">
              {currentPost.user}
            </span>
            <span className="text-sm ml-2 text-secondary">
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
  );
};

export default SocialMediaFeed;
