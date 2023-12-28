import React from "react";
// import "./navbar.css"
import { Link, NavLink } from "react-router-dom";
function HeadBar(){
    return(
        <>
            <nav className="flex h-20 items-center justify-evenly text-gray-500">
                <div className="hidden max-[784px]:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M7.5 8.75H13.75C14.0815 8.75 14.3995 8.8817 14.6339 9.11612C14.8683 9.35054 15 9.66848 15 10C15 10.3315 14.8683 10.6495 14.6339 10.8839C14.3995 11.1183 14.0815 11.25 13.75 11.25H7.5C7.16848 11.25 6.85054 11.1183 6.61612 10.8839C6.3817 10.6495 6.25 10.3315 6.25 10C6.25 9.66848 6.3817 9.35054 6.61612 9.11612C6.85054 8.8817 7.16848 8.75 7.5 8.75ZM16.25 18.75H22.5C22.8315 18.75 23.1495 18.8817 23.3839 19.1161C23.6183 19.3505 23.75 19.6685 23.75 20C23.75 20.3315 23.6183 20.6495 23.3839 20.8839C23.1495 21.1183 22.8315 21.25 22.5 21.25H16.25C15.9185 21.25 15.6005 21.1183 15.3661 20.8839C15.1317 20.6495 15 20.3315 15 20C15 19.6685 15.1317 19.3505 15.3661 19.1161C15.6005 18.8817 15.9185 18.75 16.25 18.75ZM7.5 13.75H22.5C22.8315 13.75 23.1495 13.8817 23.3839 14.1161C23.6183 14.3505 23.75 14.6685 23.75 15C23.75 15.3315 23.6183 15.6495 23.3839 15.8839C23.1495 16.1183 22.8315 16.25 22.5 16.25H7.5C7.16848 16.25 6.85054 16.1183 6.61612 15.8839C6.3817 15.6495 6.25 15.3315 6.25 15C6.25 14.6685 6.3817 14.3505 6.61612 14.1161C6.85054 13.8817 7.16848 13.75 7.5 13.75Z" fill="#787878"/>
                </svg>
                </div>
                
            <NavLink to="/" className="text-2xl">BrandMob</NavLink>
                <div className="flex justify-evenly w-2/5 text-lg max-[784px]:hidden">
                    <Link to="/" className="home">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact" className="contactUs">Contact</Link>
                    <Link to="/compare" className="Compare">Compare?</Link>
                </div>
                <div className="flex w-2/6 justify-evenly items-center">
                    <img src="/BrandMob/loupe.png" alt="search" className="w-6 h-6"/>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 48" fill="none" className="w-11 h-11 -mt-1 max-[784px]:hidden">
                        <path d="M15.5049 15C13.9792 15 12.5161 15.7024 11.4373 16.9526C10.3585 18.2029 9.75243 19.8986 9.75243 21.6667C9.75243 23.4348 10.3585 25.1305 11.4373 26.3807C12.5161 27.631 13.9792 28.3333 15.5049 28.3333C17.0305 28.3333 18.4937 27.631 19.5724 26.3807C20.6512 25.1305 21.2573 23.4348 21.2573 21.6667C21.2573 19.8986 20.6512 18.2029 19.5724 16.9526C18.4937 15.7024 17.0305 15 15.5049 15ZM25.5716 28.3333C25.4837 28.3314 25.3981 28.3655 25.3297 28.4295C25.2613 28.4935 25.2146 28.5834 25.1977 28.6833L24.9245 30.8833C24.493 31.1 24.076 31.3667 23.7021 31.6667L21.9188 30.8333C21.7606 30.8333 21.5737 30.8333 21.473 31.05L20.0349 33.9333C19.9486 34.1167 19.9774 34.3333 20.1212 34.4667L21.6456 35.8333C21.5882 36.3869 21.5882 36.9464 21.6456 37.5L20.1212 38.8667C20.0566 38.9309 20.0128 39.0188 19.9971 39.1157C19.9814 39.2127 19.9947 39.313 20.0349 39.4L21.473 42.2833C21.5593 42.5 21.7463 42.5 21.9188 42.5L23.7021 41.6667C24.076 41.9667 24.4787 42.25 24.9245 42.45L25.1977 44.65C25.2265 44.85 25.3703 45 25.5716 45H28.4478C28.606 45 28.7642 44.85 28.793 44.65L29.0662 42.45C29.4977 42.2333 29.8859 41.9667 30.2742 41.6667L32.0431 42.5C32.2301 42.5 32.417 42.5 32.5177 42.2833L33.9558 39.4C33.996 39.313 34.0093 39.2127 33.9936 39.1157C33.9779 39.0188 33.9341 38.9309 33.8695 38.8667L32.3307 37.5C32.3595 37.2167 32.3883 36.95 32.3883 36.6667C32.3883 36.3833 32.3739 36.1167 32.3307 35.8333L33.8551 34.4667C33.9198 34.4024 33.9635 34.3146 33.9792 34.2176C33.9949 34.1206 33.9816 34.0203 33.9414 33.9333L32.5033 31.05C32.417 30.8333 32.2301 30.8333 32.0431 30.8333L30.2742 31.6667C29.8859 31.3667 29.4977 31.0833 29.0518 30.8833L28.7786 28.6833C28.7695 28.5884 28.731 28.5005 28.6701 28.4361C28.6092 28.3717 28.5302 28.3352 28.4478 28.3333H25.5716ZM15.5049 31.6667C9.14843 31.6667 4 34.65 4 38.3333V41.6667H17.9209C17.2791 40.1046 16.945 38.3967 16.943 36.6667C16.9459 34.9922 17.2598 33.3381 17.8634 31.8167C17.1012 31.7167 16.3102 31.6667 15.5049 31.6667ZM27.0097 34.1667C28.2034 34.1667 29.1669 35.2833 29.1669 36.6667C29.1669 38.05 28.2034 39.1667 27.0097 39.1667C25.8017 39.1667 24.8526 38.05 24.8526 36.6667C24.8526 35.2833 25.8161 34.1667 27.0097 34.1667Z" fill="#787878"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className="w-8 h-8  mt-1">
                    <path d="M27.1633 4.49511H21.1014V2.75721C21.1014 1.25807 19.7363 0.0389099 18.0576 0.0389099H14.0108C12.3321 0.0389099 10.967 1.25807 10.967 2.75721V4.49511H4.84173C3.72109 4.49511 2.8125 5.30652 2.8125 6.30731V27.1467C2.8125 28.1475 3.72109 28.9589 4.84173 28.9589H27.1633C28.2839 28.9589 29.1925 28.1475 29.1925 27.1467V6.30731C29.1925 5.30652 28.2839 4.49511 27.1633 4.49511ZM12.9962 2.75721C12.9962 2.25704 13.4508 1.85111 14.0108 1.85111H18.0576C18.6177 1.85111 19.0722 2.25704 19.0722 2.75721V4.49511H12.9962V2.75721ZM27.1633 27.1467H4.84176V6.30731H10.967V8.17161C10.967 8.17161 10.9401 9.07678 11.9756 9.07678C13.117 9.07678 12.9963 8.17161 12.9963 8.17161V6.30731H19.0723V8.17161C19.0723 8.17161 19.0048 9.08134 20.0828 9.08134C21.0975 9.08134 21.1015 8.17161 21.1015 8.17161V6.30731H27.1633L27.1633 27.1467Z" fill="#787878"/>
                    </svg>
                    <div className="flex items-center w-28 bg-black text-white justify-center h-9 mt-1"><a href="Login.html">LOGIN/SIGNUP</a></div>
                </div>
            </nav>
        </>
    );
}
export default HeadBar;