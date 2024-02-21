import React, { useState } from 'react';

interface NewPostProps {
  onNewPost: (post: { type: string; url: string; otherData?: any }) => void;
}

const NewPost: React.FC<NewPostProps> = ({ onNewPost }) => {
  const [linkType, setLinkType] = useState<string>('reddit');
  const [url, setUrl] = useState<string>('');

  // Function to call the API and get scraped data
  const fetchPostData = async (url: string, type: string) => {
    try {
        const response = await fetch('/api/scrapeInstagram', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
          });
          
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data; // This data should include the necessary properties for the card components
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Call the API to fetch post data based on the URL
    const scrapedData = await fetchPostData(url, linkType);
    if (scrapedData) {
      onNewPost({
        type: linkType,
        url: url,
        ...scrapedData, // Spread the fetched data into the post object
      });
    }

    // Reset the form fields
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
