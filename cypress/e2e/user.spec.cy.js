import userData from '../fixtures/user/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const chance = new Chance()


describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.natural({min: 6, max: 10}), chance.natural({min: 6, max: 29}),chance.natural({min: 6, max: 29}), '2028-23-08')
    myInfoPage.fillStatus('1998-03-02')
    myInfoPage.saveForm()   
 })
})
