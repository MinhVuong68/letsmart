import { useSelector } from 'react-redux'
import { PageTodos } from '../apis'
import iconSearch from '../assets/icon_search.png'
import './styles/header.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { publicRoute } from '../routes'
const Header = (props) => {

    const system = useSelector(state => state.system)
    const menus = system.menus
    const menu_header = menus?.find(menu => menu.position === 'header') ?? []

    return (
        <div>

            <header id="SiteHeader" className="site-header position-relative">
                <div className="container">
                    <div className="wrapper">
                        <h1 className="logo">
                            <Link to={publicRoute.home.path} className="logo__image-link">
                                <img className="logo__image" src={system.logo} alt="" />
                            </Link>
                        </h1>
                        <nav id="NavStandard" className="navbar navbar-expand navbar-light nav-left header-menu-left" >
                            <div className="collapse navbar-collapse justify-content-between flex-wrap" id="navbarNav">
                                <ul id="nav-menu-header" className="navbar-nav">
                                    {menu_header.items?.map(item => (
                                        <li key={item.id} className="nav-item position-relative">
                                            <Link to={item.link} className="nav-link text-uppercase" href="/login" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="nav-text position-relative">{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                        <a href="" className="mobile-menu__button">
                            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-hamburger" viewBox="0 0 192 192"><path d="M30 96h132M30 48h132M30 144h132" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </a>
                        <div className="header-menu-right">
                            <div className="menu-right">
                                <div className="d-flex align-items-center">

                                    <Link to={publicRoute.order.path} className="btn-app btn-order-now">Đặt món</Link>
                                    <ul className="ms-3 d-flex mb-0">
                                        <li className="px-3 position-relative dropdown">
                                            <a href="" data-bs-toggle="dropdown" aria-expanded="true">
                                                <img src={iconSearch} alt="" width="25" />
                                            </a>
                                            <div id="" className="dropdown-menu p-0 end-0" style={{ minWidth: '280px', zIndex: 100000, border: 'none' }} data-bs-toggle="static">
                                                <form action="" className="d-flex align-items-center bg-white rounded-0 overflow-hidden mb-0" style={{ border: '2px solid #AD1B22' }}>
                                                    <input type="search" name="key" className="border border-0 ps-2 w-100" placeholder="Tìm kiếm" />
                                                    <button className="border border-0 bg-transparent">
                                                        <i className="fas fa-search p-2"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </li>
                                        <li className="px-3">
                                            <Link href="" className="navlink--icon" to={publicRoute.login.path}>
                                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-user" viewBox="0 0 192 192"><path d="M96 168c39.765 0 72-32.235 72-72 0-39.764-32.235-72-72-72-39.764 0-72 32.236-72 72 0 39.765 32.236 72 72 72Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M96 120c16.569 0 30-13.431 30-30 0-16.569-13.431-30-30-30-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M47.85 149.55a54.002 54.002 0 0 1 76.399-21.577 54.005 54.005 0 0 1 19.901 21.577" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </Link>
                                        </li>
                                        <li className="px-3">
                                            <Link to={publicRoute.order.path} className="navlink--icon">
                                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-shopping-bag" viewBox="0 0 192 192"><path d="M156.6 162H35.4a6.075 6.075 0 0 1-6-5.325l-10.65-96A6 6 0 0 1 24.675 54h142.65a6.001 6.001 0 0 1 5.925 6.675l-10.65 96a6.076 6.076 0 0 1-6 5.325v0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M66 78V54a30 30 0 1 1 60 0v24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><circle className="cart-indicator" cx="96" cy="108" r="15"></circle></svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="" className="mobile-cart__button">
                            <svg style={{ fill: 'none', strokeWidth: '12px', width: '25px' }} aria-hidden="true" focusable="false" role="presentation" className="icon icon-shopping-bag" viewBox="0 0 192 192"><path d="M156.6 162H35.4a6.075 6.075 0 0 1-6-5.325l-10.65-96A6 6 0 0 1 24.675 54h142.65a6.001 6.001 0 0 1 5.925 6.675l-10.65 96a6.076 6.076 0 0 1-6 5.325v0Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M66 78V54a30 30 0 1 1 60 0v24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><circle className="cart-indicator" cx="96" cy="108" r="15"></circle></svg>
                        </a>
                    </div>
                </div>
            </header>
            <div class="bg-black py-2">
                <div class="container">
                    <div class="d-flex align-items-center justify-content-center">
                        <svg style={{ strokeWidth: '3px', width: '20px', color: '#FFF', stroke: 'currentColor' }} aria-hidden="true" focusable="false" role="presentation" class="icon icon-truck" viewBox="0 0 82 82"><path d="M7.238 68.717H1.867V2.12H58.4v16.736h3.886c9.755 0 17.663 7.908 17.663 17.663v32.199h-5.917M55.781 68.717H25.487"></path><path d="M58.334 42.124h15.068v-4.27c0-6.82-5.53-12.35-12.351-12.35h-2.718v16.62M73.909 70.236a9.125 9.125 0 1 0-18.013-2.931 9.125 9.125 0 0 0 18.013 2.93ZM25.367 70.235a9.125 9.125 0 1 0-18.012-2.931 9.125 9.125 0 0 0 7.54 10.471 9.125 9.125 0 0 0 10.472-7.54Z"></path><path d="M13.723 77.507c-3.966.658-7.937 1.51-11.857 2.593M60.373 76.736c-10.512-1.212-24.298-1.969-38.645-.451M79.768 80.121s-4.96-1.222-12.975-2.395"></path></svg>
                        <span class="text-uppercase fw-bold text-white ms-2">Miễn phí giao hàng đơn trên 300K</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header