import { useState } from "react";

const ToDoList = () => {
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [singleItem, setSingleItem] = useState("");
  const [viewItem, setViewItem] = useState(false);

  const handleChange = event => {
    setNewItem(event.target.value);
  };

  const addItem = event => {
    event.preventDefault();
    if (newItem)
      setListItems(items => {
        const newItems = [newItem, ...items];
        return newItems;
      });
    setNewItem("");
  };

  const removeItem = event => {
    setSingleItem("");
    setViewItem(false);
    const deleteItem = event.target.value;
    setListItems(currentList => {
      const newList = currentList.filter(item => item !== deleteItem);
      return newList;
    });
  };

  const clear = () => {
    setListItems([]);
    setSingleItem("");
    setViewItem(false);
  };

  const viewSingleItem = event => {
    setViewItem(true);
    const item = event.target.textContent;
    setSingleItem(item);
  };

  const closeSingleItem = () => {
    setViewItem(false);
    setSingleItem("");
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
        <button className="to-do__addBtn" onClick={addItem}>
          +
        </button>
      </form>

      <ul className="to-do__ul">
        {listItems.map((item, index) => {
          return (
            <li key={index} className="to-do__li">
              <p onClick={viewSingleItem}>{item}</p>
              <div className="deleteBtn--div">
                <button
                  className="to-do__deleteBtn"
                  value={item}
                  onClick={removeItem}
                >
                  x
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {viewItem ? (
        <div className="singleItem--div">
          <div className="singleItemBG">
            <p>{singleItem}</p>
            <button className="closeBtn" onClick={closeSingleItem}>
              Close
            </button>
          </div>
        </div>
      ) : null}
      {listItems.length > 1 && !singleItem ? (
        <button className="clear-btn" onClick={clear}>
          CLEAR
        </button>
      ) : null}
    </section>
  );
};

export default ToDoList;
