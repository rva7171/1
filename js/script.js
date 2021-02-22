"use strict";

const persanalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      while (
         persanalMovieDB.count == "" ||
         persanalMovieDB.count == null ||
         isNaN(persanalMovieDB.count)
      ) {
         persanalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
      }
   },
   remeberMyFilms: function () {
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
   },
   detectPersonalLevel: function () {
      if (persanalMovieDB.count < 10) {
         console.log("Просмотрено довольно мало фильмов");
      } else if (persanalMovieDB.count >= 10 && persanalMovieDB.count < 30) {
         console.log("Вы классический зритель");
      } else if (persanalMovieDB.count >= 30) {
         console.log("Вы киноман");
      } else {
         console.log("Произошла ошибка");
      }
   },
   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(persanalMovieDB);
      }
   },
   toggleVisibleMyDb: function () {
      if (persanalMovieDB.privat) {
         persanalMovieDB.privat = false;
      } else {
         persanalMovieDB.privat = true;
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i <= 3; i++) {
         let genre = prompt(`Ваш любимый жанр под номнером ${i}`);
         if (genre === "" || genre == null) {
            console.log("Вы ввели некорректные данные или не ввели вовсе");
            i--;
         } else {
            persanalMovieDB.genres[i - 1] = genre;
         }
      }
      // Альтернативный вариант из урока

      // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      // if (genres === '' || genres == null) {
      //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
      //     i--;
      // } else {
      //     personalMovieDB.genres = genres.split(', ');
      //     personalMovieDB.genres.sort();
      // }
      persanalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   },
};
