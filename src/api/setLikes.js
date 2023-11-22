
import axios from "axios"

export const Likes=async (userId, placeId)=>{
    
    return axios.get(`https://russcazak10.ru/web/index.php?r=api/setlikeplace&id_user=${userId}&id_place=${placeId}`).then(res=>res.data)
}

