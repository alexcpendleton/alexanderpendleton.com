import React from 'react'

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
          marginBottom: rhythm(2.2),
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
            have been my lifeblood, through many frameworks and paradigm shifts.
            I have experience with many technologies, wearing many hats.
            Learning quickly is among my most useful skills.
          </p>
          <ul className="what-can-i-do-list" style={{ listStyle: 'none' }}>
            <li>
              <strong className="q">Web APIs in front of your database?</strong>
              <div className="a">
                You got it! REST-ful, GraphQL, GRPC, even SOAP.
              </div>
            </li>
            <li>
              <strong className="q">
                An admin web site in React for your employees?
              </strong>
              <div className="a">No problem.</div>
            </li>
            <li>
              <strong className="q">
                Polyglot microservices in Node, Golang, and .Net Core?
              </strong>
              <div className="a">Been there, done that.</div>
            </li>
            <li>
              <strong className="q">
                Legacy ASP.Net apps that need some love?
              </strong>
              <div className="a">My pleasure.</div>
            </li>
          </ul>
        </section>
        <section className="social">
          <h3>Let's Get in Touch</h3>
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
