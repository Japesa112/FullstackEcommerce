import { create } from 'zustand'

export const useCart =   create((set) => ({

    items: [],

    addToCart: (product: any) => set((state: any) => ({ items: [...state.items, {product, quantity: 1}] })),
    //removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
    resetCart: () => set({ items: [] }),

}))

