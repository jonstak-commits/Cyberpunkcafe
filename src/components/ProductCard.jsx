import React from 'react';
export default function ProductCard({ product }){
return (
<div display:'flex', gap:12, padding:12, border:'1px solid #2a2a2a', borderradius:12, alignitems:'center' }}>
<div width:120, height:80, background:'#222', borderradius:8 }}>
<div flex:1 }}>
<div fontweight:700 }}>{product.name}</div>
<div color:'#aaa' }}>{product.description}</div>
<div>Калории: {product.cal} ккал • Цена: {product.price} ₽</div>
</div>
</div>
);
}
