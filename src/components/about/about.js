import React from 'react'

export default ({ title = 'about', text = '' }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <figure><embed src="https://wakatime.com/share/@thititongumpun/58292e7a-64bc-45cb-a7d6-9f222ad346d9.svg"></embed></figure>
    </div>
  )
}
