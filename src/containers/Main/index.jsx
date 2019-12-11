/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import map from 'lodash/map'
import routes from '../../routes/routes'
import Header from './Header'
import Loading from '../../components/Loading'
import {
  Body,
  SideContainer,
  ApplicationContainer,
  SideItem
} from './styled'

const Main = (props) => {
  const { history, isLoading } = props

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
          <Loading isLoading={isLoading} />
        </ApplicationContainer>
      </Body>
    </>
  )
}

const mapProps = ({ main }) => main

export default connect(mapProps, null)(withRouter(Main))
