import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTaks, addTaks, deleteTaks } from "../store/actions/taksAction";

export default (props) => {
  const taks = useSelector((state) => state.taksReducer.taks);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [taksDisplay, setTaksDisplay] = useState([]);
  const [category, setCategory] = useState("Backend");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    dispatch(getTaks());
  }, [dispatch]);

  useEffect(() => {
    setTaksDisplay(taks);
  }, [taks]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTaks = {
      title,
      category,
    };
    if (title === "") {
      return alert("title gak boleh kosong");
    }
    dispatch(addTaks(newTaks));
    setTitle("");
  };

  const onDeleteTaks = (taksId) => {
    dispatch(deleteTaks(taksId));
  };

  const onFilter = async (e) => {
    setCategoryFilter(e.target.value);
    if (e.target.value === "All") {
      setTaksDisplay(taks);
    } else {
      const newPokemons = taks.filter((item) => {
        return item.category === e.target.value;
      });
      setTaksDisplay(newPokemons);
    }
  };

  return (
    <div>
      <h2>Taks Page</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Backend">Backend</option>
          <option value="Frontend">Fronend</option>
          <option value="Mobile">Mobile</option>
        </select>
        <button type="submit">Add Taks</button>
      </form>
      <br />
      <select value={categoryFilter} onChange={(e) => onFilter(e)}>
        <option value="All">All</option>
        <option value="Backend">Backend</option>
        <option value="Frontend">Fronend</option>
        <option value="Mobile">Mobile</option>
      </select>
      {taksDisplay.map((pokemon, i) => {
        return (
          <div key={i}>
            {" "}
            {pokemon.id} - {pokemon.title} - {pokemon.category}
            <button onClick={() => onDeleteTaks(pokemon.id)}>Hapus</button>
          </div>
        );
      })}
    </div>
  );
};
