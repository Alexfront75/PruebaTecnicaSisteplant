
describe('Mark task as Completed', () => {
    it('visits the app root url', () => {
        cy.visit('/')

        const myTimeout = setTimeout(myGreeting, 5000);

        function myGreeting() {
            cy.get('[key-data="0"] > div  > .editIcon').click()
        }
    })
})