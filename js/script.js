"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
const persanalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   generes: [],
   privat: false,
};

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
/* let i = 0;
while (i < 2) {
   const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("На сколько оцените его?", "");

   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      persanalMovieDB.movies[a] = b;
      console.log("done");
   } else {
      console.log("error");
      i--;
   }
   i++;
}

do {
   const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("На сколько оцените его?", "");

   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      persanalMovieDB.movies[a] = b;
      console.log("done");
   } else {
      console.log("error");
      i--;
   }
   i++;
} while (i < 3); */

if (persanalMovieDB.count < 10) {
   console.log("Просмотрено довольно мало фильмов");
} else if (persanalMovieDB.count >= 10 && persanalMovieDB.count < 30) {
   console.log("Вы классический зритель");
} else if (persanalMovieDB.count >= 30) {
   console.log("Вы киноман");
} else {
   console.log("Произошла ошибка");
}

console.log(persanalMovieDB);
