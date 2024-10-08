// https://on.cypress.io/api

describe('Add task to List', () => {
  const username = 'Comprar helados para la semana que viene'
  it('Added new task to List', () => {
      cy.visit('/')
      cy.get('input[name=newTaskInput]').type(username)
      cy.request({
         method: 'POST',
         url: 'http://localhost:3000/api/tasks', // baseUrl will be prepended to this url
         form: false, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
         body: {
             name: username,
             active: true,
             visible: true,
         },
      })
      console.log('Introducir nueva tarea OK')
  })
})


