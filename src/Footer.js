import React from 'react'
import './Footer.css'

const date = new Date()
const year = date.getFullYear() 

function Footer() {
    return (
        <div className="footer">
            <p className="footer__copyright">Copyright © {year}</p>
        </div>
    )
}

export default Footer
