import React from "react";
import {Table,CountryList,Header,Footer} from "../Component/Index";
function Application() {
  return (
    <>
    <Header/>
      <CountryList />
      <Table />
      {/* <Footer/> */}
    </>
  );
}

export default Application;
