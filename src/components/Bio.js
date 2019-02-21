import React from 'react'

import { rhythm } from '../utils/typography'

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
          <h1>Your employees need modern, fast, reliable software.</h1>
          <p>
            Whether you have a system in need of repair or want a brand-new
            platform from scratch, I'll help you get it done.
          </p>
          <h2>Hello! I'm Alexander Pendleton.</h2>
          <p>
            Over the past thirteen years I've been crafting quality software for
            businesses of all sizes. I'm comfortable in scrappy startups, or in
            navigating the waters of huge corporations.
          </p>
          <p>
            I have experienced first-hand how much time and money is wasted on
            software that slows things down. But, I've also felt the
            productivity gains when that screen no longer takes fifteen seconds
            to load (you know the one.) Or the relief of a new dashboard, one
            actually shows the right data in a single place, rather than having
            to stitch it together across a handful of spreadsheets. You should
            feel that too.{' '}
          </p>
          <p>
            Web apps are my specialty. My preferred stack is JavaScript-based,
            but I have a long history with ASP.Net, and an abundance of other
            technologies. I keep up to date, and roll with the punches.
          </p>
          <ul>
            <li>
              <span>
                A React.js administration site for your employees' day-to-day?
              </span>
              <span>Not a problem.</span>
            </li>
            <li>
              <span>Services in front of your database?</span>
              <span>You got it! REST-ful, GraphQL, GRPC, even SOAP.</span>
            </li>
            <li>
              <span>Legacy Web Forms that need some love?</span>
              <span>It's in good hands.</span>
            </li>
            <li>
              <span>
                Distributed polyglot microservices in Node, Golang, and .Net
                Core?
              </span>
              <span>It's in good hands.</span>
            </li>
          </ul>{' '}
          <div>
            I've worn a lot of hats, and am quite adaptable. Solving problems is
            what I do. Even if it's not on that list, I'm confident I can get to
            a solution.
          </div>
          <section>
            <p>
              Let's be in touch. I'm currently taking on remote freelance and
              contract work. Tell me a bit about your projects and your budget.
              You'll hear back from me soon whether or not we're a good fit.{' '}
              <a href="mailto:hello@alexanderpendleton.com">
                hello@alexanderpendleton.com
              </a>
            </p>
          </section>
          <section>
            <p>
              I also make programs and tools to scratch my own itches. Check
              them out{' '}
              <a href="https://github.com/alexcpendleton/">on Github</a>.
            </p>
          </section>
        </section>
      </main>
    )
  }
}

export default Bio
