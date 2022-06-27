$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/elearning.feature");
formatter.feature({
  "name": "Elearning login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sushma"
    }
  ]
});
formatter.step({
  "name": "user enter invalid Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "sushma",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "Backgroung section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@sushma"
    }
  ]
});
formatter.step({
  "name": "user enter invalid Username \"sushma\" and Password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearning.user_enter_invalid_Username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.validation_message_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enter invalid Username \"\u003cusername\u003e\" and Password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "sushma",
        "123456"
      ]
    },
    {
      "cells": [
        "manu",
        "s345"
      ]
    },
    {
      "cells": [
        "susma",
        "jh234567"
      ]
    }
  ]
});
formatter.background({
  "name": "Backgroung section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enter invalid Username \"sushma\" and Password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearning.user_enter_invalid_Username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.validation_message_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "Backgroung section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enter invalid Username \"manu\" and Password \"s345\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearning.user_enter_invalid_Username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.validation_message_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "Backgroung section",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "elearning.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with unauthorized user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "user enter invalid Username \"susma\" and Password \"jh234567\"",
  "keyword": "When "
});
formatter.match({
  "location": "elearning.user_enter_invalid_Username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validation message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "elearning.validation_message_appears()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});