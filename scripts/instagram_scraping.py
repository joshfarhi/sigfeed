from selenium import webdriver
from selenium.webdriver.common.by import By  # Import the By class

def scrape_instagram(url):
    driver = webdriver.Chrome('/public/chromedriver')
    driver.get(url)

    # Update the method to find elements
    caption_element = driver.find_element(By.XPATH, '//div[contains(@class, "C4VMK")]/span')
    caption = caption_element.text

    # Add additional scraping logic as needed

    driver.quit()
    return {"caption": caption}

if __name__ == "__main__":
    import sys
    url = sys.argv[1]
    data = scrape_instagram(url)
    print(data)
