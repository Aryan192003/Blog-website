import React from 'react'

function Logo({width='40px'}) {
  return (
    <div className='w-10' >
      <img src="https://api.logo.com/api/v2/images?logo=logo_a6f0e157-8307-43ab-845b-d37e15944dce&u=2023-10-06T18%3A39%3A10.218Z&margins=0&format=webp&quality=30&width=200&height=200&background=transparent&fit=contain" alt="Logo" />
    </div>
  )
}

export default Logo
