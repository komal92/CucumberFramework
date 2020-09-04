package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Point;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition{

	 static WebDriver driver;

	
	 @Given("^user is already on Books Page$")
	 public void user_already_on_login_page(){
	 System.setProperty("webdriver.chrome.driver","D:/Driver/chromedriver.exe");
	 driver = new ChromeDriver();
	 driver.get("https://demoqa.com/books");
	 }
	
	
	 @When("^user clicks on Login button$")
	 public void user_clicks_login_button() {
		 driver.findElement(By.xpath("//button[@id='login']")).click();
	 }
	 
	 @When("^user clicks on Logout button$")
	 public void user_clicks_logout_button(){
		 driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
	 }
	
	 //Reg Exp:
	// 1. \"([^\"]*)\"
	 //2. \"(.*)\"
	
	 @Then("^user enters \"(.*)\" and \"(.*)\"$")
	 public void user_enters_username_and_password(String username, String password){
	 driver.findElement(By.id("userName")).sendKeys(username);
	 driver.findElement(By.id("password")).sendKeys(password);
	 }
	 
	 @When("^user verifies the successful login with \"([^\"]*)\"$")
	 public void user_verifies_the_successful_login_with(String username) throws Throwable {
		 driver.switchTo().defaultContent();
		 Assert.assertTrue(driver.findElement(By.xpath("//input[@placeholder= 'Type to search']")).isDisplayed());
	 }
	
	 @Then("^user clicks on login button$")
	 public void user_clicks_on_login_button() {
	 WebElement loginBtn =
	 driver.findElement(By.xpath("input[@type='submit']"));
	 JavascriptExecutor js = (JavascriptExecutor)driver;
	 js.executeScript("arguments[0].click();", loginBtn);
	 }
	
	
	 @Then("^user is on home page$")
	 public void user_is_on_hopme_page(){
	 String title = driver.getTitle();
	 System.out.println("Home Page title ::"+ title);
	 Assert.assertEquals("CRMPRO", title);
	 }
	 
	 @Then("^user moves to new contact page$")
	 public void user_moves_to_new_contact_page() {
		driver.switchTo().frame("mainpanel");
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("a[contains(text(),'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("a[contains(text(),'New Contact')]")).click();
		
		}
	 
	 
	 @Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	 public void user_enters_contacts_details(String firstname, String lastname, String position){
		 driver.findElement(By.id("first_name")).sendKeys(firstname);
		 driver.findElement(By.id("surname")).sendKeys(lastname);
		 driver.findElement(By.id("company_position")).sendKeys(position);
		 driver.findElement(By.xpath("input[@type='submit' and @value='Save']")).click();
	 }
	 

	/* @After
	 public void close_the_browser(){
		 driver.quit();
	 }*/
	 
	 @After()
	 public void tearDown(Scenario scenario) {
	     if (scenario.isFailed()) {
	             final byte[] screenshot = ((TakesScreenshot) driver)
	                         .getScreenshotAs(OutputType.BYTES);
	             scenario.embed(screenshot, "image/png"); //stick it in the report
	     }
	     driver.close();
	 }
	
}
