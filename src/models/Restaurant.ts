export class Restaurant {
    restName: string;
    cuisine: string;
    city: string;
    score: number;
    grade: string;

    constructor (name: string, cuisine: string, city: string, score: number, grade: string) {
        this.restName = name;
        this.cuisine = cuisine;
        this.city = city;
        this.score = score;
        this.grade = grade;
    }
}
