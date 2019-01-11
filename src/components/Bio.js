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
      <main
        style={{
          marginBottom: rhythm(2.5),
          textAlign: 'center',
        }}
      >
        <section className="bio">
          <p>
            I make software, mostly for the web, and I'm available for contract
            work. Let's build some software together!
          </p>
          <p>
            Web sites and programming caught my interest in grade school, and
            I've been working professionally since 2004. I love building
            software that makes peoples' lives better and easier.
          </p>
        </section>
        <section className="what-can-i-do">
          <h2>What I Can Do</h2>
          <p>
            JavaScript and C# are my bread-and-butter, on the server-side. I'm
            quite comfortable on the client-side too! HTML, CSS, and JavaScript
            have been my life-blood, through many frameworks and paradigm
            shifts. I have experience with many technologies, wearing many hats.
            Learning quickly is among my most useful skills.
          </p>
          <ul className="what-can-i-do-list">
            <li>Web APIs in front of your database? You got it.</li>
            <li>React web sites? No problem. </li>
            <li>
              Polyglot microservices in Node, Golang, and .Net Core? Been there,
              done that.
            </li>
            <li>Legacy ASP.Net apps that need some love? My pleasure.</li>
          </ul>
        </section>
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
        </section>
      </main>
    )
  }
}

export default Bio
