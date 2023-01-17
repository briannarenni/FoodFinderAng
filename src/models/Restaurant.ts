export class Restaurant {
    RestName: string;
    Cuisine: string;
    City: string;
    Grade: string;
    Rating: number;

    constructor(name: string, cuisine: string, city: string, grade: string, rating: number) {
        this.RestName = name;
        this.Cuisine = cuisine;
        this.City = city;
        this.Grade = grade;
        this.Rating = rating;
    }
}
