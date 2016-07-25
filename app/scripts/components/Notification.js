import React, { PropTypes } from 'react'

const Notification = ({
  message,
  data,
}) => {
  const notification = message.replace('[data]', data)

  return (
    <div className="moody-notification">
      <p>{notification}</p>
    </div>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  data: PropTypes.string,
}

export default Notification
