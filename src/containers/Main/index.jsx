import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import { Body, SideContainer, ApplicationContainer } from './styled'
import Articles from '../Articles'

const Main = (props) => (
  <>
    <Header />
    <Body>
      <SideContainer />
      <ApplicationContainer>
        <Articles />
      </ApplicationContainer>
    </Body>
  </>
)

Main.defaultProps = {
}

Main.propTypes = {
}

export default Main
