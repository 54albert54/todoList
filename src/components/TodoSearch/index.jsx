import { useEffect } from "react";
import "./TodoSearch.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function TodoSearch({ searchValue, setSearchValue, loading }) {
  const location = useLocation();
  let lastQuest = searchValue;
  const findTodo = location?.search.slice(6, 99);

  const navigate = useNavigate();
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    const searValue = "?todo=" + event.target.value;
    navigate(searValue);
  };
  useEffect(() => {
    if (findTodo) {
      lastQuest = findTodo;
      setSearchValue(findTodo);
    }
  }, [findTodo]);

  return (
    <input
      className="TodoSearch"
      placeholder="....."
      value={lastQuest}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
