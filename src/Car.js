import React from 'react'
import PropTypes from 'prop-types'

const Car = (props) => {
  return (
    <div className="Car">
      <p>car</p>
    </div>
  )
}

Car.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object)
}

export default Car