// pages/api/scrapeInstagram.js
import { exec } from 'child_process';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    exec(`python path/to/instagram_scraping.py "${url}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).json({ error: "Failed to execute script" });
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return res.status(500).json({ error: stderr });
      }

      try {
        const data = JSON.parse(stdout);
        res.status(200).json(data);
      } catch (parseError) {
        res.status(500).json({ error: "Failed to parse script output" });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
