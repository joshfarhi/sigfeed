# instagram_scraping.py
import sys
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def scrape_instagram(url):
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(options=options)

    driver.get(url)
    # Wait for elements to load
    driver.implicitly_wait(5)

    # Example: Extracting the caption
    caption = driver.find_element_by_xpath('//div[contains(@class, "C4VMK")]/span').text

    driver.quit()

    return {"caption": caption}

if __name__ == "__main__":
    url = sys.argv[1]
    data = scrape_instagram(url)
    print(json.dumps(data))
