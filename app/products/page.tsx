import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/app/types/index';


async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products?limit=6');
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();
  return data.products;
}


async function ProductList() {
  const products = await getProducts();

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
      gap: '20px', 
      marginTop: '20px' 
    }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}


export default function ProductsPage() {
  return (
    <main style={{ padding: '24px' }}>
      <h1>Products Catalog (Server Component)</h1>
      
     
      <Suspense fallback={<div style={{ padding: '20px', color: '#666' }}>Loading products catalog...</div>}>
        <ProductList />
      </Suspense>
    </main>
  );
}