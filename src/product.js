import React, { Fragment } from "react";
import HeadBar from "./Navbar";
import "./product.css"
// import { Link } from "react-router-dom";
function Product(){
    return (
        <>
            <HeadBar/>
            <div className="banner1">
            {/* <div className="textinbanner1">
                <div className="textbox12">Pick Your best!
                    <div className="textinbox1">Let your phone decide your mood</div>
                </div>
            </div> */}
        
            <img className="mySlides" src="/BrandMob/Untitled design1.png" alt="1"/>
            </div>
            {/* <div className="menu">

                <div className="brand">
                    <div className="text">Brand</div>
                    <div className="inputbrands">
                        <input type="checkbox" name="Iphone" id="Iphone"/><label for="Iphone">Iphone</label>
                        <input type="checkbox" name="Iphone" id="Iphone"/><label for="Iphone">Iphone</label>
                        <input type="checkbox" name="Iphone" id="Iphone"/><label for="Iphone">Iphone</label>
                        <input type="checkbox" name="Iphone" id="Iphone"/><label for="Iphone">Iphone</label>
                        <input type="checkbox" name="Iphone" id="Iphone"/><label for="Iphone">Iphone</label>
                        <input type="checkbox" name="Iphone" id="Iphone"/><label for="Iphone">Iphone</label>
                    </div>
                    <div className="rangeslider">
                    </div>
                </div>
            </div> */}
            <div className="w-full h-40 bg-slate-100 mt-10"></div>
            <div className="w-48 h-full bg-slate-100"></div>
            <div className="product">
                <p className="P">Products</p>
                <div className='grid grid-cols-4 ml-12 mt-11 max-[784px]:grid-cols-2 gap-x-11 gap-y-8 max-[1024px]:grid-cols-3'>
            <div>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72'/>
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
            <div>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72'/>
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
            <div>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72'/>
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
            <div className='max-[1024px]:hidden'>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72'/>
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
            </div>
            <div className="product">
                <p className="P">Products</p>
                <div className='grid grid-cols-4 ml-12 mt-11 max-[784px]:grid-cols-2 gap-x-11 gap-y-8 max-[1024px]:grid-cols-3'>
            <div>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72'/>
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
            <div>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72'/>
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
            <div>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72'/>
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
            <div className='max-[1024px]:hidden'>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72'/>
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
            </div>
            </div>
            </div>
        </>
    );

}
export default Product;