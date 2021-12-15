import Button from '@restart/ui/esm/Button'
import React from 'react'
import "./style.css"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

const SearchBar = () => {
    return (
        <>
            <div className="search">
                <label className="searchlabel" htmlFor="searchurl">Enter Any URL</label>
                <input type="url" name="searchurl" id="searchurl" class="searchbox" placeholder="www.exampleurl.com"></input>
                <Button type="submit" className="searchbutton" ><Link to="/searchresult" className="link">Check ! </Link></Button>
            </div>
            <Switch>

                <Route exact path="/">  </Route>


            </Switch>
        </>
    )
}

export default SearchBar
