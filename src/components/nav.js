import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Image from './image'

const Nav = () => (
    <Fragment>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        </div>
        <nav>
            |<Link to="/"> Home </Link> |
            <Link to="/contact/"> Contact </Link> |
            <Link to="/speaking/"> Speaking </Link> |
            <Link to="/projects/"> Projects </Link> |
        </nav>
    </Fragment>
)

export default Nav