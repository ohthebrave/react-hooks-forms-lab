import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function searchChange(event) {
    setSearch(event.target.value)
   }
  
   function addElement(element) {
    setItems([...items, element]);
    // console.log(addItems)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === '') return true;

    return item.category === selectedCategory || item.name.toLowerCase() === search.toLowerCase();
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addElement} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={searchChange} items={items} search={search} setSearch={setSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
