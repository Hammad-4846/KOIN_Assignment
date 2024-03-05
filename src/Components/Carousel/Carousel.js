import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Card from "../Cards/EventCard/Card";
import CryptoCard from "../Cards/cryptoCard/Card";

import "./Carousel.scss";

const Carousel = ({ cards, isGraph,cardWidth,cardsPerSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const gap = 20; // Adjust the gap between cards as needed
  const visibleCards = cardsPerSlide; // Number of visible cards at once


  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      backgroundColor: "#0fba83",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === cards.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1
    );
  };
 
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AnimatePresence>
          {cards.map((cardItem, index) => {
            const isVisible =
              index >= currentIndex && index < currentIndex + visibleCards;
            return (
              <motion.div
                key={index}
                className="card"
                initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.5 }}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={handleAnimationComplete}
                style={{
                  width: `${cardWidth}px`,
                  position: "absolute",
                  left: `${(index - currentIndex) * (cardWidth + gap)}px`,
                  zIndex: isVisible ? 1 : 0,
                }}
              >
                {!isGraph ? (
                  <Card
                    Icon={cardItem.Icon}
                    title={cardItem.title}
                    description={cardItem.description}
                    bgColor={cardItem.bgColor}
                    key={cardItem.title}
                  />
                ) : (
                  <CryptoCard
                    name={cardItem.item.name}
                    graph={cardItem.item.data.sparkline}
                    price={cardItem.item.data.price}
                    logo={cardItem.item.small}
                    priceChange={
                      cardItem.item.data.price_change_percentage_24h.aed
                    }
                    key={cardItem.item.name}
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="slide_direction">
        <motion.div
          variants={slidersVariants}
          whileHover="hover"
          className="left"
          onClick={() => !isAnimating && handlePrevious()}
        >
          {/* Left arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </motion.div>
        <motion.div
          variants={slidersVariants}
          whileHover="hover"
          className="right"
          onClick={() => !isAnimating && handleNext()}
        >
          {/* Right arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
export default Carousel;
