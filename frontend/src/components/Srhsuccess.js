import React from 'react'
import SearchBar from './SearchBar'
import "./style.css"

const Srhsuccess = () => {
    return (
        <div className="container">
            <SearchBar/>
            <div className="card2">
                <div style={{borderRadius:"200px", height:"200px", width:"200px", background:" #F8FAF5", margin:"0 auto"}}>
                    <i className="checkmark">✓</i>
                </div>
                <h1>Success</h1>
                <p>We did not found any Hatred speech in your URL<br/> Happy browsing! </p>
            </div>
        </div >
    )
}

export default Srhsuccess
