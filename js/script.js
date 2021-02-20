"use strict";

let numberOfFilms;

function start() {
   while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
   ) {
      numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
   }
}

start();

const persanalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

function remeberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов", ""),
         b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
         persanalMovieDB.movies[a] = b;
         console.log("done");
      } else {
         console.log("error");
         i--;
      }
   }
}

remeberMyFilms();

function detectPersonalLevel() {
   if (persanalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (persanalMovieDB.count >= 10 && persanalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (persanalMovieDB.count >= 30) {
      console.log("Вы киноман");
   } else {
      console.log("Произошла ошибка");
   }
}

detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(persanalMovieDB);
   }
}

showMyDB(persanalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      persanalMovieDB.genres[i - 1] = prompt(
         `Ваш любимый жанр под номнером ${i}`
      );
   }
}

writeYourGenres();
