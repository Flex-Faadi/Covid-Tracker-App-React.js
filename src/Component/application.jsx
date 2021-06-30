import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
function Application() {
  const [data, getData] = useState([]);
  const [country, getCountry] = useState([]);

  useEffect(() => {
    getAlldata();
    getCountryNames();
  }, []);

  const url = "https://api.covidtracking.com/v1/states/current.json";
  const getAlldata = () => {
    axios
      .get(url)
      .then((response) => {
        const myData = response.data
        console.log(myData);
        getData(myData);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };
  const url_2 = "https://covid19.mathdro.id/api/countries";
  const getCountryNames = () => {
    axios
      .get(url_2)
      .then((response) => {
        const countryData = response.data.countries;
        console.log(countryData);
        getCountry(countryData);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <>
      <div className="container country-container">
        <select className="select-css" name="countries" id="countries">
          {country.map((e, i) => {
              return <option key={i}>{e.name}</option>
          })}
        </select>
      </div>
      <div className="container my-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>State</th>
              <th>Positive</th>
              <th>Total Result</th>
              <th>Hospitilized Currently</th>
              <th>Date Modified</th>
              <th>Death</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.state}</td>
                  <td>{e.positive}</td>
                  <td>{e.totalTestResults}</td>
                  <td>{e.hospitalizedCurrently}</td>
                  <td>{e.dateModified}</td>
                  <td>{e.death}</td>
                  <td>{e.date}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Application;
