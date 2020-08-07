import React from 'react'
import './Addgig.scss'
import { Route, Switch, Link } from 'react-router-dom'
import Basic from '../forms/Basic'
import Renumeration from '../forms/Renumeration'

const AddGig = () => {
    return (
        <div className='page-2'>
            <div className="big-title">
                <p className="gig">Gigs</p>
            </div>
            <div className="section-2">
                <div className="title">
                    New gig
                </div>
                <div className="main">
                    <div className="toggle-control">
                        <form className="form">
                            <div className="group">
                                <Link to='/addgig/data'>
                                    <input type="radio" name="toggle" id="basic-data" />
                                    <label htmlFor="data">Basic Data</label>
                                </Link>
                            </div>
                            <div className="group">
                                <Link to='/addgig/renumeration'>
                                    <input type="radio" name="toggle" id="salary" />
                                    <label htmlFor="salary">Renumeration</label>
                                </Link>
                            </div>
                        </form>
                    </div>
                    <div className="toggle-board">
                        <Switch>
                            <Route exact path='/addgig/data' component={Basic} />
                            <Route path='/addgig/renumeration' component={Renumeration} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddGig
