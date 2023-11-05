"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
const Collection = {
  albums: [
    {
      title: "Una Mattina",
      artist: "Ludovico Einaudi",
      year: 2004
    },
    {
      title: "Lilys Lullaby",
      artist: "RIOPY",
      year: 2010
    },
    {
      title: "The Piano",
      artist: "Chad Lawson",
      year: 2011
    },
  ],
  [Symbol.iterator] (){
    let i = 0;
    const array = this.albums;
    return {       
        next() {
            return i < array.length ? {done: false, value: array[i++]} : {done: true};
        }
    }
  },
  consoleAlbums(){
    const arr = this.albums;
    for (const iter of arr){
      console.log(`"${iter.title}" - ${iter.artist} (${iter.year})`);
      
    }
  }
}

Collection.consoleAlbums();