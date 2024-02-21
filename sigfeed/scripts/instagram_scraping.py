from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

def scrape_instagram(url):
    # Specify the correct path to your chromedriver
    service = Service(executable_path='/public/chromedriver')
    options = Options()
    # Add any Chrome options you need
    driver = webdriver.Chrome(service=service, options=options)
    driver.get(url)

    # Your scraping logic here
    caption_element = driver.find_element(By.XPATH, '//div[contains(@class, "C4VMK")]/span')
    caption = caption_element.text

    driver.quit()
    return {"caption": caption}
