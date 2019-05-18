import React, { useState } from "react";

export default function TaskNew(props) {
  const [title, setTitle] = useState("");
  return (
    <article>
      <h2>New Task:</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.add({ title });
        }}
      >
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </article>
  );
}
