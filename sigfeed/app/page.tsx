"use client";

import React, { useState, Suspense } from 'react';
const InstagramCard = React.lazy(() => import('../components/instagramCard'));
const RedditCard = React.lazy(() => import('../components/redditCard'));
import NewPost from '../components/newPost';

const Home: React.FC = () => {
    const [posts, setPosts] = useState([]);

    const handleNewPost = (post) => {
        // This example uses static data for demonstration.
        // You should replace this with actual logic to fetch or derive the required data.
        const enrichedPost = post.type === 'instagram' ? {
            ...post,
            username: "exampleUsername",
            userImage: "https://example.com/path/to/user/image.jpg",
            imageUrl: "https://example.com/path/to/post/image.jpg",
            likes: 123,
            caption: "This is an example caption for an Instagram post.",
            timestamp: "2024-02-20T10:00:00Z"
        } : {
            ...post,
            subreddit: "exampleSubreddit",
            title: "Example Reddit Post Title",
            upvotes: 150,
            numComments: 20,
            timestamp: "2024-02-20T10:00:00Z",
            imageUrl: "https://example.com/path/to/image.jpg" // Optional for Reddit
        };

        setPosts([enrichedPost, ...posts]);
    };

    return (
        <div className="p-4">
            <NewPost onNewPost={handleNewPost} />
            <Suspense fallback={<div>Loading...</div>}>
                {posts.map((post, index) => {
                    if (post.type === 'instagram') {
                        // Ensure all required props for InstagramCard are provided
                        return (
                            <InstagramCard
                                key={index}
                                username={post.username}
                                userImage={post.userImage}
                                imageUrl={post.imageUrl}
                                likes={post.likes}
                                caption={post.caption}
                                timestamp={post.timestamp}
                            />
                        );
                    } else if (post.type === 'reddit') {
                        // Ensure all required props for RedditCard are provided
                        return (
                            <RedditCard
                                key={index}
                                subreddit={post.subreddit}
                                title={post.title}
                                upvotes={post.upvotes}
                                numComments={post.numComments}
                                timestamp={post.timestamp}
                                imageUrl={post.imageUrl} // This prop is optional
                            />
                        );
                    }
                    return null;
                })}
            </Suspense>
        </div>
    );
};

export default Home;
