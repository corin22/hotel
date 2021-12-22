const fetchHotelsCom = async (url) => {
    try{
        return await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
                "x-rapidapi-key": "de0cfade7emsh7c785ebe5ba3513p159f4ajsne00f20c91733"
            }
        }).then( res => res.json())
    }catch(e){
        return e
    }
}
export default fetchHotelsCom