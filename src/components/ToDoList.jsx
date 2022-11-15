import { useState } from "react";

const ToDoList = () => {
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleChange = event => {
    setNewItem(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    if (newItem)
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

  const clear = () => {
    setListItems([]);
  };

  return (
    <section className="to-do__section">
      <form className="to-do__form">
        <input
          value={newItem}
          className="to-do__input"
          onChange={handleChange}
          type="text"
          required
        />
        <button className="to-do__addBtn" onClick={handleClick}>
          +
        </button>
      </form>

      <ul className="to-do__ul">
        {listItems.map((item, index) => {
          return (
            <li key={index} className="to-do__li">
              {item}
              <button
                className="to-do__deleteBtn"
                value={item}
                onClick={removeItem}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
      {listItems.length > 1 ? (
        <button className="clear-btn" onClick={clear}>
          CLEAR
        </button>
      ) : null}
    </section>
  );
};

export default ToDoList;
