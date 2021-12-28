# Front-End Development With React Capstone: Bad Bank
## Overview
The current repo contains **Bad Bank** app which is a website to deposit and withdraw money from your account.

This app is build as capstone for [Front-End Development With React](https://executive-ed.xpro.mit.edu/front-end-development-react?utm_source=MITxPROWeb) course provided by MIT xPRO.

In **Bad Bank** app, the following outcomes are addressed:
* Build a [React](https://reactjs.org/) application.
* Design and build UI components using React.
* Use [Context API](https://reactjs.org/docs/context.html) in React.
* Deploy a React application using [Amazon Web Services](https://aws.amazon.com/).

Verify AWS deployment [here](https://alexandra-baturina-bad-bank.s3.us-west-2.amazonaws.com/index.html).

## Features
### Navigation Bar
* Includes ***Create Account***, ***Deposit***, ***Withdraw***, ***All Data***, and ***Home*** pages.
* Each navigation bar item routes the user to the relevant page.
### Home Page
* Includes bank title, image, and a welcome message.
### Create Account Page
* The page includes the ***Create Account*** form that has the following elements.
  * ***Name*** input field.
  * ***Email*** input field.
  * ***Password*** input field.
  * ***Create Account*** button.
    * The button is disabled if any of the fields left blank or validation criteria are not met.
* The page has the following functionality.
  * Success message.
    * If all validation criteria are met, upon clicking the ***Create Account*** button the user sees a success message.
  * ***Add Another Account*** button.
    * Upon clicking the ***Create Account*** button, the user sees ***Add Another Account*** button.
  * Cleared ***Create Account*** form.
    * Clicking the ***Create Account*** button opens a cleared ***Create Account*** form.
  * Form validation
    * The ***Create Account*** button is disabled if any field is left blank.
    * The user receives an error message if:
      * username is not unique within a session;
      * email does not meet basic requirements (domain or @ missed etc.);
      * password is less than 8 characters long.
### Deposit Page
* Includes the ***Deposit*** form that has the following elements.
   * ***Deposit Amount*** number input field.
   * ***Deposit*** button.
   * Balance information that is displayed above the input field.
* The page has the following functionality.
    * Updated balance.
       * When a user deposits, the balance updates.
    * Success message.
       * When a user completes the ***Deposit*** form, they receive a success message confirming their deposit was received.
    * ***Deposit*** button is disabled if nothing is input.
### Withdraw Page
* The page includes the ***Withdraw*** form that has the following elements.
   * ***Withdraw Amount*** number input field.
   * ***Withdraw*** button.
   * Balance information that is displayed above the input field.
* The page has the following functionality.
   * Updated balance.
      * When a user completes the ***Withdraw*** form, the number submitted is subtracted from the total balance.
      * Success message.
         * When a user completes the ***Withdraw*** form, they receive a success message confiming their withdraw was processed.
      * Account overdaraft feature.
         * When a user withdraws a number higher than the account balance, the user recieves an alert message.
      * ***Withdraw*** button is disabled if nothing is input.
### All Data Page
* Includes the following information about each user:
   * Name
   * Email
   * Password
   * Balance
   * A link to corresponding profile page.
### Profile Page
* Includes the following information about the corresponding user:
  * History of operations
  * Balance
* *User does not exist* message displays if user does not exist.
## Dev Dependencies
**Bad Bank** app has the following dev dependencies:
* [React-Bootstrap](https://react-bootstrap.github.io/) library – to style UI components
* [Formik](https://formik.org/) library – to manage forms
* [Yup](https://formik.org/docs/guides/validation) schema builder – to validate forms

To install dev dependencies, run the following command:
```sh
npm install
```
## Getting Started
To run **Bad Bank** app in dev mode:
1. Clone this repo.
2. ``cd`` into project directory.
3. Install the dependencies by running the following command:
```sh
npm install
```
4. Start the server by running the following command:
```sh
npm start
```
The ```http:localhost:3000``` page will be automatically opened in your browser.
## Author
[Alexandra Baturina](https://www.linkedin.com/in/alexandrabaturina/)
