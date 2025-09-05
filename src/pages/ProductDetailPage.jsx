import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
export default function ProductDetailPage(){
const { id } = useParams();
const product = products.find(p => p.id === Number(id)) ?? products[0];
return (
<section>
<div display:'flex', gap:20 }}>
<div width:400, height:300, background:'#222', borderradius:12 }}>
<div flex:1 }}>
<h2>{product.name}</h2>
<p>{product.description}</p>
<p>Состав: {product.ingredients}</p>
<p>Калории: {product.cal} ккал</p>
<p>Цена: {product.price} ₽</p>
<button>Добавить в корзину</button>
</div>
</div>
</section>
);
}
