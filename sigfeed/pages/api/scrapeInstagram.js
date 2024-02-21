// pages/api/scrapeInstagram.js
import { exec } from 'child_process';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    exec(`python3 scripts/instagram_scraping.py "${url}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ error: "Failed to execute script" });
        }
        // Ensure you parse stdout and send a JSON response back
        res.status(200).json({ data: stdout });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
