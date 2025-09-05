import React from 'react';
export default function CatalogFilters({ onChange }){
return (
<div display:'flex', gap:12, alignitems:'center', padding:8 }}>
<input placeholder="Поиск…" onchange="{e" /> onChange({ query:e.target.value })} />
<select onchange="{e"> onChange({ sort:e.target.value })}>
<option value="pop">Популярность</option>
<option value="price-asc">Цена: дешевые</option>
<option value="cal-asc">Калории: низкие</option>
</select>
<span>Фильтры:</span>
<button>Калории</button>
<button>Вкус</button>
</div>
);
}
