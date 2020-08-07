import React from 'react'
import './Dashboard.scss'
import keyword from '../../assets/direction-icon.png'
import location from '../../assets/location-icon.png'
import remote from '../../assets/globe-icon.png'
import design from '../../assets/design-icon.png'
import contract from '../../assets/contract-icon.png'
import arrows from '../../assets/arrows-icon.png'
import { FiChevronDown } from 'react-icons/fi'
import { GrFormCheckmark } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <header>
                <div className="top">
                    <p className="gig">Gigs</p>
                    <Link to='/addgig/data'>
                        <button >
                            New gig
                        <span>+</span>
                        </button>
                    </Link>
                </div>
                <div className="down">
                    <div className="option-box" id='active-option'>
                        <p className='option-label' id='option-clicked'>All gigs</p>
                        <div className="number-box" id='active'><span className='number' id='active-no'>3404</span></div>
                    </div>
                    <div className="option-box">
                        <p className='option-label'>My gigs</p>
                        <div className="number-box"><span className='number'>1200</span></div>
                    </div>
                    <div className="option-box">
                        <p className='option-label'>Rejected gigs</p>
                        <div className="number-box"><span className='number'>100</span></div>
                    </div>
                </div>
            </header>

            <main>
                <div className="buttons">
                    <p>Freelance</p>
                </div>
                <div className="buttons">
                    <img src={keyword} alt="keywords" />
                    <p>Keywords</p>
                    <FiChevronDown />
                </div>
                <div className="buttons">
                    <img src={location} alt="location" />
                    <p>Location</p>
                    <FiChevronDown />
                </div>
                <div className="buttons">
                    <img src={remote} alt="remote" />
                    <p>Remote friendly</p>
                </div>
                <div className="buttons" id='btn-active'>
                    <img src={design} alt="design" />
                    <p className='design-active'>Design</p>
                    <p className='design-active' style={{ color: 'yellow' }}><GrFormCheckmark /></p>
                </div>
                <div className="buttons">
                    <img src={contract} alt="contract" />
                    <p>Contract</p>
                </div>
            </main>

            <section>

                <div className="section-down">
                    <table>

                        <tr>
                            <th className='head'></th>
                            <th className='head'>Role</th>
                            <th className='head'>Company</th>
                            <th className='head'>
                                Date
                                    <img src={arrows} alt="arrows" />
                            </th>
                            <th className='head'>
                                Salary($)
                                    <img src={arrows} alt="arrows" />
                            </th>
                            <th className='head'></th>
                        </tr>

                        <tr>
                            <td className="check-box"><input type="checkbox" name="check" id="check" /></td>
                            <td className="role">Product Designer</td>
                            <td className="company">TM30</td>
                            <td className="date">20th, June 2020</td>
                            <td className="salary">20,000 - 30,000</td>
                            <td className="delete"><button className="delete-btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td className="check-box"><input type="checkbox" name="check" id="check" /></td>
                            <td className="role">Product Designer</td>
                            <td className="company">TM30</td>
                            <td className="date">20th, June 2020</td>
                            <td className="salary">20,000 - 30,000</td>
                            <td className="delete"><button className="delete-btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td className="check-box"><input type="checkbox" name="check" id="check" /></td>
                            <td className="role">Product Designer</td>
                            <td className="company">TM30</td>
                            <td className="date">20th, June 2020</td>
                            <td className="salary">20,000 - 30,000</td>
                            <td className="delete"><button className="delete-btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td className="check-box"><input type="checkbox" name="check" id="check" /></td>
                            <td className="role">Product Designer</td>
                            <td className="company">TM30</td>
                            <td className="date">20th, June 2020</td>
                            <td className="salary">20,000 - 30,000</td>
                            <td className="delete"><button className="delete-btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td className="check-box"><input type="checkbox" name="check" id="check" /></td>
                            <td className="role">Product Designer</td>
                            <td className="company">TM30</td>
                            <td className="date">20th, June 2020</td>
                            <td className="salary">20,000 - 30,000</td>
                            <td className="delete"><button className="delete-btn">Delete</button></td>
                        </tr>
                        <tr>
                            <td className="check-box"><input type="checkbox" name="check" id="check" /></td>
                            <td className="role">Product Designer</td>
                            <td className="company">TM30</td>
                            <td className="date">20th, June 2020</td>
                            <td className="salary">20,000 - 30,000</td>
                            <td className="delete"><button className="delete-btn">Delete</button></td>
                        </tr>
                    </table>
                </div>
            </section>

        </div >
    )
}

export default Dashboard
