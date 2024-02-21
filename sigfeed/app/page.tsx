"use client";

import React, { useState, Suspense } from 'react';
const InstagramCard = React.lazy(() => import('../components/instagramCard'));
const RedditCard = React.lazy(() => import('../components/redditCard'));
// Updated to use relative import path
import NewPost from '../components/newPost';

// Define a type for your posts
interface Post {
  type: string;
  url: string;
  [key: string]: any; // Allows for additional properties of any type
}

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const handleNewPost = (post: Post) => {
        setPosts([post, ...posts]); // Prepend new posts to maintain order
        // Added for debugging: Log the updated posts state
        console.log(posts);
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
