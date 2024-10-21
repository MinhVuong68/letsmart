import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

const CategoryNavigationBar = ({onSelect, data}, ref) => {

    const categories = data || []

    return (
        <div className='category-navigation-bar'>
            <div className='container'>
                <div className='d-flex py-3'>
                {categories.map((category, index) => (
                    <CategoryItem data={category} key={index} onClick={onSelect}/>
                ))}
                </div>
            </div>
            
        </div>

    )
}

const CategoryItem = (props) => {
    const category = props.data

    const handleClickNavigation = (category) => {
        props.onClick(category)
        
    }
    return (
        <div 
            className='category-item'
            onClick={() => handleClickNavigation(category)}
        >
            <div className='image-container d-flex align-items-center justify-content-center'>
                <img className='image' src={category.icon}/>
            </div>
            <span className='category-name'>{category.name}</span>
        </div>
    )
}

export default CategoryNavigationBar