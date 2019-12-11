/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import map from 'lodash/map'
import routes from '../../routes/routes'
import Header from './Header'
import {
  Body,
  SideContainer,
  ApplicationContainer,
  SideItem
} from './styled'

const Main = (props) => {
  const { history } = props

  return (
    <>
      <Header />
      <Body>
        <SideContainer>
          <SideItem
            onClick={() => history.push('/')}
          >
            Home
          </SideItem>
          <SideItem
            onClick={() => history.push('/create')}
          >
            Create Article
          </SideItem>
        </SideContainer>
        <ApplicationContainer>
          <Switch>
            {
              map(routes, (route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))
            }
          </Switch>
        </ApplicationContainer>
      </Body>
    </>
  )
}

Main.defaultProps = {
}

Main.propTypes = {
}

export default withRouter(Main)
