import React from 'react'
import HeroList from '../heros/HeroList'

const DcScreen = () => {
    return (
        <>
            <h1>DC Screen</h1>
            <hr />
            <HeroList publisher={'DC Comics'}/>
        </>
    )
}

export default DcScreen