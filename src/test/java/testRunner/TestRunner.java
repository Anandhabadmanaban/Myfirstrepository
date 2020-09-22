package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//if i want to keep my changes
@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features", glue="stepDefinations",plugin= {"pretty","html:target/cucumber","json:target/cucumber.json"})
public class TestRunner extends AbstractTestNGCucumberTests  {
	
 
}

/*
*/