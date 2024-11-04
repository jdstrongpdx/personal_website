import HelmetComponent from "../components/HelmetComponent";
import React from "react";

const OfficeDoor = () => {
    return (
        <>
            <HelmetComponent title="Office Door"/>
            <h1>Office Door</h1>
            <p>It has always been a tradition in my family to post funny cartoons on the outside of our office doors. In
                most office settings and in the era of remote and hybrid work, office doors are no more. In place of my
                office door, I give to you this page - a collection of cartoons and memes that I especially enjoy and
                hope you do as well.</p>

            <container className="memes">
            <img src="/memes/meme1.webp" alt="awesome meme" />
            <img src="/memes/meme2.webp" alt="awesome meme" />
            <img src="/memes/meme3.webp" alt="awesome meme" />
            <img src="/memes/meme4.webp" alt="awesome meme"/>
            <img src="/memes/meme5.webp" alt="awesome meme"/>
            <img src="/memes/meme6.webp" alt="awesome meme"/>
            <img src="/memes/meme7.webp" alt="awesome meme"/>
            <img src="/memes/meme8.webp" alt="awesome meme"/>
            <img src="/memes/meme9.webp" alt="awesome meme"/>
            <img src="/memes/meme10.webp" alt="awesome meme"/>
            <img src="/memes/meme11.webp" alt="awesome meme"/>
            </container>
        </>
    )
}

export default OfficeDoor;
