import React from 'react'
import Navbar from './nav-folder/Navbar'
import Dashboard from './dashboard-folder/Dashboard'
import { Route, Switch } from 'react-router-dom'
import AddGig from './addgig-folder/AddGig'

const Homepage = () => {
    return (
        <div className='homepage'>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/addgig' component={AddGig} />
            </Switch>
        </div>
    )
}

export default Homepage
