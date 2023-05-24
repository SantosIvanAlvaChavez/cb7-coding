export const GET = async (endpoint) => {
    const res = await fetch(`https://dummyjson.com/${endpoint}`);
    const data = await res.json();

    return data;
}

const POST = async (endpoint) => {
    const res = await fetch(`https://dummyjson.com/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            userId: 1,
            products: [
                {
                    id: 1,
                    title: "Samsung x542",
                    quantity: 1,
                },
                {
                    id: 50,
                    title: "Iphone 70",
                    quantity: 2,
                },
            ]
        })
    });
    const data = await res.json();
    return data;
}

POST("carts/add")