import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroByPublisher'
import HeroCard from './HeroCard'

const HeroList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher(publisher)
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}{...hero} />
                ))
            }
        </div>
    )
}

export default HeroList