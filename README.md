# QaAutomation
Functional/Integration Tests Automation

## Set up the environment
1. Setup Jenkins on your cluster
2. To be able to view html reports from within Jenkins, add the environment variable below:
    ```text
    JENKINS_JAVA_OVERRIDES=-Dhudson.model.DirectoryBrowserSupport.CSP="default-src\ 'self'\ jenkins-cicd.apps.pvdevops1.inm.corp;\ img-src\ 'self'\ data:;\ style-src\ 'self'\ 'unsafe-inline'\ ;\ child-src\ 'self';\ frame-src\ 'self';\ script-src\ 'self'\ jenkins-cicd.apps.pvdevops1.inm.corp;\ font-src\ 'self'\ data:;"
    ```
3. Install [rht-labs/owasp-zap-openshift](https://github.com/rht-labs/owasp-zap-openshift) and name the pod you create `owasp-zap-openshift`

## Configure Jenkins
1. Install the following Jenkins plugins
    * `HTML Publisher`
    * `NodeJS Plugin`
2. Navigate to Jenkins > Manage Jenkins > Global Tool Configuration.
3. Add a new NodeJS version `8.11.3` installation and name it `8.11.3`.
4. Navigate to Jenkins > Credentials.
5. Click on your domain under Credentials then click on Global credentials (unrestricted).
6. Click on Add Credentials on the menu on the left side.
7. Add ssh credentials for GitHub and set `qa_automation_github_key` as the ID.

## Setup Zap Pod
1. Navigate to Jenkins > Manage Jenkins > Configure System
2. Locate your `owasp-zap-openshift` pod template
3. Under container template, add the following environment variables
    ```text
    JAVA_HOME=/usr/lib/jvm/java
    SELENIUM_HOST=<dns address for selenium runner>
    SELENIUM_PORT=<open port on selenium runner>
    ZAP_PORT=<port to listen for ZAP proxy requests>
    ```
