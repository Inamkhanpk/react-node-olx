export default class AdAction{
    static POST_AD = "POST_AD"
    static RESET_FORM = 'RESET_FORM'
    static LOAD_ALL_ADS = 'LOAD_ALL_ADS'
    static LOAD_ALL_ADS_SUCCESS ='LOAD_ALL_ADS_SUCCESS';
    static LOAD_CATEGORIES_COUNTS = 'LOAD_CATEGORIES_COUNTS'
    static LOAD_CATEGORIES_COUNTS_SUCCESS ='LOAD_CATEGORIES_COUNTS_SUCCESS'
    static GET_ALL_ADS_COUNT = 'GET_ALL_ADS_COUNT'
    static GET_ALL_ADS_COUNT_SUCCESS= 'GET_ALL_ADS_COUNT_SUCCESS'
    static FILTERS_ADS = 'FILTERS_ADS'
    static SEARCH_ADS = 'SEARCH_ADS'
    static LOAD_MY_ADS = 'LOAD_MY_ADS'
    static LOAD_MY_ADS_SUCCESS = 'LOAD_MY_ADS_SUCCESS'
    static LOAD_SAVED_ADS = 'LOAD_SAVED_ADS'
    static LOAD_SAVED_ADS_SUCCESS = 'LOAD_SAVED_ADS_SUCCESS'
    static GET_AD_BY_ID ='GET_AD_BY_ID'
    static GET_AD_BY_ID_SUCCESS ='GET_AD_BY_ID_SUCCESS'
    static AD_VIEW_LATER ='AD_VIEW_LATER'
    




    static postad(){
        return{
            type:AdAction.POST_AD
        }
    }
   
    static resetform(){
      return{
        type:AdAction.RESET_FORM
      }
    }

    
    
    static loadAllAds() {
      return {
        type: AdAction.LOAD_ALL_ADS,
        
      }
    }

    static loadAllAdsSuccess(ads) {
        return {
          type: AdAction.LOAD_ALL_ADS_SUCCESS,
          payload: ads
        }
      }

      static loadCategoriesCount() {
        return {
          type: AdAction.LOAD_CATEGORIES_COUNTS,
        }
      }
      
      static loadCategoriesCountsSuccess(catCounts) {
        return {
          type: AdAction.LOAD_CATEGORIES_COUNTS_SUCCESS,
          payload: catCounts,
        }
      }

      static getAllAdsCount() {
        return {
          type: AdAction.GET_ALL_ADS_COUNT
        }
      }

     static getAllAdsCountSuccess(totalAdsCount) {
        return {
          type: AdAction.GET_ALL_ADS_COUNT_SUCCESS,
          payload: totalAdsCount
        }
      }

     
      
     static filtersAds(filterCategory){
      return{
        type:AdAction.FILTERS_ADS,
        payload:filterCategory
      }
     }


     static searchAds(queryData){
       return{
         type:AdAction.SEARCH_ADS,
         payload:queryData
       }
     }



     static loadMyAds() {
      return {
        type: AdAction.LOAD_MY_ADS,
      }
    }
    
    static loadMyAdsSuccess(ads) {
      return {
        type: AdAction.LOAD_MY_ADS_SUCCESS,
        payload: ads
      }
    }



    static loadSavedAds() {
      return {
        type: AdAction.LOAD_SAVED_ADS,
      }
    }
    
    static  loadSavedAdsSuccess(ads) {
      return {
        type: AdAction.LOAD_SAVED_ADS_SUCCESS,
        payload: ads
      }
    }

    static getAdById(){
      return {
        type:AdAction.GET_AD_BY_ID
      }
    }
    static getAdByIdSuccess(adById){
      return {
        type:AdAction.GET_AD_BY_ID_SUCCESS,
        payload:adById
      }

    }  

    static adViewLater(adId){
      return {
        type:AdAction.AD_VIEW_LATER,
        payload:adId
      }
    }

    
}