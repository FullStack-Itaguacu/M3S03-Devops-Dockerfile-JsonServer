import React, { useState, useEffect} from "react";


export const PharmaList = () => {
    const [pharmaList, setPharmaList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/pharmacys" , {
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }).then((response) => response.json())
            .then((data) => {
                setPharmaList(data);
            },[]);
            console.log(pharmaList);
    }); 

    const getData = () => {
        fetch("http://localhost:5000/pharmacys" , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }).then((function(response) {
            console.log(response);
            return response.json();
        }).then(function(myJson) {
            console.log(myJson);
        }));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="list">
            <h1>Pharma List</h1>
            {pharmaList && pharmaList.length && pharmaList.map((pharma) =><p>{ item.about }</p>)}
        </div>
    );
}

