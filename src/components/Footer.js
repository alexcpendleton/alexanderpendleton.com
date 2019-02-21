import React from 'react'

import { rhythm } from '../utils/typography'
import { SocialIcon } from 'react-social-icons'

class Footer extends React.Component {
  render() {
    const socialStyles = {
      boxShadow: 'none',
      textDecoration: 'none',
      margin: `0px ${rhythm(0.1)}`,
    }
    return (
      <footer>
        <section className="social">
          <SocialIcon
            url="mailto:hello@alexanderpendleton.com"
            style={socialStyles}
          />
          <SocialIcon
            url="https://github.com/alexcpendleton/"
            style={socialStyles}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/alexander-pendleton/"
            style={socialStyles}
          />
          <SocialIcon
            url="https://github.com/https://twitter.com/alexcpendleton/"
            style={socialStyles}
          />
        </section>
      </footer>
    )
  }
}

export default Footer
