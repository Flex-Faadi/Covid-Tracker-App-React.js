import React,{useState} from "react";
import {
  Table,
  CountryList,
  Header,
  Footer,
  Graph,
  Loader,
} from "../Component/Index";
function Application() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);
  return (
    <>
      <Header />
      <CountryList />
      {
        
          loader ? <Loader value={loader} /> :
          <Table />
        }
        <Graph />
      <Footer />
    </>
  );
}

export default Application;
