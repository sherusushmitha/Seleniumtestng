package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/feature",
        glue ={"stepdefinition","hooks"},
        monochrome=true,
        dryRun=true,
//        tags={"@Regresion","@smoke"}, //AND condition
        tags={"@Regression,@smoke"},  //OR condition
//        tags={"~Regression"},
        plugin = {"pretty","html:Reports","json:Reports/jsonreport.json","junit:Reports/xmlreport.xml" }
//        plugin={"pretty"}
        )

public class runner {

}
