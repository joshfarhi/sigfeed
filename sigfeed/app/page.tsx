import React from 'react';
import InstagramCard from '../components/instagramCard';
import RedditCard from '../components/redditCard';

const Home: React.FC = () => {
    return (
        <div className="p-4">
            <h1 
            className="text-2xl font-bold mb-4">
              Instagram Posts
              </h1>
            <InstagramCard
              username="exampleUsername"
              userImage="https://example.com/path/to/user/image.jpg"
              imageUrl="https://example.com/path/to/post/image.jpg"
              likes={123}
              caption="This is an example caption for an Instagram post."
              timestamp="2024-02-20T10:00:00Z"
/>


          <h1 
          className="text-2xl font-bold mb-4">
            Reddit Posts
            </h1>
            <RedditCard
              subreddit="nextjs"
              title="Exploring the Best Practices for SEO in Next.js Applications"
              upvotes={123}
              numComments={45}
              timestamp="2024-02-20T10:00:00Z"
              imageUrl="https://example.com/path/to/image.jpg"
      />
      {/* Include more RedditCard components as needed */}
        </div>

      

    );
};

export default Home;
