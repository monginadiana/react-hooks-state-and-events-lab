import React, {useState}from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, SetIsSelectedCategory] = useState('All')

  function filtered(event){
    SetIsSelectedCategory( selectedCategory => event.target.value)
    console.log(selectedCategory)

  }

  const newItem = items.filter(item=>{
    if (selectedCategory ==='All') 
      return true
    return item.category === selectedCategory

    
  })
  console.log(newItem)
    
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filtered}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
