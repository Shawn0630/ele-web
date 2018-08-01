interface ShoppingCartItem {
    name: string;
    price: number;
    num: number;
}

const mock: ShoppingCartItem[] = [
    {
        name: "Test 1",
        price: 25.6,
        num: 1
    },
    {
        name: "Test 2",
        price: 30,
        num: 2
    }
];

export { ShoppingCartItem, mock};
