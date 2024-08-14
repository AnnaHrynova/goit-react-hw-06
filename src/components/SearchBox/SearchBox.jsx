import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const searchName = useSelector(selectNameFilter);
    const searchInputId = useId();

return(
  <div className={css.inputWrap} >
    <p className={css.label} htmlFor={searchInputId}>Find сontacts by name</p>
    <input className={css.input} id={searchInputId} type="text" value={searchName} onChange={(e) => dispatch(changeFilter(e.target.value))} />
  </div>
)
}