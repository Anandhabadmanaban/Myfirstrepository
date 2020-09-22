package stepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinations {
//second commit check	
	public WebDriver driver;

@Given("^launch url$")
public void launch_url() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "D:\\Selenium Material\\chromedriver_win32_latest\\version 85\\chromedriver.exe");
	//driver = new HtmlUnitDriver();
	 driver = new ChromeDriver();
	driver.navigate().to("https://www.seleniumeasy.com");
	
}

@When("^refreshpage$")
public void refreshpage() throws Throwable {
	driver.navigate().refresh();
}

@Then("^validate page$")
public void validate_page() throws Throwable {
	Thread.sleep(3000);
	WebElement demowebsite = driver.findElement(By.xpath("//a[contains(text(),'Demo Website!')]"));
	if(demowebsite.isDisplayed()) {
		Assert.assertTrue("button available", true);
		
	}
  
driver.quit();
}

@When("^entertext in searchbox$")
public void entertext_in_searchbox() throws Throwable {
	
	WebElement searchbox = driver.findElement(By.xpath("//input[contains(@id,'edit-search-block-form')]"));
	searchbox.click();
	searchbox.sendKeys("testng");
	
}

@Then("^validate search results$")
public void validate_search_results() throws Throwable {
	
	WebElement demowebsite = driver.findElement(By.xpath("//h2[contains(text(),'Search results')]"));
	if(demowebsite.isDisplayed()) {
		Assert.assertTrue("search result available available", true);
		
	}
   
   
}

}
