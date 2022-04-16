import React from 'react'
import Header from './navbar.js'

function Layout(props) {
    return(
        <div className="App">
            <Header user = {props.user} logout = {props.logout}/>

        </div>
    );
}
export default Layout