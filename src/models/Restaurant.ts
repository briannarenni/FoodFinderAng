export class Restaurant {
    RestName: string;
    Cuisine: string;
    City: string;
    Score: number;
    Grade: string;

    constructor (name: string, cuisine: string, city: string, score: number, grade: string) {
        this.RestName = name;
        this.Cuisine = cuisine;
        this.City = city;
        this.Score = score;
        this.Grade = grade;
    }
}
