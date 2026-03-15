export function filterData(SearchText,allRestaurants){
    const filterData = allRestaurants.filter((res)=>
       res?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase())
    );
    return filterData;
  }