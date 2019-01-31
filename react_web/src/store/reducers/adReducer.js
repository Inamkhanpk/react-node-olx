import AdAction from './../actions/adAction.js';

const initialState={
    
    isRegistered: false,
    isLogin:false,
    isAuthenticated:false,
    isProcessing:false,
    user:[],
    ads:[],
    catCounts:[],
    totalAdsCount:[],
    queryData:[],
    filterCategory:[],
    resetForm:false,
    myAds:[],
    savedAds:[],
    adById:[]
    
    
    
    

}

function AdReducer(state=initialState,action){
    switch(action.type){
        case AdAction.POST_AD:
        return {...state,isRegistered:true,isLogin:true,isProcessing:true}
        case AdAction.RESET_FORM:
        return {...state,resetForm:true}
        case AdAction.LOAD_ALL_ADS:
        return {...state}
        case AdAction.LOAD_ALL_ADS_SUCCESS:
        return {...state,ads:action.payload}
        case AdAction.LOAD_CATEGORIES_COUNTS_SUCCESS:
        return {...state,catCounts:action.payload}
        case AdAction.GET_ALL_ADS_COUNT_SUCCESS:
        return {...state,totalAdsCount: action.payload}
        
        case AdAction.FILTERS_ADS:
        return {...state,filterCategory:action.payload}
        case AdAction.SEARCH_ADS:
        return {...state,queryData:action.payload}
        case AdAction.LOAD_MY_ADS_SUCCESS:
        return {...state,myAds:action.payload}
        case AdAction.LOAD_SAVED_MY_ADS:
        return {...state,savedAds:action.payload}
        case AdAction.GET_AD_BY_ID_SUCCESS :
        return {...state,adById:action.payload}
        default :
        return state;

    }
}
export default AdReducer;