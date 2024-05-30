import React from 'react'
import Link from 'next/link'

const Notfound = () => {
  return (
    <div>
        <h1>The page could not be found</h1>
        <Link href="/">back to home page</Link>
    </div>

)
}

export default Notfound
