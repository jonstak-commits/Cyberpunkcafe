import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
return (
<nav display:'flex', justifycontent:'space-between', padding:'16px 32px', background:'#0f1020', borderbottom:'1px solid #222' }}>
<div fontweight:700, color:'#7ef2ff' }}>CyberFood</div>
<div display:'flex', gap:16 }}>
<link to="/" />Главная
<link to="/catalog" />Каталог
<link to="/profile" />Профиль
<link to="/checkout" />Корзина
</div>
</nav>
);
}
