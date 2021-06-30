import React, { Suspense, FC } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '@/components/Header'
import routes from '@/routes'
import { SWRConfig } from 'swr'
import './App.less'

const App: FC = () => (
  <SWRConfig
    value={{
      suspense: true,
      fetcher: url => fetch(url).then(res => res.text()),
    }}
  >
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
  </SWRConfig>
)

export default App
