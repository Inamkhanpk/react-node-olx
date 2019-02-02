import axios from 'axios';
import AdAction from "../actions/adAction";

export default class AdMiddleware{
//pOST AN AD
    static submitAd(fd)
    {
        return (dispatch) =>{
            dispatch(AdAction.postad())
            AdMiddleware.SendAdOnServer(dispatch,fd)
        }

    }


    static SendAdOnServer(dispatch,fd){
        
        axios.post('http://localhost:3001/submitad',
  fd
    )
        .then(res=>{
                console.log(res)
                console.log(res.data)},
                dispatch(AdAction.resetform())
                
        
        )
        .catch((err) =>{
            
             console.error("Data not send")
        
             } )

    }


//Load all ads
    static loadAllAdsLogic(){
        return(dispatch)=>{
            AdAction.loadAllAds()
            AdMiddleware.GetAdsFromServer(dispatch)
        }
    }

    static GetAdsFromServer(dispatch){
        axios.get('http://localhost:3001/getAllAds')
        .then(res =>{
            //console.log(res)
            //console.log(res.data)
            dispatch(AdAction.loadAllAdsSuccess(res.data))
            
        })
        .catch(err =>{
            console.log(err)
        }
        )
    }

    


            //LOAD CATEGORIES COUNT

 static getCategoriesCountLogic(){
        return(dispatch)=>{
                    AdAction.loadCategoriesCount()
                    AdMiddleware.GetCategoriesCountFromServer(dispatch)
                }
            }

    static GetCategoriesCountFromServer(dispatch){
    axios.get('http://localhost:3001/getCategoriesCounts')
      .then(resp => resp.data)
      .then(data => {
        let reqData = [];
        let dataArr = Object.values(data);
        
        dataArr.map(data => {
        return(
          reqData[data._id] = data.count
         ) });
        return reqData;
      })
      .then(reqData => {
        dispatch(AdAction.loadCategoriesCountsSuccess(reqData));
      })
      .catch(err => {
        console.error(err);
      })
      
            }

//totaladscount


static getAllAdsCount(){

    return(dispatch) =>{
        axios.get('http://localhost:3001/getAllAdsCounts')
        .then(resp => {
          dispatch(AdAction.getAllAdsCountSuccess(resp.data));
        })
        .catch(err => {
          console.error(err);
        })
        
    }

    }

  

      


            //filter ads
static filterAdsLogic(filters){
    console.log(filters)
    return(dispatch)=>{
        
      axios.get('http://localhost:3001/filterAds', 
      {params: {filters:JSON.stringify(filters)} 
    })
        .then(res => {
            console.log(res)
            console.log(res.data)
          dispatch(AdAction.filtersAds(res.data))
          dispatch(AdAction.loadAllAdsSuccess(res.data)); 
        })
        .catch(err => {
          console.log(err)
        })
        
    
  
    }}  
        


//SEARCH ADS
static searchAdsLogic(searchQuery){
    return(dispatch) =>{
        axios.get('http://localhost:3001/searchAdsListings',
        {params: {searchQuery:JSON.stringify(searchQuery)}}
          )
          .then(res => {
            console.log(res)
            console.log(res.data)
            dispatch(AdAction.searchAds(res.data))
            dispatch(AdAction.loadAllAdsSuccess(res.data));
          })
          .catch(err => {
         console.log(err);
          })
    }
}  


// load my ads

static loadMyAdsLogic(){
    return(dispatch)=>{
        AdAction.loadMyAds()
        AdMiddleware.getLoadMyAds(dispatch)
    }
}

static getLoadMyAds(dispatch){
    let filters = {};
    axios.get('http://localhost:3001/filterAds',
    {params: {filters:JSON.stringify(filters)}})
    .then(res => {
        console.log(res)
        console.log(res.data)
      dispatch(AdAction.filtersAds(res.data))
      dispatch(AdAction.loadAllAdsSuccess(res.data)); 
    })
    .catch(err => {
      console.log(err)
    })

}


//save my ads

static loadSavedAdsLogic(filters){
    return (dispatch)=>{
        AdAction.loadSavedAds()
        AdMiddleware.getLoadSavedAdsLogic(dispatch,filters)
    }
}

static getLoadSavedAdsLogic(dispatch,filters){
    axios.get('http://localhost:3001/filterAds',
   {params: {filters: JSON.stringify(filters)}}
)

    .then(res => {
        console.log(res)
        console.log(res.data)
      dispatch(AdAction.filtersAds(res.data))
      dispatch(AdAction.loadSavedAdsSuccess(res.data)); 
    })
    .catch(err => {
      console.log(err)
    })
}



static getAdByIdServer(id){
    return (dispatch)=>{
        AdAction.getAdById()
        AdMiddleware.getAdByIdFromServer(dispatch,id)
    }
}
static getAdByIdFromServer(dispatch,id){
    axios.get('http://localhost:3001/getAdByIds',{id})
    .then(res => {
        console.log(res)
        console.log(res.data)
      dispatch(AdAction.getAdByIdSuccess(res.data))
    })
    .catch(err => {
      console.log(err)
    })
    
}









}