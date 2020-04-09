import React from 'react'
import {mount} from 'cypress-react-unit-test'
import App from './App'

describe('App with routing', () => {
  it('routes', () => {
    mount(<App />)
    cy.contains('h2', 'Home')
    cy.get('nav').contains('a', 'About').click()
    cy.location().should('match', /\/about$/)
    cy.contains('h2', 'About')

    cy.get('nav').contains('a', 'Users').click()
    cy.location().should('match', /\/users$/)
    cy.contains('h2', 'Users')
  })
})
