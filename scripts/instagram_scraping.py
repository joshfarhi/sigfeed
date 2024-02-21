import sys
import json

def scrape_instagram(url):
    # Your scraping logic here
    data = {
        "username": "exampleUser",
        "caption": "Example Caption",
        # Include other data fields
    }
    return data

if __name__ == "__main__":
    url = sys.argv[1]
    scraped_data = scrape_instagram(url)
    print(json.dumps(scraped_data))  # Print data as JSON
