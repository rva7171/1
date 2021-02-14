"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
const persanalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   generes: [],
   privat: false,
};

const a = prompt("Один из последних просмотренных фильмов", ""),
   b = prompt("На сколько оцените его?", ""),
   c = prompt("Один из последних просмотренных фильмов", ""),
   d = prompt("На сколько оцените его?", "");

persanalMovieDB.movies[a] = b;
persanalMovieDB.movies[c] = d;

console.log(persanalMovieDB);
