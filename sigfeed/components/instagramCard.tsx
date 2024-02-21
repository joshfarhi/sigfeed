import React from 'react';

// Define props type for the Instagram card
interface InstagramCardProps {
  username: string;
  userImage: string; // URL to the user's profile picture
  imageUrl: string; // URL to the Instagram post image
  likes: number; // Number of likes
  caption: string;
  timestamp: string; // Consider formatting this to a more readable form if necessary
}

const InstagramCard: React.FC<InstagramCardProps> = ({
  username,
  userImage,
  imageUrl,
  likes,
  caption,
  timestamp,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* User Info */}
      <div className="flex items-center p-3">
        <img className="rounded-full h-8 w-8 object-cover mr-3" src={userImage} alt={username} />
        <span className="font-bold text-sm">{username}</span>
      </div>
      
      {/* Image */}
      <img className="w-full" src={imageUrl} alt="Instagram post" />
      
      {/* Icons and Likes */}
      <div className="p-4">
        <div className="flex space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {/* Additional icons like comment and share can be added here */}
        </div>
        <p className="font-bold mt-2">{likes} likes</p>
      </div>

      {/* Caption */}
      <div className="px-4 pb-2">
        <span className="font-bold mr-2">{username}</span>
        <span>{caption}</span>
      </div>

      {/* Timestamp */}
      <div className="px-4 pb-4 text-gray-500 text-xs">
        {timestamp}
      </div>
    </div>
  );
};

export default InstagramCard;
