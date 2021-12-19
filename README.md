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
**Bad Bank** app includes the following functionality:
1. **Navigation Bar**
    * Includes ***Create Account***, ***Deposit***, ***Withdraw***, ***All Data***, and ***Home*** pages
    * Each navigation bar item routes the user to the relevant page
    * Each navigation bar item is highlight when you are on that page
    * When your mouse hovers over a navigation bar item, you see a pop up with a description of that page
2. **Home Page**
    * Includes bank title, image, and a welcome message
3. **Create Account Page**
    * Includes the ***Create Account*** form that has:
      * ***Name*** input field
      * ***Email*** input field
      * ***Password*** input field
      * ***Create Account*** button
4. **Create Account Page Functionality**
    * Success message
      * Upon clicking the ***Create Account*** button the user sees a success message
    * ***Add Another Account*** button
      * Upon clicking the ***Create Account*** button, the user sees ***Add Another Account*** button
    * Cleared ***Create Account*** form
       * Clicking the ***Create Account*** button opens a cleared ***Create Account*** form
    * Name validation
       * The ***Create Account*** button is disabled if the ***Name*** field is left blank
    * Email validation
       * The ***Create Account*** button is disabled if the ***Email*** field is left blank
    * Password validation
       * The ***Create Account*** button is disabled if the ***Password*** field is left blank
       * The user receives an error message if the password is less than 8 characters long
  5. **Deposit Page**
      * Includes the ***Deposit*** form that has:
         * ***Deposit Amount*** number input field
         * ***Deposit*** button
         * Balance information that is displayed above the input field
   6. **Deposit Page Functionality**
       * Updated balance
          * When a user deposits, the balance updates
       * Success message
          * When a user completes the ***Deposit*** form, they receive a success message confirming their deposit was received
       * ***Deposit*** button is disabled if nothing is input
   7. **Withdraw Page**
       * Includes the ***Withdraw*** form that has:
         * ***Withdraw Amount*** number input field
         * ***Withdraw*** button
         * Balance information that is displayed above the input field
   8. **Withdraw Page Functionality**
      * Updated balance
         * When a user completes the ***Withdraw*** form, the number submitted is subtracted from the total balance
      * Success message
         * When a user compltes the ***Withdraw*** form, they receive a success message confiming their withdraw was processed
      * Account overdaraft feature
         * When a user withdraws a number higher than the account balance, the user recieves an alert message
      * ***Withdraw*** button is disabled if nothing is input
   9. **All Data Page Functionality**
      * User data includes the following information:
         * Name
         * Email
         * Password
         * Balance
      * Track user submissions

      ![image](https://user-images.githubusercontent.com/53233637/130496288-79864b64-93f5-4c83-839b-23d4a40d1995.png)

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
