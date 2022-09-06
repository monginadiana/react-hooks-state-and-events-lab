import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



export default function App() {
 
  const [isDark, setIsDark] = useState(false)

  function handleClick(){
    setIsDark((isDark) => !isDark)
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = light ? "App dark" : "App light"

  return (
    <div className={isDark? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isDark? "Dark" : "Light"} Mode</button>
        
      </header>
      <ShoppingList items={itemData} />
    </div>
  );

}