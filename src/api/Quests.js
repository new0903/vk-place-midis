import axios from "axios"

export const getQuest=async (id_user)=>{
    return await axios.get(`https://russcazak10.ru/web/index.php?r=api/getquests&id_user=${id_user}`).then(res=>res.data)
}

