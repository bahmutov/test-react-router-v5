import React from 'react'
import {mount} from 'cypress-react-unit-test'
import RouteConfig, {RouteWithSubRoutes} from './RouteConfig'
import {Link, Switch} from "react-router-dom";

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

describe('Passing dynamic list of routes', () => {
  it('shows routes from this spec', () => {
    // Our route config is just an array of logical "routes"
    // with `path` and `component` props, ordered the same
    // way you'd do inside a `<Switch>`.
    const routes = [
      {
        path: "/sandwiches",
        component: Sandwiches
      },
      {
        path: "/tacos",
        component: Tacos,
        routes: [
          {
            path: "/tacos/bus",
            component: Bus
          },
          {
            path: "/tacos/cart",
            component: Cart
          }
        ]
      }
    ];

    mount(<RouteConfig routes={routes} />)
    cy.contains('a', 'Tacos').click()
    cy.contains('a', 'Cart').click()
    cy.location().should('match', /\/tacos\/cart$/)
  })
})
