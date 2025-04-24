import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  // const selectorsList = {
    
    
  //   firstNameField: "[name='firstName']",
  //   middleNameField: "[name='middleName']",
  //   lastNameField: "[name='lastName']",
  //   genericField: ".oxd-input--active",
  //   dateField: "[placeholder='yyyy-dd-mm']",
  //   dateCloseButton: ".--close",
  //   submitButton: "[type='submit']",
  //   genericCombobox: ".oxd-select-text--arrow",
  //   fItemDCombobox: ".oxd-select-dropdown > :nth-child(1)",
  //   sItemDCombobox: ".oxd-select-dropdown > :nth-child(2)",
  //   tItemDCombobox: ".oxd-select-dropdown > :nth-child(3)",
    
  },

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.userInfoUpdateSuccess()
   
  }),
  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  }),
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  }),
)