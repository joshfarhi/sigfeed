"use client";

import React, { useState, Suspense } from 'react';
const InstagramCard = React.lazy(() => import('../components/instagramCard'));
const RedditCard = React.lazy(() => import('../components/redditCard'));
import NewPost from '@/components/newPost';

const Home: React.FC = () => {
    const [posts, setPosts] = useState([]);

    const handleNewPost = (post) => {
        setPosts([post, ...posts]); // Prepend new posts to maintain order
    };

    return (
        <div className="p-4">
            <NewPost onNewPost={handleNewPost} />
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
