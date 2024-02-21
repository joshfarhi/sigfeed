import React from 'react';

// Define props type for the Reddit card
interface RedditCardProps {
  subreddit: string;
  title: string;
  upvotes: number;
  numComments: number;
  timestamp: string; // Consider formatting this to a more readable form if necessary
  imageUrl?: string; // Optional: Not all Reddit posts have images
}

const RedditCard: React.FC<RedditCardProps> = ({
  subreddit,
  title,
  upvotes,
  numComments,
  timestamp,
  imageUrl,
}) => {
  return (
    <div className="max-w-md w-full lg:flex border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white my-4">
      {imageUrl && (
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img src={imageUrl} alt="Post image" className="w-full h-full object-cover" />
        </div>
      )}
      <div className={imageUrl ? "border-l border-gray-200" : "" + " p-4 flex flex-col justify-between leading-normal"}>
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">/r/{subreddit}</p>
          <div className="flex items-center mt-4">
            <div className="text-sm">
              <p className="text-gray-600">{upvotes} upvotes</p>
              <p className="text-gray-600">{numComments} comments</p>
              <p className="text-gray-600">{timestamp}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedditCard;
