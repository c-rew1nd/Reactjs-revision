import React, { useEffect, useState } from "react";

export default function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/c-rew1nd')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);})
    }, [])
    return (
        <>
        <div className="text-center text-white p-4 text-3xl bg-gray-600 m-4">Github followers: {data.followers}</div>
        <div className="flex justify-center p-4 m-3">
        <img src={data.avatar_url} alt="Git Profile Picture" width={300}/>
        </div>
        </>
    )
}
