import axios from "axios";

// const SelectCountry=sessionStorage.getItem("Selected Country")
// console.log("country",SelectCountry)
const GetAllData=(dispatch,url) => {

  axios
    .get(url)
    .then((response) => {
      const covidData = response.data;
      const arr=[covidData]
      dispatch({
        type: "COVID19DATA",
        data: arr,
      });
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
};

const url_2 = `https://covid19.mathdro.id/api/countries`;

const getCountryNames=(dispatch) => {
  axios
  .get(url_2)
  .then((response) => {
    const country = response.data.countries;

    dispatch({
      type: "COUNTRYLIST",
      country: country,
    });
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
};

export{
  GetAllData,
  getCountryNames
}