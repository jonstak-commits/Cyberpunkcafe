// анимационный фон киберпанк
import React from 'react';
export default function Hero(){
return (
<section height: 420, borderradius: 16, background: 'radial-gradient(circle at 60% 40%, rgba(0,255,214,.15), transparent 40%), linear-gradient(135deg, #0b1020 0%, #1a1a2e 60%, #0b0f1a 100%)', display:'flex', alignitems:'center', padding:40, overflow:'hidden' }}>
<div width:'50%' }}>
<h1 fontsize: 48, lineheight:1.05, margin:0 }}>Футуристическая кухня с ИИ</h1>
<p>Первый в мире сайт с блюдами, созданными при помощи искусственного интеллекта</p>
</div>
<div width:'50%', height:'100%', position:'relative' }}>
{/* простые неоновые эффекты */}
<div 0 position:'absolute', width:200, height:200, borderradius:100, left:40, top:40, boxshadow:'0 60px #2effd1', filter:'blur(1px)' }}>
<div 0 position:'absolute', width:260, height:260, borderradius:130, right:60, bottom:40, boxshadow:'0 90px #7c3aed', filter:'blur(0.5px)' }}>
</div>
</section>
);
}
