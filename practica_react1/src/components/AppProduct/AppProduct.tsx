import { useState } from "react";
import { FromProduct } from "./FromProduct/FromProduct";
import { Header } from "./Header/Header";
import { ListProducts } from "./ListProducts/ListProducts";

interface ItemProduct {
   precio: number;
   imagen: string;
   nombre: string;
}

export const AppProduct = () => {
   const [products, setProducts] = useState<ItemProduct[]>([]);

   console.log(products);

   const handleAddProduct = (newItem: ItemProduct) => {
      setProducts((prev) => [...prev, newItem]);
   };
   return (
      <div>
         <Header />
         <h2 className="text-center">Formulario</h2>
         <FromProduct handleAddProduct={handleAddProduct} />
         {products.length > 0 ? (
            <ListProducts arrItems={products} />
         ) : (
            <h3 className="text-center">No hay Productos</h3>
         )}
      </div>
   );
};
