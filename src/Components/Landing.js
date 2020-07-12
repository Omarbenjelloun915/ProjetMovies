import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movie from "./Movie";
import Search from "./Search";

const FirstSearch = 'https://api.tvmaze.com/search/shows?q=breaking'

const Landing = () => {
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(FirstSearch)
            .then(response => response.json())
            .then(response => {
                setMovies(response);
            });
    }, []);

    const search = searchValue => {
        setErrorMessage(null);

        fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    setMovies(response);
                } else {
                    setErrorMessage("Désoléé! Le film que vous cherchez n'est pas trouvé.");
                }
            });
    };


    return (
        <div className="App" >
            <Header text="Movies" />
            <Search search={search} />
            <div className="movies">
                {errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                        movies.map((movie, index) => (
                            <Movie key={`${index}-${movie.name}`} movie={movie} />
                        ))
                    )}
            </div>

            <Footer text="Réalisé par Omar Benjelloun" secondText="mail: omar.benjelloun@etu.enseeiht.fr" />
        </div >



    );
};
export default Landing;