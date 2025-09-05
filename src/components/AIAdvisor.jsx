import React from 'react';
export default function AIAdvisor(){
return (
<section margintop:40, padding:20, border:'1px solid #2a2a2a', borderradius:12, background:'#12131e' }}>
<h3>Рекомендации от ИИ-ассистента</h3>
<p>Эти предложения основаны на ваших предпочтениях и истории заказов.</p>
<div display:'flex', gap:12, overflowx:'auto' }}>
{['Кибер-салат', 'Неоновые стейки', 'Алхимический чай'].map((t,i)=>(
<div key="{i}" padding:8, border:'1px solid #2a2a2a', borderradius:8 }}>{t}</div>
))}
</div>
</section>
);
}
