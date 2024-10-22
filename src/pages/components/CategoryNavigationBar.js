import { Skeleton, Space } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

const CategoryNavigationBar = ({ onSelect, data, loading }, ref) => {

    const categories = data || []
    console.log(loading);


    return (
        <div className='category-navigation-bar'>
            <div className='container'>
                <div className='d-flex py-3'>
                    {loading ? (
                        Array(3).fill().map((_, index) => (
                            <Space key={index} className="category-item" direction="vertical" align="center" size={5} >
                                <Skeleton.Avatar active size={75} shape="circle" />
                                <Skeleton.Input active style={{ width: 40, height: 15 }} size="small" />
                            </Space>

                        ))
                    ) : (
                        categories.map((category, index) => (
                            <CategoryItem data={category} key={index} onClick={onSelect} />
                        ))
                    )}
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
                <img className='image' src={category.icon} />
            </div>
            <span className='category-name'>{category.name}</span>
        </div>
    )
}

export default CategoryNavigationBar