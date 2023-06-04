import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './shop.css'

const Catg = () => {
    const data = [
        {
            cateImg: "./category/cat-1.png",
            cateName:"Apple"
        },
        {
            cateImg: "./category/cat-2.png",
            cateName:"Redmi"
        },
        {
            cateImg: "./category/cat-1.png",
            cateName:"Sony"
        },
        {
            cateImg: "./category/cat-1.png",
            cateName:"SamSung"
        },
        {
            cateImg: "./category/cat-2.png",
            cateName:"Vivo"
        },
        {
            cateImg: "./category/cat-1.png",
            cateName:"Xiaomi"
        },
    ]

    const [MobileMenu, setMobileMenu] = useState(false)

  return (
    
    <>
        <div className='category'>
            <div className='chead d_flex'>
                <h1>Brands</h1>
                <h1>Shops</h1>
            </div>
            {data.map((value,index) => {
                return(
                    <div className='box f_flex' key={index}>
                        <img src={value.cateImg} alt="image"/>
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
            <div className='box box_2'>
                <button>View all brands</button>
            </div>
            <div className='box box_2'>
                <button href='/cart'>Xem gio hang</button>
            </div>
        </div>
    </>
  )
}

export default Catg