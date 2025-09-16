import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import { expect } from "chai";

describe("Login Test 1 saucedemo", function () {
  this.timeout(300000);
  let driver;

  before(async () => {
    const options = new chrome.Options()
      .addArguments("--headless") // run without UI (Chrome v109+)
      .addArguments("--no-sandbox")
      .addArguments("--disable-dev-shm-usage")
      .addArguments("--disable-gpu")
      .addArguments("--remote-debugging-port=9221")
      .addArguments("--user-data-dir=/tmp/chrome-profile-" + Date.now());

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
  });

  after(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it("should login successfully", async () => {
    await driver.get("https://www.saucedemo.com/");
    await driver.findElement({ id: "user-name" }).sendKeys("standard_user");
    await driver.findElement({ id: "password" }).sendKeys("secret_sauce");
    await driver.findElement({ id: "login-button" }).click();

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include("inventory");
  });
});

describe("Login Test 2 - practicetestautomation", function () {
  this.timeout(300000);
  let driver;

  before(async () => {
    const options = new chrome.Options()
      .addArguments("--headless") // run without UI (Chrome v109+)
      .addArguments("--no-sandbox")
      .addArguments("--disable-dev-shm-usage")
      .addArguments("--disable-gpu")
      .addArguments("--remote-debugging-port=9221")
      .addArguments("--user-data-dir=/tmp/chrome-profile-" + Date.now());

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
  });

  after(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it("should login successfully", async () => {
    await driver.get("https://practicetestautomation.com/practice-test-login/");
    await driver.findElement({ id: "username" }).sendKeys("student");
    await driver.findElement({ id: "password" }).sendKeys("Password123");
    await driver.findElement({ id: "submit" }).click();

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include("logged-in-successfully");
  });
});
