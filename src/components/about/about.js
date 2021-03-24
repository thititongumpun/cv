import React from 'react'
import Linux from '../../assets/linux.png';

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <img src={Linux} alt="Linux Lover" />
    </div>
  )
}
