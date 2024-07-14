# ShopeeAutomateTest

## 1. Clone the Repository
```bash
git clone https://github.com/VaraikornAom/ShopeeAutomateTest.git
```
```bash
cd /project/path
```

### Environment Variables
#### In shopee_test.cy.js, change 'USERNAME' and 'PASSWORD' to your real username and password.
```bash
cy.get('input[name="loginKey"]').type(Cypress.env('USERNAME'));
cy.get('input[name="password"]').type(Cypress.env('PASSWORD'));
```

## 2. Install Cypress
#### https://docs.cypress.io/guides/getting-started/installing-cypress
```bash
npm install
```
```bash
npm install cypress --save-dev
```

## 3. Install Python Dependencies
```bash
pip install -r requirements.txt
```

## 4. Running Tests
#### https://docs.cypress.io/guides/getting-started/opening-the-app
### 4.1 Open Cypress
```bash
npx cypress open
```
### 4.2 CLI tools
#### 4.2.1 The Launchpad
##### Choose E2E Testing Type (Left)
![Screenshot 2024-07-14 211531](https://github.com/user-attachments/assets/3b7c8463-7a8a-4a7a-bf12-b7920b3b686c)

#### 4.2.2 Launching a Browser
##### Choose Chrome
![Screenshot 2024-07-14 211611](https://github.com/user-attachments/assets/eac37aef-60c6-4896-a506-133328784c14)
##### Choose shopee_test.cy.js
![Screenshot 2024-07-14 211634](https://github.com/user-attachments/assets/095d20f4-be48-4b47-a035-23376b86fb1e)
