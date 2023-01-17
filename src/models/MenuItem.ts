export class MenuItem {
    ItemName: string;
    ItemPrice: number;

    constructor(name: string, price: number) {
        this.ItemName = name;
        this.ItemPrice = price;
    }

    toString() {
        return 'MenuItem';
    }
}
