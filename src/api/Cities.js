import React from "react"

import axios from "axios"

export const getTowns = async () => {
    let cities = []
    const res = await axios.get(`https://russcazak10.ru/web/index.php?r=api/gettowns`).then(res => res.data.towns)

    res.map((item, index) => (
        cities.push({
            label: item.label,
            value: item.id,
        })
    ))
    
    return cities
}
export const addTowns = async (value,userID) => {
    axios.get(`https://russcazak10.ru/web/index.php?r=api/addtowns&value=${value}&userid=${userID}`)
}