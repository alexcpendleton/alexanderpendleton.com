import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import '../styles/global.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    header = (
      <header
        style={{
          fontFamily: 'Georgia, Cambria, serif',
          fontStyle: 'italic',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            ...scale(1.25),
            marginTop: 0,
          }}
        >
          Hello, I'm Alexander Pendleton!
        </h1>
      </header>
    )
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
