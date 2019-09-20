import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h6
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h6>
      )
    } else {
      header = (
        <h2
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <div>
            <a style={{ color: '#bb1542' }} href="https://afrijaldzuhri.wordpress.com/now">Now</a> • <a style={{ color: '#bb1542' }} href="https://github.com/afrijaldz">Github</a> • <a style={{ color: '#bb1542' }} href="/rss.xml">RSS</a>
          </div>
          <div>
            &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
