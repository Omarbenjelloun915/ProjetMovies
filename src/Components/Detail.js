import React, { useEffect, useState } from 'react';
import "./Detail.css"


function isNull(object, item) {
    if (object !== null && object !== undefined) {
        return object
    } else {
        return "n'est pas disponible"
    }
}

let rows = []
let image

const Detail = ({ match }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${match.params.id}`)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    rows = [response]
                    setData(rows)
                    // console.log(rows)
                }
            });
    }, [match.params.id]);

    return (
        <div className="body">
            <div className="table-title">
                <h3>Information</h3>
            </div>
            <table className="table-fill">
                <thead>
                    <tr>
                        <th className="text-left">Key</th>
                        <th className="text-left">Value</th>
                    </tr>
                </thead>
                {data.map(item => (
                    <tbody className="table-hover" key={item.id}>
                        <tr>
                            <td className="text-left">Name</td>
                            <td className="text-left">{isNull(item.name)}</td>
                        </tr>
                        {/* <tr>
                            <td className="text-left">Image</td>
                            <td className="text-left"><img alt="" src="" id="imagebox" ></img></td>
                        </tr> */}
                        <tr>
                            <td className="text-left">Url</td>
                            <td className="text-left">{isNull(item.url)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">type</td>
                            <td className="text-left">{isNull(item.type)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">language</td>
                            <td className="text-left">{isNull(item.language)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">genre</td>
                            <td className="text-left">{isNull(item.genre)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">status</td>
                            <td className="text-left">{isNull(item.status)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">runtime</td>
                            <td className="text-left">{isNull(item.runtime)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">premiered</td>
                            <td className="text-left">{isNull(item.premiered)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">Schedule</td>
                            <td className="text-left">{isNull(item.schedule.time)} {isNull(item.schedule.days)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">Rating</td>
                            <td className="text-left">{isNull(item.rating.average)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">Weight</td>
                            <td className="text-left">{isNull(item.weight)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">externals</td>
                            <td className="text-left">{isNull(item.externals.tvrage)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">updated</td>
                            <td className="text-left">{isNull(item.updated)}</td>
                        </tr>
                        <tr>
                            <td className="text-left">Links</td>
                            <td className="text-left">{isNull(item._links.self.href)}</td>
                        </tr>
                    </tbody>
                ))}
            </table>

        </div>
    );
}
export default Detail;