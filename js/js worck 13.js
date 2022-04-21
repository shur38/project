const numberOfFilm = +prompt('сколько фильмов вы посмотрели ?',' ');
const personalMovieDB ={
    cont: numberOfFilm,
    movies: { },

    actors: { },
    genres: [],
    private: false,

};
const a =prompt( 'один из последних просмотреных фильмов?',''),
     b = prompt ('на сколько оцените его?',''),
    c = prompt ('один из последних просмотреных фильмов?',''),
    d = prompt ('на сколько оцените его?','');
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;
    console.log(personalMovieDB);
