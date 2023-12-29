// import axios from "axios";
// import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "./OnePlusNord.css";
import HeadBar from "./Navbar";
import { Link } from "react-router-dom";
// import Accordion from "./Assistant";


function OnePlusNord(){
    return(
        <>
        <HeadBar/>
        <p className="text-4xl ml-28 mt-12">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
        <div className="flex justify-center mt-20">
        <div className=" w-2/5 flex justify-center flex-col items-center">
            <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className="w-96 h-96"/>
            <div className="flex w-80 justify-around mt-10">
                <div className="w-12 h-12 bg-slate-100 border border-gray-200"></div>
                <div className="w-12 h-12 bg-slate-100 border border-gray-200"></div>
                <div className="w-12 h-12 bg-slate-100 border border-gray-200"></div>
                <div className="w-12 h-12 bg-slate-100 border border-gray-200"></div>
            </div>
            <div className="bg-black text-white text-xl w-52 h-12 border border-white mt-12 max-[784px]:text-lg flex justify-center items-center">ADD TO COMPARE</div>
            <div className="w-80 h-80 bg-slate-500 mt-10 rounded-xl p-4">
            <div className="bg-white rounded-md p-2">Hi, I am your personal Assistance.</div>

            <div className="bg-white rounded-md p-2 mt-2">Chat with me for resolving your queries.</div>
            <div className="flex justify-evenly items-center w-72 mt-40">
                <div className="w-64 h-8 bg-white rounded-3xl"></div>
                <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center"> &rarr;</div>
            </div>
            

            </div>
            

            
        </div>
        <div className="bg-gray-50 w-2/3 p-6">
            <p className="title">BrandMob</p>
            <p className="text-3xl">&#8377; 19,990</p>
            <div className="bg-black text-white text-xl w-52 h-12 border border-white mt-24 max-[784px]:text-lg flex justify-center items-center">ADD TO CART</div>
            <div className="bg-white text-black text-xl w-52 h-12 border border-black mt-3 max-[784px]:text-lg flex justify-center items-center">BUY NOW</div>
            <p className="F"><b>Features that'll make you wanna by this phone</b></p>
            <div className=" w-100vh p-4 text-xl text-justify">
                <li><span><b>Camera:</b></span> 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front (Selfie)</li>
                <li>Camera: 16MP</li>
                <li>Rear Camera Mode: Hi-res 108MP mode, 3x Lossless Zoom, Photo, Video, Nightscape, Expert, Panoramic, Portrait, Macro, Time-lapse, Slow-motion, Long exposure, Dual-view video, Text Scanner, 1080p/720p@30fps, Video</li>
                <li>Zoom: 1080P@30fps, 720P@30fps, Slow motion: 720P@120fps</li>
                <li>Time-Lapse: 1080P@30fps, Steady Video EIS support</li>
                <li>Display: 6.72 Inches; 120 Hz Adaptive refresh rate; FHD+(1080x2400),</li>
                <li>Colors: 16.7 Million colors, 391 ppi, Aspect Ratio: 20:9, Brightness: 550 nits (typical), 680 nits (HBM)</li>
                <li>Operating System: Oxygen OS based on Android 13.1</li>
                <li>Processor: Qualcomm Snapdragon 695 5G</li>
                <li>Battery & Charging: 5000 mAh with 67W SUPERVOOC Endurance Edition</li>
            </div>
        </div>
        </div>
       
        <div className="mt-52">
            <p className="FP">More Products like this</p>
            <div className="productsO">
                <div className="ProductsOne">
                    <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="2"/>
                    <p className="Protext">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                    <Link to="/OnePlusNord"><div className="shopnow1">Shop Now</div></Link>


                </div>
                <div className="ProductsOne">
                    <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="3"/>
                    <p className="Protext">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                    <Link to="/OnePlusNord"><div className="shopnow1">Shop Now</div></Link>



                </div>
                <div className="ProductsOne">
                    <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="4"/>
                    <p className="Protext">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                    <Link to="/OnePlusNord"><div className="shopnow1">Shop Now</div></Link>



                </div>
                <div className="ProductsOne">
                    <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="5"/>
                    <p className="Protext">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                    <Link to="/OnePlusNord"><div className="shopnow1">Shop Now</div></Link>

                </div>
            </div>
            
        </div>
        </>
    );
}
export default OnePlusNord;