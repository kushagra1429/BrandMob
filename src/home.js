import React from 'react';
import "./home.css"
import HeadBar from './Navbar';
const styles1={
    spantag:{
        color: "rgb(49, 100, 159)",
    },
    spanmargin: {
        marginLeft: "10px",
    }
}
function Home(){
    return(
        <>
        <HeadBar/>
        <div className="logos">
            <div className="logos-slide">
                <li className="textin"><span style={styles1.spantag}>Know Your Phone: </span>A small quiz to help you choose the best phone for you!</li>
                <li className="textin"><span style={styles1.spantag}>Know Your Phone: </span>A small quiz to help you choose the best phone for you!</li>
                <li className="textin"><span style={styles1.spantag}>Know Your Phone: </span>A small quiz to help you choose the best phone for you!</li>
                <li className="textin"><span style={styles1.spantag}>Know Your Phone: </span>A small quiz to help you choose the best phone for you!</li>
            </div>
        </div>
        <div>
            <img src="/BrandMob/Untitled design.png" alt="1" />
            {/* <div className="bg-white w-96 h-36 text-center p-6 absolute top-52 left-80 text-lg">
                <p className="mb-4">Worth A Shot!</p>
                <p>Installed with cameras that'd enhave your photographic skills</p>
            </div> */}
        </div>
        <div className="logos">
            <div className="logos-slide">
                <li className="textin"><span style={styles1.spantag}>Know Your Phone: </span>A small quiz to help you choose the best phone for you!</li>
                <li className="textin"><span style={styles1.spantag}>Know Your Phone: </span>A small quiz to help you choose the best phone for you!</li>
                <li className="textin"><span style={styles1.spantag}>Know Your Phone: </span>A small quiz to help you choose the best phone for you!</li>
                <li className="textin"><span style={styles1.spantag}>Know Your Phone: </span>A small quiz to help you choose the best phone for you!</li>
            </div>
        </div>
        <div>
        <p className="ml-16 mt-24 text-3xl">Featured Collections</p>
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
            <div className='max-[784px]:block max-[1024px]:hidden'>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72'/>
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
        </div>
        </div>
        <div className='flex justify-center items-center mt-12 mb-14'>
            <div className='flex bg-zinc-100 items-center w-3/5 p-8 mt-16 gap-20 max-[784px]:w-4/5 max-[1024px]:w-4/5'>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72 max-[784px]:w-64 h-64'/>
                <div className='flex flex-col w-96 max-[784px]:w-64'>
                    <p className='text-3xl max-[784px]:text-xl'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                    <button className="bg-black text-white text-xl w-52 h-12 border border-white mt-36 max-[784px]:text-lg">ADD TO CART</button>
                    <button className="bg-white text-black text-xl w-52 h-12 border border-black mt-3 max-[784px]:text-lg">BUY NOW</button>
                </div>

            </div>
        </div>
        <div className='mb-8'>
        <p className="mt-24 ml-16 text-3xl">Recommended Products</p>
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
            <div className='max-[784px]:block max-[1024px]:hidden'>
                <img src="/BrandMob/61QRgOgBx0L._SL1500_.jpg" alt="1" className='w-72 h-72 max-[1024px]:hidden' />
                <p className='w-80 p-2'>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                <button className='p-2 bg-black text-white ml-2 w-36 mt-7'>Shop Now</button>
            </div>
        </div>
        </div>
        

        
        </>
    )
}
export default Home;