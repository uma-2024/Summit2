import React, { useState } from "react";
import "./NewsBlogs.css";
import leftArrow from "../../Assets/Images/Group 139.svg"; // Add your left arrow image
import rightArrow from "../../Assets/Images/Group 138.svg"; // Add your right arrow image
import blogImage from "../../Assets/Images/nft1.jpg";
import nftImage2 from '../../Assets/Images/nft2.jpg'
import nftImage3 from '../../Assets/Images/nft3.jpg'
import nftImage4 from '../../Assets/Images/nft4.jpg'
import nftImage5 from '../../Assets/Images/nft5.jpg'

const NewsBlogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogsData = [
    {
      title: "CryptoPunk 3D #13",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: blogImage,
      collection: "3D cryptopunk",
    },
    {
      title: "HAPE #8064",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: nftImage2,
      collection: "HAPE PRIME",
    },
    {
      title: "InvisibleFriend #54",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: nftImage3,
      collection: "MAYC",
    },
    {
      title: "Bored Ape Yacht Club #7634",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: nftImage4,
      collection: "BAYC",
    },
    {
      title: "Mutant Ape #2893",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: nftImage5,
      collection: "MAYC",
    },
  ];

  const cardsToShow = 3;

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? blogsData.length - cardsToShow : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % (blogsData.length - cardsToShow + 1));
  };

  return (
    <section id="NewsBlogs">
      <div className="unique-news-blogs-container">
        <h2 className="unique-section-title">NFT</h2>

        <div className="unique-carousel">
          <img
            src={leftArrow}
            alt="Left Arrow"
            className="unique-arrow unique-left-arrow"
            onClick={handlePrev}
          />

          <div className="unique-carousel-cards">
            {blogsData
              .slice(currentIndex, currentIndex + cardsToShow)
              .map((blog, index) => (
                <div className="unique-blog-card" key={index}>
                  <div className="unique-blog-card-content">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="unique-blog-image"
                    />
                    <div className="unique-blog-info">
                      <p className="unique-blog-title">Comming Soon</p>
                      {/* <p className="unique-blog-collection">
                        {blog.collection}
                      </p>
                      <p className="unique-blog-description">
                        {blog.description}
                      </p> */}
                      <button className="unique-know-more-btn">
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <img
            src={rightArrow}
            alt="Right Arrow"
            className="unique-arrow unique-right-arrow"
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsBlogs;
