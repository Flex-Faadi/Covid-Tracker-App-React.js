const INITIAL_STATE = {
    data:[],
    country:[],
    selectCountry:"Afghanistan"
}

const reducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "COVID19DATA":
            return({
                ...state,
                data:action.data
            })
        case "COUNTRYLIST":
           return ({
                ...state,
                country:action.country
            })
        case "SELECTCOUNTRY":
            return ({
                ...state,
                selectCountry:action.selectCountry
            })    
        default:
            return state
    }
}

export default reducer;