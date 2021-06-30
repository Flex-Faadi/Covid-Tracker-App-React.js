import { fetchData } from "../api";
const data=  fetchData();
const INITIAL_STATE = {
    data:{data}
}
const Reducer = (state = INITIAL_STATE) => {
return state;
}

export default Reducer;