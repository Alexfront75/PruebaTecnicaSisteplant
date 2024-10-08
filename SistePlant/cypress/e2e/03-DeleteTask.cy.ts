describe('Delete task', () => {
  it('Task Deleted', () => {
    cy.visit('/')
    cy.get('[key-data="0"] > div  > .deleteTask').click()
  })
})