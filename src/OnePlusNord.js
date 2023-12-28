import React from "react";
import "./OnePlusNord.css";
import HeadBar from "./Navbar";
import { Link } from "react-router-dom";
function OnePlusNord(){
    return(
        <>
        <HeadBar/>
        <p class="heading">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
        <div class="imageOnePlusNord">
            <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1"/>
        </div>
        <div class="des">
            <p class="title">BrandMob</p>
            <p class="price">&#8377; 19,990</p>
            <div class="shopnow2">ADD TO CART</div>
            <div class="shopnow2">BUY NOW</div>
            <p class="F"><b>Features that'll make you wanna by this phone</b></p>
            <div class="descrip">
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
        <div class="morepro">
            <p class="FP">More Products like this</p>
            <div class="productsO">
                <div class="ProductsOne">
                    <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="2"/>
                    <p class="Protext">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                    <Link to="/OnePlusNord"><div className="shopnow1">Shop Now</div></Link>


                </div>
                <div class="ProductsOne">
                    <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="3"/>
                    <p class="Protext">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                    <Link to="/OnePlusNord"><div className="shopnow1">Shop Now</div></Link>



                </div>
                <div class="ProductsOne">
                    <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="4"/>
                    <p class="Protext">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                    <Link to="/OnePlusNord"><div className="shopnow1">Shop Now</div></Link>



                </div>
                <div class="ProductsOne">
                    <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="5"/>
                    <p class="Protext">OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                    <Link to="/OnePlusNord"><div className="shopnow1">Shop Now</div></Link>

                </div>
            </div>
            
        </div>
        </>
    );
}
export default OnePlusNord;