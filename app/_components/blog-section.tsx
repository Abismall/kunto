"use client";

import React from 'react';
import BlogItem from './blog-item';

export default function BlogSection() {
  const blogEntries = [
    {
      imageUrl: "/blog-1.jpg",
      title: "Latest Fitness Trends",
      description: "Explore the newest and most effective workout routines trending this year.",
      altText: "Fitness Trends"
    },
    // More blog entries can be added here
  ];
  return (
    <div id="blog" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black font-forest">
      <div className='grid lg:grid-cols-2 lg:gap-y-16 gap-10 max-w-[85rem] mx-auto'>
        {blogEntries.map((entry, index) => (
          <BlogItem
            key={index}
            imageUrl={entry.imageUrl}
            title={entry.title}
            description={entry.description}
            altText={entry.altText}
          />
        ))}
      </div>
    </div>
  )
}