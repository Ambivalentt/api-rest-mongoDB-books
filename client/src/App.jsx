import React from 'react'
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <main>
      <section className='grid grid-cols-2 gap-5 max-w-4xl mx-auto'>
        {data.map((book) => (
          <div key={book._id} className='flex justify-center flex-col' >
            <h1>{book.title}</h1>
            <p>{book.author}</p>
            <img src={book.imageUrl} alt="" />
          </div>
        ))}
      </section>
    </main>
  )
}

export default App
