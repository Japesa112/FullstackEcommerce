
const API_URL = process.env.EXPO_PUBLIC_API_URL;
export async function listProducts() {

    
    const response = await fetch(`${API_URL}/products`);
    const products = await response.json();
    if (!response.ok) {
        throw new Error(products.message);
    }

    console.log(products);  
    return products;
}

export async function getProductById(id: any) {
    const response = await fetch(`${API_URL}/products/${id}`);
    const product = await response.json();
    if (!response.ok) {
        throw new Error(product.message);
    }

    return product;
}