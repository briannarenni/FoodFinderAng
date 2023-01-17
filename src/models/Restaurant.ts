export class Restaurant {
    restId: number;
    restName: string;
    cuisine: string;
    city: string;
    score: number;
    grade: string;

    constructor (id: number, name: string, cuisine: string, city: string, score: number, grade: string) {
        this.restId = id;
        this.restName = name;
        this.cuisine = cuisine;
        this.city = city;
        this.score = score;
        this.grade = grade;
    }
}
