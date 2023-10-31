import React from 'react'
import './header.css'
import ActionBar from './ActionBar'
import Socials from './Socials'
import Flowers from '../../assets/flowers.jpg'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Tara</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <ActionBar />
                <Socials />

                <div className="portrait">
                    <img src={Flowers} alt='by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/a-bunch-of-flowers-that-are-sitting-on-a-table-NsaQk3nQ77g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  '/>
                </div>
            </div>
        </header>
    )
}

export default Header