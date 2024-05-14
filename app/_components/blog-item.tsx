import React from 'react';
import Image from 'next/image'
interface BlogItemProps {
    imageUrl: string;
    title: string;
    description: string;
    altText: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ imageUrl, title, description, altText }) => (
    <div className="group rounded-xl overflow-hidden">
        <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <Image
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                    src={imageUrl}
                    alt={altText}
                    width={56}
                    height={44}
                />
            </div>
            <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-gray-400">{description}</p>
            </div>
        </div>
    </div>
);

export default BlogItem;
