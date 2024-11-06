import React, { useState } from 'react'

const ColorMap = () => {
    const [codes, setCodes] = useState(["00bc00", "450000", "ef0080"]);
    const uniqueCodes = ["FF0000", "00FF00", "0000FF", "FFFF00", "FF00FF", "00FFFF", "000000", "800000", "800080", "808080", "C0C0C0", "400000", "000040", "404000", "004040", "404040", "002000", "000020", "006000", "006060",];

    const handleClick = () => {
        setCodes(uniqueCodes);
    }
    return (
        <div>
            <div className="d-flex flex-wrap fs-2">
                <h5>In room :</h5>
                {codes.map((code, index) => (
                    <span key={index} className="badge mx-1 px-3" style={{ backgroundColor: `#${code}` }}> </span>
                ))}
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Click</button>
        </div>
    )
}

export default ColorMap
