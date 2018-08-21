import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'
import { SocialIcon } from 'react-social-icons'

class Bio extends React.Component {
  render() {
    const socialStyles = {
      boxShadow: 'none',
      textDecoration: 'none',
      margin: `0px ${rhythm(0.1)}`,
    }
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
          textAlign: 'center',
        }}
      >
        <p>
          A freelance, full-stack software developer with a focus in web
          development. I've been creating business value with software since
          2004.
        </p>
        <p>
          I have a long history with JavaScript, HTML, CSS, Node.js, and C#. The
          tech is not as important as the problems it solves: I am practical,
          smart, and I<strong> get things done</strong>.
        </p>
        <p>
          I'd love to help you build your internal business tools or website!
          Whether you're looking for a new React and GraphQL site, API
          integrations with your existing applications, or even maintenance on
          your existing systems, I can be of service.
        </p>
        <p>
          <a href="mailto:hello@alexanderpendleton.com">
            hello@alexanderpendleton.com
          </a>
        </p>
        <section className="social">
          <SocialIcon
            url="https://github.com/alexcpendleton/"
            style={socialStyles}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/alexander-pendleton/"
            style={socialStyles}
          />
        </section>
      </div>
    )
  }
}

export default Bio
