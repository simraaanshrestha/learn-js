import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState([]);
    const API = "https://jsonplaceholder.typicode.com/todos";
    async function getData() {
        try {
            const response = await fetch(API);
            if (response.ok) {
                const responsseData = await response.json();
                // console.log(responsseData);
                setData(responsseData);
            }
            console.log(response);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        getData();
    }
        , []);
    return (
        <div className='table'>
            <table className='table border-1px-solid-black' >
               <tr>
               <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
                </tr>

                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ? "Yes" : "No"}</td>
                    </tr>
                    
                ))}
                
            </table> 
            </div>
    )
}

export default FetchData