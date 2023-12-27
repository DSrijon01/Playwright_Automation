# Automation With Playwright JavaScript
<code><img height="30" src="https://github.com/simple-icons/simple-icons/blob/master/icons/javascript.svg"></code>
<code><img height="30" src="https://github.com/get-icon/geticon/blob/master/icons/playwright.svg"></code>
<code><img height="30" src="https://www.vectorlogo.zone/logos/jenkins/jenkins-ar21.svg"></code>


## :ledger: Index

- [About](#beginner-about)
- [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Commands](#package-commands)
- [Development](#wrench-development)
  - [Pre-Requisites](#notebook-pre-requisites)
  - [Developmen Environment](#nut_and_bolt-development-environment)
  - [File Structure](#file_folder-file-structure)
  - [Build](#hammer-build)  
  - [Deployment](#rocket-deployment)  
- [Community](#cherry_blossom-community)
  - [Contribution](#fire-contribution)
  - [Branches](#cactus-branches)
  - [Guideline](#exclamation-guideline)  
- [FAQ](#question-faq)
- [Resources](#page_facing_up-resources)
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

##  :beginner: About
Playwright Automation Framework Navigation. 


## :zap: Usage
Automating WebApps Using Playwright 

###  :electric_plug: Installation
- Command for Playwright installtion 

###  :package: Installing PlayWright
- Installation Procedure Playwright
```
npm install playwright 

```
###  :package: Running Playwright Test in Headed Mode 
- Playwright Test Runner Command
```
npx playwright test tests/UIBasicstests.spec.js --headed

```
###  :package: Review Test Run Reports
- Playwright Run Report Review
```
npx playwright show-report

```
###  :package: Test Run on Singular Platform Browser [projcet = firefox, webkit]
- Browser Declaration
```
npx playwright test tests/UIBasicstests.spec.js --project=chromium

```
###  :package: Run in step by step Debug Mode
- Browser Declaration
```
npx playwright test tests/window_handling.spec.js --project=chromium --headed --debug

```
##  :wrench: Development
If you want to colab please read through. 

### :notebook: Pre-Requisites
List of all the pre-requisites the system needs to develop this project.
- Node.js
- Playwright


###  :nut_and_bolt: Development Environment
Write about setting up the working environment for your project.
- How to download the project...
- How to install dependencies...


###  :file_folder: File Structure
File Structure to navigate the project.

```
.
├── assets
│   ├── css
│   │   ├── index-ui.css
│   │   └── rate-ui.css
│   ├── images
│   │   ├── icons
│   │   │   ├── shrink-button.png
│   │   │   └── umbrella.png
│   │   ├── logo_144.png
│   │   └── Untitled-1.psd
│   └── javascript
│       ├── index.js
│       └── rate.js
├── CNAME
├── index.html
├── rate.html
└── README.md
```

| No | File Name | Details 
|----|------------|-------|
| 1  | index | Entry point

###  :hammer: Build
Write the build Instruction here.

### :rocket: Deployment
Write the deployment instruction here.

## :cherry_blossom: Community

If it's open-source, talk about the community here, ask social media links and other links.

 ###  :fire: Contribution

 Your contributions are always welcome and appreciated. Following are the things you can do to contribute to this project.

 1. **Report a bug** <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it [here]() and I will take care of it.

 2. **Request a feature** <br>
 You can also request for a feature [here](), and if it will viable, it will be picked for development.  

 3. **Create a pull request** <br>
 It can't get better then this, your pull request will be appreciated by the community. You can get started by picking up any open issues from [here]() and make a pull request.

 > If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).


 ### :cactus: Branches

 I am using an agile continuous integration methodology, so the version is frequently updated and development is really fast.

1. **`dev`** is the development branch.

2. **`stage`** is the experiment branch.

3. **`main`** is the stable branch for anyone to quickly run and learn about the project. 

4. No other permanent branches should be created in the main repository, you can create feature branches but they should not get merged with the main.

**Steps to work with feature branch**

1. To start working on a new feature, create a new branch prefixed with `feat` and followed by feature name. (ie. `feat-FEATURE-NAME`)
2. Once you are done with your changes, you can raise PR.

**Steps to create a pull request**

1. Make a PR to `stage` branch.
2. Comply with the best practices and guidelines e.g. where the PR concerns visual elements it should have an image showing the effect.
3. It must pass all continuous integration checks and get positive reviews.

After this, changes will be merged.


### :exclamation: Issues I faced 
- 

## :question: FYI
- Use Await to maintain the async execution nature of javascript 
- Changes made to the playwright.config.js -  from forbidOnly: !!process.env.CI, to forbidOnly: false, to check ci actions. 

##  :page_facing_up: Resources


##  :camera: Gallery


## :star2: Credit/Acknowledgment


##  :lock: License
MIT