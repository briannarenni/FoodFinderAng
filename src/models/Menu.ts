// CUISINES: American, Chinese, Greek, Italian, Mexican, Thai
export class Menu {
    itemId: number;
    cuisine: string;
    itemName: string;
    itemPrice: number;
    itemGroup: string;

    constructor(id: number, cuisine: string, name: string, price: number, group: string) {
        this.itemId = id;
        this.cuisine = cuisine;
        this.itemName = name;
        this.itemPrice = price;
        this.itemGroup = group;
    }
}
