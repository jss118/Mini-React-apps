import { useState } from "react";

const ToDoList = () => {
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleChange = event => {
    setNewItem(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    setListItems(items => {
      const newItems = [newItem, ...items];
      return newItems;
    });
    setNewItem("");
  };

  const removeItem = event => {
    const deleteItem = event.target.value;
    setListItems(currentList => {
      const newList = currentList.filter(item => item !== deleteItem);
      return newList;
    });
  };

  return (
    <section>
      <input onChange={handleChange} type="text" />
      <button onClick={handleClick}>Add to list</button>
      <ul>
        {listItems.map(item => {
          return (
            <li>
              {item}
              <button value={item} onClick={removeItem}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ToDoList;
