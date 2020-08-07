import React from 'react'
import { Link } from 'react-router-dom'
import './Renumeration.scss'

const Renumeration = () => {
    return (
        <div className='renumeration'>
            <form className="form-2">
                <div className="form-groups">
                    <label htmlFor="salary">Salary</label>
                    <div className="form-input">
                        <input type="text" name='min' placeholder='Minimum' />
                        <input type="text" name='max' placeholder='Maximum' />
                    </div>
                </div>
                <div className="buttons-btn">
                    <Link to='/addgig/data'>
                        <input type="button" value="Back" />
                    </Link>
                    <Link to='/'>
                        <button>Add gig</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Renumeration
