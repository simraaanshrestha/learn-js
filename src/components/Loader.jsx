import React from 'react'
import { RingLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <RingLoader color="#f96c0c"  />

        </div>)
}

export default Loader