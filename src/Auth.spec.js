import React from 'react'
import {mount} from 'cypress-react-unit-test'
import AuthExample from './Auth'

describe('App with login screen', () => {
  it('shows public route', () => {
    mount(<AuthExample />)
    cy.contains('a', 'Public Page').click()
    cy.contains('h3', 'Public')
    cy.location().should('match', /\/public$/)
  })

  it('shows protected route after login', () => {
    mount(<AuthExample />)
    cy.contains('a', 'Protected Page').click()
    // goes to login route
    cy.contains('You must log in to view the page').should('be.visible')
    cy.location().should('match', /\/login$/)

    cy.contains('button', 'Log in').click()

    cy.location().should('match', /\/protected$/)
    cy.contains('h3', 'Protected')

    cy.contains('button', 'Sign out').click()
    cy.contains('You are not logged in.').should('be.visible')
  })
})
