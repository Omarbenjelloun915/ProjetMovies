import React, { useEffect, useState } from 'react';

function isNull(object, item) {
    if (object !== null && object !== undefined) {
        return object
    } else {
        return "n'est pas disponible"
    }
}
let rows = []

const Detail = ({ match }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${match.params.id}`)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    rows = [response]
                    setData(rows)
                    console.log(rows)
                }
            });
    }, [match.params.id]);

    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <p> Name : {isNull(item.name)}</p>
                        <p> Url : {isNull(item.url)}</p>
                        <p> type : {isNull(item.type)}</p>
                        <p> language : {isNull(item.language)}</p>
                        <p> genre : {isNull(item.genre)}</p>
                        <p> status : {isNull(item.status)}</p>
                        <p> runtime : {isNull(item.runtime)}</p>
                        <p> premiered : {isNull(item.premiered)}</p>
                        <p> Schedule : {isNull(item.schedule.time)} {isNull(item.schedule.days)}</p>
                        <p> Rating : {isNull(item.rating.average)}</p>
                        <p> Weight : {isNull(item.weight)}</p>
                        <p> externals : {isNull(item.externals.tvrage)}</p>
                        <p> updated : {isNull(item.updated)}</p>
                        <p> Links : {isNull(item._links.self.href)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Detail;