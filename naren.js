
// function showMessage(){
//     alert('Hello World');
//     console.log('Hello Developer World');
// };

// //showMessage();
// //document.addEventListener('DOMContentLoaded', showMessage);
function calculateSum() {
    const x = parseInt(document.getElementById('field1').value);
    const y = parseInt(document.getElementById('field2').value);
    const result = document.getElementById('result');
    console.log(x + y);
    result.value = x + y;

};

// // const userData1 = ['John Doe', 'john.doe@example.com', 'secret'];

// // const john = createUser( ...userData1 
// //     );

// // const sum = function(x, y){
// //     return x + y;
// // }
// // const sum = (x,y) =>  { return x + y; }

// function findDuplicates() {
//     const numbers = [2, 4, 5, 2, 5, 8, 5, 4711];
//     for(let i=0; i<numbers.length; i++) {
//     const numberAtI = numbers[i];
//     for(let j=0; j<numbers.length; j++) {
//     const numberAtJ = numbers[j];
//     if(numberAtI === numberAtJ) {
//     console.log(`Found duplicate: ${numberAtI}`);
//     }
//     }
//     }
// }



// const item = {
// name: 'JavaScript',
// price: 60,
// author: 'Philip',
// printDescription: function(){
//     console.log(`${this.author}: ${this.name}`);
// }
// };

// for( let property in item) {
//     console.log(`Name: ${property}`);
//     console.log(`Value: ${item.property}`);
// }

// document.addEventListener('DOMContentLoaded', findDuplicates);

// let request = new XMLHttpRequest();
// request.onload = () => {
// if(request.status === 200) {
// let json;
// if (request.responseType === 'json') {
// json = request.response;
// } else {
// json = JSON.parse(request.responseText);
// }
// // here further processing of the JSON data
// console.log(json);
// }
// };
// request.open('GET', 'data/content.json', true);
// request.responseType = 'json';
// request.setRequestHeader('Accept', 'application/json');
// request.send();

const artists = [
    {
        name: 'Kyuss',
        albums: [
            {
                title: 'Wretch',
                year: 1991
            },
            {
                title: 'Blues for the Red Sun',
                year: 1992
            },
            {
                title: 'Welcome to Sky Valley',
                year: 1994
            },
            {
                title: '...And the Circus Leaves Town',
                year: 1995
            }
        ]
    },
    {
        name: 'Ben Harper',
        albums: [
            {
                title: 'The Will to Live',
                year: 1997
            },
            {
                title: 'Burn to Shine',
                year: 1999
            },
            {
                title: 'Live from Mars',
                year: 2001
            },
            {
                title: 'Diamonds on the Inside',
                year: 2003
            }
        ]
    }
];

//   artists.forEach( 
//     { 
//         workarea,
//         tabix,
//         artists
//     } => {
//         console.log(workarea.name);
//     }
//   );


//   artists.forEach(
//     ( // function called for each element
//     workarea, // (1) current element
//     tabix, // (2) Index of the current element
//     artists // (3) the entire array
//     ) => {
//     console.log(workarea.name);
//     }
//     );

//     const artistNames = artists.map( 
//         ( 
//             artist,
//             index,
//             artists
//         ) => {
//            console.log(index);
//            console.log(artist.albums[0].title);
//            console.log(artist.name);
//            return artist.name;
//         }

//     );

// //     console.log(artistNames);
// const albums1 = [
//     {
//     title: 'Push the Sky Away',
//     artist: 'Nick Cave',
//     year: 1999
//     },
//     {
//     title: 'No more shall we part',
//     artist: 'Nick Cave',
//     year: 1998
//     } ]

// const albumsBefore2000 = albums1.filter(

//         ( 
//             album,
//             index,
//             albums
//         ) => {
//             return album.year < 2000
//         }

// );

// console.log(albumsBefore2000);

// const totalAlbumCount = artists.reduce( 
//     function(
//         result,
//         artist,
//         indext,
//         artists

//     ) { 
//         const albumCount = artist.albums.length;
//         return result = result + albumCount 
//     },0
// );
// console.log(totalAlbumCount);

// function after2000(album) {
//     return album.year > 2000;
// }
// function hasAlbumAfter2000(artist){
//     return artist.albums.filter(after2000).length > 0;
// }
// function printName(name) {
//     console.log(name);
// }
// function getArtistName(artist) {
//     return artist.name;
// }
// artists
// .filter(hasAlbumAfter2000)
// .map(getArtistName)
// .forEach(printName)

// function asyncFunction(callbackFunction) {
//     let result;
//     setTimeout(() => {
//         result = Math.floor(Math.random() * 100) + 1;
//         if (result < 50) {
//             callbackFunction(new Error(`Random number ${result} less than 50.`),
//                 undefined);
//             // throw new Error(`Random number ${result} less than 50.`);
//         } else {
//             callbackFunction(null, result);
//         }
//     }, 2000);
//     //console.log('Prior to callback');
//     //callbackFunction();
//     //console.log('After the callback');
//     return result;
// }

// try {
//     function callbackFunction() {
//         console.log('Calling callback');
//     }
// } catch (error) {
//     console.error(`Error: ${error}`);
// }

// // const result = asyncFunction(callbackFunction);
// asyncFunction((error, result) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(result);
//     }
// }
// );
// console.log(result);

// function asyncFunctionP() {
//     const promise = new promise(
//         function (resolve, reject) {
//             setTimeout(() => {
//                 const result = Math.floor(Math.random() * 100) + 1;
//                 if (result >= 50) { resolve(result); }
//                 else { reject(`random number ${result} less than 50`) }
//             }, 2000);
//         }
//     )

//     return promise;
// };


// asyncFunctionP().then((result) => {  debugger; return resutlt * 2 })
//      .then((result) => { debugger; console.log(result)} )
//     .catch((error) => { console.error(error); })
//     .finally(() => { console.log('Always executed') });



function randomNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
      const x = Math.floor(Math.random() * 100) + 1;
	  resolve(x);
	}, 2000);
  });
}
  
async function addTwoRandomNumbers() {
  console.log('Berechnung erste Zufallszahl');
  const a = await randomNumber();
  console.log(`Ergebnis: ${a}`);
  console.log('Berechnung zweite Zufallszahl');
  const b = await randomNumber();
  console.log(`Ergebnis: ${b}`);
  return a + b;
}
  
addTwoRandomNumbers()
  .then(( result) => { console.log(`Summe: ${result}`)});
  