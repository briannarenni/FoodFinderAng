export class MenuItem {
    ItemName: string;
    ItemPrice: number;
    ItemGroup: string;

    constructor(name: string, price: number, group: string) {
        this.ItemName = name;
        this.ItemPrice = price;
        this.ItemGroup = group;
    }

    toString() {
        return 'MenuItem';
    }
}
