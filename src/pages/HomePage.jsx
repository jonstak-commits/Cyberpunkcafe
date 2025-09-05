import React from 'react';
import Hero from '../components/Hero';
import AIAdvisor from '../components/AIAdvisor';
import Card from '../components/Card';
import { products } from '../data/products';
export default function HomePage(){
const newReleases = products.slice(0,3);
const popular = products.slice(3,6);
return (
<div>
<hero>
<section>
<h2>Новинки</h2>
<div display:'flex', gap:16, overflowx:'auto' }}>
{newReleases.map(p => <card key="{p.id}" product="{p}">)}
</div>
</section>
<section>
<h2>Популярное</h2>
<div display:'flex', gap:16, overflowx:'auto' }}>
{popular.map(p => <card key="{p.id}" product="{p}">)}
</div>
</section>
<aiadvisor>
</div>
);
}
