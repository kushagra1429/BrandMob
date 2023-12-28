import React from "react";
import "./contact.css"
import HeadBar from "./Navbar";
function ContactUs(){
    return (
        <>
            <HeadBar/>
            <div class="Feedback">
            <div class="FeedCard">
                <img class="Img" src="/BrandMob/imagessdf.jpeg" alt="1"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi deleniti corporis doloremque, eos, cum repellendus, non dolorem est atque incidunt hic quasi eaque nam esse optio iusto. Quam, minima! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, praesentium maxime? Quidem, sed natus nemo iusto labore exercitationem asperiores dolore maxime earum nam dolores, ab in deleniti placeat alias dicta?</p>
            </div>
            <div class="FeedCard">
                <img class="Img" src="/BrandMob/imagessdf.jpeg" alt="1"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi deleniti corporis doloremque, eos, cum repellendus, non dolorem est atque incidunt hic quasi eaque nam esse optio iusto. Quam, minima! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, praesentium maxime? Quidem, sed natus nemo iusto labore exercitationem asperiores dolore maxime earum nam dolores, ab in deleniti placeat alias dicta?</p>
            </div>
            <div class="FeedCard">
                <img class="Img" src="/BrandMob/imagessdf.jpeg" alt="1"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi deleniti corporis doloremque, eos, cum repellendus, non dolorem est atque incidunt hic quasi eaque nam esse optio iusto. Quam, minima! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, praesentium maxime? Quidem, sed natus nemo iusto labore exercitationem asperiores dolore maxime earum nam dolores, ab in deleniti placeat alias dicta?</p>
            </div>
            </div>
            <div class="shopnow2">READ MORE</div>
            <div class="contact">
                <p class="CU">CONTACT US</p>
                <input type="text" placeholder="NAME"/>
                <input type="text" placeholder="EMAIL"/>
                <input type="text" placeholder="CONTACT"/>
                <input type="button" value="SEND" class="send"/>
            </div>
        </>
    );
}
export default ContactUs;