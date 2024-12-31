import { Product } from "@/types/types";
import {create} from "zustand"


interface CartItem {
quantity: number;
price: number;
title: string;
id: number;
image: string;
}


interface CartState {
    items: CartItem[];
    addToCart: (product: Product) => void
}

const useCartStore = create<CartState>((set,get)=> ({
items: [
    {
        id: 1,
        title: "Product 1",
        price: 19.99,
        quantity: 2,
        image: "/images/red.jpeg",
      },
      {
        id: 2,
        title: "Product 2",
        price: 29.99,
        quantity: 1,
        image: "/images/gray.jpeg",
      },
      {
        id: 3,
        title: "Product 3",
        price: 39.99,
        quantity: 3,
        image: "/images/black.jpeg",
      },
],
addToCart: (product) => set({items: [...get().items,{
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: 1,
    image: product.images[0],
  
}]})
})) 


export default useCartStore;
