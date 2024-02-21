// sigfeed/pages/api/scrapeInstagram.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Example: Extracting the URL from the request body
      const { url } = req.body;
  
      // Placeholder: Implement your logic here to scrape Instagram data
      // This might involve calling your Python script or another method
  
      res.status(200).json({ message: "Data fetched successfully", data: {} });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  