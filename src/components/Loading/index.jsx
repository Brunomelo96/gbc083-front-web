import React from 'react'
import PropTypes from 'prop-types'
import CenterLoading from './styled'

const Loading = (props) => {
  const {
    isLoading,
    width,
    height,
  } = props

  return (
    isLoading
      ? (<CenterLoading width={width} height={height} />)
      : null
  )
}

Loading.defaultProps = {
  width: '100%',
  height: '100%',
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Loading
