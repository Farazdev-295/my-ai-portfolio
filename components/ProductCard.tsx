'use client';
import React, { useState } from 'react';
import { Product } from '@/.next/types/types/index';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <img
        src={product.thumbnail} 
        alt={product.title} 
        width="100%" 
        style={{ height: '150px', objectFit: 'cover', borderRadius: '4px' }} 
      />
      <h3>{product.title}</h3>
      <p>Price: \${product.price}</p>
      
      {/* Interactive state button */}
      <button 
        onClick={() => setIsLiked(!isLiked)} 
        style={{ marginRight: '10px', padding: '6px 12px' }}
      >
        {isLiked ? '❤️ Liked' : '🤍 Like'}
      </button>

      {/* Link to dynamic route */}
      <Link 
        href={`/products/${product.id}`} 
        style={{ color: 'blue', textDecoration: 'underline' }}
      >
        View Details
      </Link>
    </div>
  );
}