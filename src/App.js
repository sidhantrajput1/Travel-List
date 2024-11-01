import { useState } from "react";
// import Logo from './components/Logo.js';
// import From from "./components/From.js";
// import PackingList from './components/PackingList.js';

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 10, packed: false },
// ];

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
    console.log(item);
  };

  const handleDelteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <From onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDelteItem}/>
      <Stats />
    </div>
  );
};

function Logo() {
  return (
    <div>
      <h1>🌴 Far away 💼</h1>
    </div>
  );
}

function From({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItems)

    onAddItems(newItems);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ? </h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
          // console.log(e.target.value)
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option> */}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          // console.log(e.target.value)
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items , onDeleteItems}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} onDeleteItems={onDeleteItems} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item , onDeleteItems}) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have x items on your list, and you already packed x (x%)</em>
    </footer>
  );
}

export default App;
