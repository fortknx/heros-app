import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroByName } from '../helpers/getHeroByName';
import HeroCard from '../heros/HeroCard';
import { useForm } from '../hooks/useForm'
import queryString from 'query-string'

const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        // searchText: ''
        searchText: q
    })

    const { searchText } = formValues;

    const herosFilter = useMemo(() => getHeroByName(q), [q]); //getHeroByName(q)

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Pantalla de busqueda</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Formulario</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='Buscar un heroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange} />

                        <button className='btn btn-outline-danger mt-2' type='submit'> Buscar </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4> Resultados</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className='alert alert-info'>Buscar un heroe</div>
                            : (herosFilter.length === 0) && <div className='alert alert-danger'> No hay resultados con la busqueda: "{q}" </div>
                    }
                    {
                        herosFilter.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SearchScreen