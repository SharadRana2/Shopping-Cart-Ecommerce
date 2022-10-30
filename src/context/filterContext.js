import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./filterReducer";
const Filter = createContext();

const FilterContext = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: "",
    category: [],
  });
  return (
    <Filter.Provider value={{ filterState, filterDispatch }}>
      {children}
    </Filter.Provider>
  );
};
export default FilterContext;
export const FilterState = () => {
  return useContext(Filter);
};
