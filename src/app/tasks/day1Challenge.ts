
const inventory = [
    { id: 1, name: "Laptop", category: "Electronics", stock: 12, price: 999.99 },
    { id: 2, name: "Coffee Mug", category: "Kitchen", stock: 0, price: 14.95 },
    { id: 3, name: "Wireless Mouse", category: "Electronics", stock: 5, price: 49.99 }
];

export interface Inventory {
    id: number,
    name: string,
    category: string,
    stock: number,
    price: number
}

export interface processInventory {
    productName: string,
    isAvailable: boolean,
    totalValue: number
}


function processInventory(items: Array<Inventory>, minStock: number): Array<processInventory> {
    const filtered = items.filter(item => item.stock > minStock);

    const formatted = filtered.map(item => {
        return {
            productName: item.name.toUpperCase(),
            isAvailable: item.stock > 0,
            totalValue: item.stock * item.price
        };
    });

    return formatted;
}

const result = processInventory(inventory, 2);
console.log(result);