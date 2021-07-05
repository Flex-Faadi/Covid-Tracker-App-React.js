import React,{useState} from "react";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

function Loader(props) {
  let [loading, setLoading] = useState(props.value);

  return (
    <div className="d-flex justify-content-center loaderDiv">
      <div className="sweet-loading">
        <MoonLoader	loading={loading} css={override} size={50} /> <br />
        <p className="text-info">Wait a second...</p>
      </div>
    </div>
  );
}

export default Loader;