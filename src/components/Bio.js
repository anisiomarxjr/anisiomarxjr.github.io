import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >        
        <p>
          Intersection between <strong>math</strong>, <strong>web</strong> and <strong>computer science</strong>.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
