import React from 'react'

export default class extends React.Component {
  render() {
    const fieldStyle = {
      padding: '16px',
    }

    return (
      <div>
        <input
          className="moody-hero__searchbox"
          style={fieldStyle}
          type="search"
          placeholder="I'm feeling..."
        />
      </div>
    )
  }
}
