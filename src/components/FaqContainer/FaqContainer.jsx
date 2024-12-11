import React, { useState } from "react";
import "./FaqContainer.css";
import faqImage from '../../Assets/Images/faqImage.jpeg'; 
import crossImage from '../../Assets/Images/eva_close-circle-outline.svg'
const FaqContainer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if the same is clicked
    } else {
      setActiveIndex(index);
    }
  };

  const faqs = [
    {
      question: "What summit means?",
      answer:
        "SUMMIT: Systematic Unity Mechanism Mobilizing Millions Into Technology.",
    },
    
    {
      question: "What is the Unite-to-Earn Meme Token?",
      answer:
        "The Unite-to-Earn Meme Token is a unique cryptocurrency designed with game-changing utilities. It leverages the Summit Program to empower users to create, participate, and earn through community-driven events.",
    },
  
    { question: "What is the Summit Program?" ,
        answer:
        "The Summit Program is the backbone of Unite-to-Earn. It is a revolutionary initiative that connects and mobilizes a global community, rewarding participation in events.",
    },
    { question: "How does Unite-to-Earn fuel community growth?",
        answer:
        "By rewarding users for engaging in events, Unite-to-Earn creates a decentralized ecosystem where participation drives token growth and strengthens community bonds.",
    },
    { question: "What makes this Meme Token different from others?",
        answer:
        "Unlike traditional meme tokens, the Unite-to-Earn token has real blockchain-driven utilities, offering tangible rewards through participation, hosting, and community engagement.",
     },
    // { question: "Can I earn rewards just by participating in events?",
    //     answer:
    //     "Yes, participants in the Unite-to-Earn community can earn rewards by attending and hosting events as part of the Summit Program.",
    //  },
  ];

  return (
    <div className="faq-container-main">
     <h2>Frequently Asked Question</h2>

     <div className="faq-container">
     
     <div className="faq-image-section">
     <div className="circle-div"></div>
       <img src={faqImage} alt="FAQ Illustration" />
     </div>
     
     <div className="faq-accordion">
      
       {faqs.map((faq, index) => (
         <div
           className={`accordion-item ${activeIndex === index ? "active" : ""}`}
           key={index}
           onClick={() => toggleAccordion(index)}
         >
           <div className="accordion-question">
             <span>{faq.question}</span>
             <span className="accordion-icon">
             {activeIndex === index ? <img src={crossImage} alt="Close" /> : "▼"}
             </span>
           </div>
           {activeIndex === index && (
             <div className="accordion-answer">
               <p>{faq.answer || "Answer will go here."}</p>
             </div>
           )}
         </div>
       ))}
     </div>
   </div>
     </div>

  );
};

export default FaqContainer;
