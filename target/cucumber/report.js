$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("launch_search.feature");
formatter.feature({
  "line": 2,
  "name": "launch and seearch",
  "description": "",
  "id": "launch-and-seearch",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "launch",
  "description": "",
  "id": "launch-and-seearch;launch",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "launch url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "refreshpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "validate page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.launch_url()"
});
formatter.result({
  "duration": 41921886200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.refreshpage()"
});
formatter.result({
  "duration": 86848300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.validate_page()"
});
formatter.result({
  "duration": 4154695100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "search",
  "description": "",
  "id": "launch-and-seearch;search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "launch url",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "entertext in searchbox",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "validate search results",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.launch_url()"
});
formatter.result({
  "duration": 8018118300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.entertext_in_searchbox()"
});
formatter.result({
  "duration": 1248626100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.validate_search_results()"
});
formatter.result({
  "duration": 425789800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027Search results\u0027)]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-7RDGAP5P\u0027, ip: \u0027192.168.1.153\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\anand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51611}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 428179d3aa39161f3c7152fb805256ab\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027Search results\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinations.StepDefinations.validate_search_results(StepDefinations.java:57)\r\n\tat ✽.Then validate search results(launch_search.feature:12)\r\n",
  "status": "failed"
});
});