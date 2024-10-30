import { useState } from "react";

function From() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if(!description) return;
  
      const newItems = { description, quantity , packed  :false, id : Date.now() }
      console.log(newItems)
  
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


export default From