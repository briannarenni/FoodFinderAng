// CUISINES: American, Chinese, Greek, Italian, Mexican, Thai
// CITIES: Atlanta, Chicago, Houston, Los Angeles, Miami, New Orleans,
// New York City, Orlando, Portland, Seattle, San Diego, San Francisco

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
