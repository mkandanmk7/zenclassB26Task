
// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)


class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if (this.rating === "PG") {
            getPG(this);
        }

    }
}
let ans = [];
function getPG(value) {
    ans.push(value);
}
let movieObj = new Movie("avengers", "marvelsStudio", "PG")
let movie2 = new Movie("captionAmerica", "marvels");
let movie3 = new Movie("BatMan", "DC", "PG13");
let movie4 = new Movie("Casino Royals", "Eon Productions", "PG13")
console.log(ans); // [Movie, Movie]

console.log(movie4); // {title: "Casino Royals", studio: "Eon Productions", rating: "PG13"}
