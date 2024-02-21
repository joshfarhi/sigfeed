# instagram_scraping.py
import sys
import json

def scrape_instagram(url):
    # Placeholder for your scraping logic
    data = {"username": "example", "caption": "An example caption"}
    return data

if __name__ == "__main__":
    url = sys.argv[1]
    result = scrape_instagram(url)
    print(json.dumps(result))  # Print the result in JSON format
