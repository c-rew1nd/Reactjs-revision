import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({}) // we use an empty object so that if nothing is returned from the api call then if there is a loop then atleast the system dosen't crash and also we are not holding the call in a normal variable because then it will never be updated on the UI
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).this((res) => res.json()).then((res) => setData(res[currency]))
    },[currency])// converting the fetched api to json because it is returned in string fromat.
    console.log(data)
    return data;
}

export default useCurrencyInfo;