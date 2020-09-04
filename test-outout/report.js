$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Cucumber Framework/CucumberSeleniumFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free Login Feature",
  "description": "",
  "id": "free-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario Outline is used for data parameterization"
    }
  ],
  "line": 5,
  "name": "Free Login Test Scenario",
  "description": "",
  "id": "free-login-feature;free-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on Books Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verifies the successful login with \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 11,
      "value": "#Then Close the browser"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "free-login-feature;free-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "free-login-feature;free-login-test-scenario;;1"
    },
    {
      "cells": [
        "Komal92",
        "Komal@10492#"
      ],
      "line": 15,
      "id": "free-login-feature;free-login-test-scenario;;2"
    },
    {
      "cells": [
        "test123",
        "wrongpwd"
      ],
      "line": 16,
      "id": "free-login-feature;free-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Free Login Test Scenario",
  "description": "",
  "id": "free-login-feature;free-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on Books Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"Komal92\" and \"Komal@10492#\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verifies the successful login with \"Komal92\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 15634477100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 4192803400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Komal92",
      "offset": 13
    },
    {
      "val": "Komal@10492#",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 254523000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 4061542600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Komal92",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition.user_verifies_the_successful_login_with(String)"
});
formatter.result({
  "duration": 156735300,
  "status": "passed"
});
formatter.after({
  "duration": 293196500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free Login Test Scenario",
  "description": "",
  "id": "free-login-feature;free-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user is already on Books Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"test123\" and \"wrongpwd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user verifies the successful login with \"test123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 30695852900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 4271587400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 13
    },
    {
      "val": "wrongpwd",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 481921200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 4085920900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 41
    }
  ],
  "location": "LoginStepDefinition.user_verifies_the_successful_login_with(String)"
});
formatter.result({
  "duration": 107570100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@placeholder\u003d \u0027Type to search\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.83)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027XIPL9485\u0027, ip: \u0027192.168.43.253\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.83, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\KHUKMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51400}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e0eac1d98f7494056c9c1b13dd184fd9\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder\u003d \u0027Type to search\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.LoginStepDefinition.user_verifies_the_successful_login_with(LoginStepDefinition.java:58)\r\n\tat ✽.And user verifies the successful login with \"test123\"(D:/Cucumber Framework/CucumberSeleniumFramework/src/main/java/Features/login.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 690602300,
  "status": "passed"
});
});