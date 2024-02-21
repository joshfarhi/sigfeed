"use client";

// newPost.tsx
import React, { useState } from 'react';

const NewPost: React.FC = () => {
  const [linkType, setLinkType] = useState<string>('reddit');
  const [url, setUrl] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to handle the submission
    // For example, validate the URL, fetch the necessary information from the selected platform,
    // and then display it on the card.
    console.log(`Submitting ${linkType} link: ${url}`);
    // Reset form
    setUrl('');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="linkType" className="block mb-2 text-sm font-medium text-gray-900">Select Link Type:</label>
          <select
            id="linkType"
            value={linkType}
            onChange={(e) => setLinkType(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="reddit">Reddit</option>
            <option value="instagram">Instagram</option>
          </select>
        </div>

        <div>
          <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900">URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste the link here"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
