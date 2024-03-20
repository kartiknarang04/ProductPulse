import React from 'react';
import { AiOutlineCloseSquare } from "react-icons/ai";
import "./styles.css";

const Popup = ({ setIsOpenPopup }) => {
  return (
    <div
      onClick={() => setIsOpenPopup(false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* Content */}
      <div className='bg-neutral-800 text-white'
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          borderRadius: "8px",
          height: "500px",
          width: "500px",
          padding: "20px 10px",
          animation: "dropTop .3s linear"
        }}
      >
        {/* Header */}
        <div
          style={{paddingBottom: "10px" }}
        >
          <h1 className='text-2xl' style={{ margin: 0 }}>Swapnarambh AI</h1>
          <div className='text-2xl'
            onClick={() => setIsOpenPopup(false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10
            }}
          >
            <AiOutlineCloseSquare />
          </div>
        </div>
        {/* Body */}
        <div>
          <p>
            <br />
            Your Career, Your Decision 
            <br />
          </p>
        </div>
        {/* Footer */}
        <footer style={{ paddingTop: "10px" }}>
          Our job is to provide our customers with the best career for them based on a questionnaire they answer when they come to our platform. Their answers are then fed into an AI model that predicts which career is best suited for them.
        </footer>
      </div>
    </div>
  );
};
export default Popup;
