import React, {useState} from "react";


function Item({ name, category }) {
   const [inCart, setIsCart] = useState(false)

   function handleClick(){
    setIsCart((inCart) => !inCart)
   }
  return (
    <li className={inCart ? 'in-cart':'' }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}>{inCart? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
