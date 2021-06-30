import React, { Suspense, FC } from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from '@/components/Header'
import routes from '@/routes'
import './App.less'

const App: FC = () => (
  <Router>
    <Suspense fallback={<div />}>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  </Router>
)

export default App
