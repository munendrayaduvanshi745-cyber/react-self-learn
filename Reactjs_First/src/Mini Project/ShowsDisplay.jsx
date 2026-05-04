import React from 'react'
import shows from './ShowsData'
import Showscard from './ShowsCard'

const ShowsDisplay = () => {
  return (
    <>
        <div className='row_card'>
            {shows.map((shows, index) => (
                <Showscard key={index.id} user={shows} />
            ))}
        </div>
    </>
  )
}

export default ShowsDisplay