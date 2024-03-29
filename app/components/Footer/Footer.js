import React, { memo } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { RiNewspaperLine } from 'react-icons/Ri'

function Footer() {
  return (
    <div className='flex center container5 align-end'>
      <span className='marginRight'> Dev. Daniel Maietta </span>
      <a>
        <RiNewspaperLine
          role='portfolio'
          size='1.5em'
          className='marginRight'
          onClick={() => window.open('https://danimaietta.github.io/portfolio/')}
        />
      </a>
      <a>
        <AiFillGithub
          role='git'
          size='1.5em'
          className='marginRight'
          onClick={() => window.open('https://github.com/danimaietta')}
        />
      </a>
      <a>
        <AiFillLinkedin
          role='linkedin'
          size='1.5em'
          className='marginRight'
          onClick={() =>
            window.open('https://www.linkedin.com/in/dani-maietta-4680a51b1/')
          }
        />
      </a>
    </div>
  )
}

export default memo(Footer)
