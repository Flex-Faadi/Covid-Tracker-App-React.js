import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryNames } from "../api/index";
function CountryList() {
  const [Country, setCountry] = useState('Afghanistan');

  sessionStorage.setItem("Selected Country",Country)
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let CountryList = state.country;
  useEffect(() => {
    getCountryNames(dispatch);
  }, [Country]);
  function GrabValue(event) {
    setCountry(event.target.value);
  }
  

  console.log(Country);
  return (
    <div>
      <div className="container country-container my-5">
        <select
          className="select-css"
          name="countries"
          id="countries"
          onChange={GrabValue}
        >
          {CountryList.map((e, i) => {
            return (
              <option value={e.name} key={i}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default CountryList;
