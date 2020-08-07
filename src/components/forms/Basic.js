import React from 'react'
import { Link } from 'react-router-dom'
import './Basic.scss'

const Basic = () => {
    return (
        <div className='basic'>
            <form>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <input type="text" name='role' placeholder='Product Manager' />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input type="text" name='company' placeholder='TM30' />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country">
                        <option value="country">Country</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State/Region</label>
                    <select name="state" id="state">
                        <option value="state">State/Region</option>
                    </select>
                </div>
                <div className="form-group add">
                    <input type="text" name='address' placeholder='Address' />
                </div>
                <div className="form-group add">
                    <label htmlFor="tags">Add tags</label>
                    <input type="text" name='tags' />
                </div>
                <div className="button-btn">
                    <Link to='/'><input type="button" value="Cancel" /></Link>
                    <Link to='/addgig/renumeration'>
                        <button>Continue</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Basic
