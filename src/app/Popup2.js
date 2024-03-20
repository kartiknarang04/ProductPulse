// Popup2.js
import React from 'react';
import { AiOutlineCloseSquare } from "react-icons/ai";
import "./styles.css";

const Popup2 = ({ setIsOpenPopup2 }) => {
  return (
    <div
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
          height: "80px",
          width: "200px",
          padding: "20px 10px",
          animation: "dropTop .3s linear"
        }}
      >
        {/* Header */}
        <div style={{ paddingBottom: "10px" }}>
          <h1 className='text-xl' style={{ margin: 0 }}>How Much: </h1>
          <div className='text-2xl'
            onClick={() => {setIsOpenPopup2(false)}}
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
        </div>
        {/* Footer */}
        
      </div>
    </div>
  );
};
export default Popup2;
