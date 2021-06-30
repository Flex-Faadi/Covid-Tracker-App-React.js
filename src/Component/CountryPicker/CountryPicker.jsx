import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api/index";
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountires, setFetchedCountires] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountires(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountires]);
  // console.log(fetchedCountires);
  return (
    <FormControl className={styles.formControl} className="my-5">

        <select className={styles.select} name="countries" id="countries" defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
        variant="filled">
          <option value="">Global</option>
          {fetchedCountires.map((country, i) => {
            return <option key={i} value={country}>{country}</option>;
          })}
        </select>
    </FormControl>
  );
};
export default CountryPicker;
