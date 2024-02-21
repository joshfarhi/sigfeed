"use client";

import React, { useState, Suspense } from 'react';
const InstagramCard = React.lazy(() => import('../components/instagramCard'));
const RedditCard = React.lazy(() => import('../components/redditCard'));
import NewPost from '../components/newPost';

const Home: React.FC = () => {
    const [posts, setPosts] = useState([]);

    const handleNewPost = (post) => {
        // Your existing logic to handle new post submission
        const enrichedPost = post.type === 'instagram' ? {
            ...post,
            // Your logic to enrich the post with Instagram details
        } : {
            ...post,
            // Your logic for Reddit or other post types
        };

        setPosts([enrichedPost, ...posts]);
    };

    // Function to clear all entries
    const clearEntries = () => {
        setPosts([]);
    };

    return (
        <div className="p-4">
            <NewPost onNewPost={handleNewPost} />
            <button 
                onClick={clearEntries} 
                className="mb-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Clear All Entries
            </button>
            <Suspense fallback={<div>Loading...</div>}>
                {posts.map((post, index) => {
                    if (post.type === 'instagram') {
                        return <InstagramCard key={index} {...post} />;
                    } else if (post.type === 'reddit') {
                        return <RedditCard key={index} {...post} />;
                    }
                    return null;
                })}
            </Suspense>
        </div>
    );
};

export default Home;
