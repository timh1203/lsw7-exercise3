import React from 'react'
import PropTypes from 'prop-types'

const Car = (props) => {
  return (
    <div className="Car">
      <h1>{props.car.make}</h1>
      <h2>{props.car.model}</h2>
      <h3>{props.car.color}</h3>
    </div>
  )
}

Car.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object)
}

export default Car