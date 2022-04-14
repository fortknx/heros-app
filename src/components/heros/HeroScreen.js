import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

const HeroScreen = () => {

  const navigate = useNavigate();
  const { heroId } = useParams();

  // const hero = getHeroById(heroId);
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to='/' />
  }

  const handleReturn = () => {
    navigate(-1)
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const imgPath = `/assets/img/${id}.jpg`

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={imgPath} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>
      <div className='col-8 animate__animated animate__fadeInLeft'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego:</b> {alter_ego}</li>
          <li className='list-group-item'> <b>Dueño:</b> {publisher}</li>
          <li className='list-group-item'> <b>Primera aparición:</b> {first_appearance}</li>
          <li className='list-group-item'> <b>Personaje:</b> {characters}</li>
        </ul>
        {/* <h5> Personaje</h5>
        <p>{characters}</p> */}
        <button className='btn btn-outline-success mt-2' onClick={handleReturn}>Regresar</button>
      </div>
    </div>
  )
}

export default HeroScreen