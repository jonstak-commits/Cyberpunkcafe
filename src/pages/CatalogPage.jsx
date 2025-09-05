import React from 'react';
import CatalogFilters from '../components/CatalogFilters';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
export default function CatalogPage(){
return (
<section>
<h1>Каталог продукции</h1>
<catalogfilters onchange="{()"> {}} />
<div display:'flex', flexdirection:'column', gap:12 }}>
{products.map(p => <productcard key="{p.id}" product="{p}">)}
</div>
</section>
);
}
