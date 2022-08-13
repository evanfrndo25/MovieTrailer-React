import React from 'react'
import HeroSlider from '../components/heroslider/HeroSlider'
import {Link} from 'react-router-dom'
import { OutlineButton } from '../components/button/Button'
import MovieList from '../components/movielist/MovieList'
import { category, movieType, tvType } from '../assets/api/tmdbApi'

const Home = () => {
  return (
    <div>
        <HeroSlider />
        <div className='container'>
          
          {/* Trending movies */}
          <div className='section mb-3'>
              <div className='section-header mb-2'> 
                  <h2 className='title-movielist'>Trending Movies</h2>
                  <Link to="/movie">
                      <OutlineButton className="small">View More</OutlineButton>
                  </Link>
              </div>
              <MovieList category={category.movie} type={movieType.popular} />
          </div>

          {/* Top Rated movies */}
          <div className='section mb-3'>
              <div className='section-header mb-2'> 
                  <h2 className='title-movielist'>Top Rated Movies</h2>
                  <Link to="/movie">
                      <OutlineButton className="small">View More</OutlineButton>
                  </Link>
              </div>
              <MovieList category={category.movie} type={movieType.top_rated} />
          </div>

          {/* Trending TV */}
          <div className='section mb-3'>
              <div className='section-header mb-2'> 
                  <h2 className='title-movielist'>Trending Tv</h2>
                  <Link to="/movie">
                      <OutlineButton className="small">View More</OutlineButton>
                  </Link>
              </div>
              <MovieList category={category.movie} type={tvType.popular} />
          </div>

          {/* Toprated TV */}
          <div className='section mb-3'>
              <div className='section-header mb-2'> 
                  <h2 className='title-movielist'>Top Rated TV</h2>
                  <Link to="/movie">
                      <OutlineButton className="small">View More</OutlineButton>
                  </Link>
              </div>
              <MovieList category={category.movie} type={tvType.top_rated} />
          </div>


        </div>
    </div>
  )
}

export default Home
