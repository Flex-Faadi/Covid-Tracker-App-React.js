import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryNames } from "../api/index";
import IMG from "../Images/Covid19Tracker.png";
function CountryList() {
  const [Country, setCountry] = useState("Afghanistan");

  // sessionStorage.setItem("Selected Country",Country)
  // countries list data from redux state
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let CountryList = state.country;

  //selected country data from redux state
  const selectedCuntry = state.selectCountry;
  const dispatch_2 = useDispatch();
  const updateData = (dispatch_2) => {
    dispatch_2({
      type: "SELECTCOUNTRY",
      selectCountry: Country,
    });
  };
  useEffect(() => {
    getCountryNames(dispatch_2);
    updateData(dispatch);
  }, [Country]);

  function GrabValue(event) {
    setCountry(event.target.value);
  }

  return (
    <div>
      <div className="container CovidImg">
        <img src={IMG} alt="covidimg"/>
      </div>
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
