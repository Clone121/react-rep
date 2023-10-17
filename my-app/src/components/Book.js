import React from 'react'

function Book(props) {
    const book = props.book
  return (
    <div>
        <h5>{book.title}</h5>
        <p>{book.author}</p>
        <h5>{book.pages}</h5>
    </div>
                            
  )
}

export default Book