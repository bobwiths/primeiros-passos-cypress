class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericCombobox: ".oxd-select-text--arrow",
            fItemDCombobox: ".oxd-select-dropdown > :nth-child(1)",
            sItemDCombobox: ".oxd-select-dropdown > :nth-child(2)",
            tItemDCombobox: ".oxd-select-dropdown > :nth-child(3)",
        }
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    fillEmployeeDetails(employeeId, otherId, driverLicenseDate, licenseExpiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseDate)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    fillStatus(birthDate) {
        cy.get(this.selectorsList().genericCombobox).eq(0).click({force: true})
        cy.get(this.selectorsList().tItemDCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true})
        cy.get(this.selectorsList().sItemDCombobox).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthDate)
        cy.get(this.selectorsList().dateCloseButton).click()    
    }
    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}

export default MyInfoPage