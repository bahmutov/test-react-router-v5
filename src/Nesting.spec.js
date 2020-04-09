import React from 'react'
import {mount} from 'cypress-react-unit-test'
import Nesting from './Nesting'

describe('App with nesting', () => {
  it('routes', () => {
    mount(<Nesting />)
    cy.contains('a', 'Topics').click()
    cy.contains('a', 'Components').click()
    cy.location().should('match', /\/topics\/components$/)
  })
})
