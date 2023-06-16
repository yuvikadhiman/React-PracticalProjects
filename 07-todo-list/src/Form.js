import { useState } from "react";
// import { toast } from 'react-toastify';

const Form = ({ addItems }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      //   toast.error('please provide value');
      return;
    }
    addItems(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>TODO LIST</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;

// Here's an example of how to use localStorage.getItem() to retrieve the value of the 'username' key we set earlier:

// ```js
// const username = localStorage.getItem('username');
// console.log(username); // outputs 'John'
// ```

// Note that localStorage can only store strings, so if you need to store objects or other data types, you'll need to convert them to strings first. One way to do this is to use JSON.stringify() to convert your data to a JSON string before storing it in localStorage, and then use JSON.parse() to convert it back to an object when you retrieve it.

// For example:

// ```js
// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com',
// };

// localStorage.setItem('user', JSON.stringify(user));

// const storedUser = JSON.parse(localStorage.getItem('user'));

// console.log(storedUser.name); // outputs 'John'
// console.log(storedUser.age); // outputs 30
// console.log(storedUser.email); // outputs 'john@example.com'
// ```

// In summary, localStorage allows you to store key-value pairs locally in the user's browser using localStorage.setItem() and retrieve those values using localStorage.getItem(). However, note that localStorage can only store strings, so you'll need to convert other data types to strings before storing them.
