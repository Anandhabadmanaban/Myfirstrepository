package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


//additional line 18:30
//3rd commit overide in same line
@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features", glue="stepDefinations",plugin= {"pretty","html:target/cucumber","json:target/cucumber.json"})
public class TestRunner extends AbstractTestNGCucumberTests  {
	
 
}

/*
*/