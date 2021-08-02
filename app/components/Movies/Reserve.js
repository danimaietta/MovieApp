import React, { useState, useEffect, useContext } from 'react'
import SearchBox from './SearchBox'
import Card from './Card'
import { getAllMovies } from '../../utils/api'
import { Link } from 'react-router-dom'
import LocaleContext from '../../context/LocaleContext'
//import seatsGenerator from '../../utils/seatsGenerator'

export default function Reserve() {
  const [allMovies, setAllMovies] = useState([])
  const [filterMovies, setFilterMovies] = useState([])
  const { theme } = useContext(LocaleContext)
  const classBtn = theme == 'light' ? 'light-button' : 'dark-button'

  useEffect(() => {
    async function getMovies() {
      const movies = await getAllMovies()
      const moviesWithIds = movies.map((m, i) => {
        return { ...m, idMovie: i + 1 }
      })
      setAllMovies(moviesWithIds)
      setFilterMovies(moviesWithIds)
      //const allSeats = seatsGenerator(movies.map(m => m.title))
    }
    getMovies()
  }, [])

  const handleChange = movies => setFilterMovies(movies)

  return (
    <div>
      <SearchBox movies={allMovies} handler={setFilterMovies} />
      {filterMovies.length === 0 ? (
        <div className=' container75 flex y-center center'>
          <h2 className={`${classBtn}`}>Not movies found</h2>
        </div>
      ) : (
        <ul className='reserve-container'>
          {filterMovies.map((movie, i) => {
            return (
              <Link
                key={i}
                to={{
                  pathname: `/seating/${movie.idMovie}${movie.title}`,
                  search: `?id=${movie.idMovie}&movie=${movie.title}`,
                  state: {
                    id: movie.idMovie,
                    movie
                  }
                }}
              >
                <Card poster={movie.poster_path} />
              </Link>
            )
          })}
        </ul>
      )}
    </div>
  )
}
