import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Application from './Component/application'
// import './Component/styling.css'
import { Cards, Chart, CountryPicker, Footer ,Header} from "./Component";
import { fetchData } from "./api";
import coronaImage from "./Images/Covid19Tracker.png";
import styles from "./App.module.css";
import { useSelector } from "react-redux";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
    console.log(country)
  };

  render() {
    const { data, country } = this.state;
    return (
      <>
      <Header/>
        <div className={styles.container}>
          <img className={styles.image} src={coronaImage} alt="Covid-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
          
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
