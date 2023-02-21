import React, { useRef, useEffect } from "react";
import { productData } from "../data/product-data";

function MyCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
  
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    
    const img = new Image();
    img.onload = (event)=>{
        ctx.drawImage(img,0,0);
    };
    img.src = '/imgs/1.png';



  },[]);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {productData.map((v,i) => {
            return(
                <div style={{display:"inline-block"}}>
                    <div>
                        <img src={"/imgs/" + v.img} alt={v.name} width="550"/>
                    </div>
                    <div>
                        {v.name} {v.price}
                    </div>
                </div>
            )
          })}
        <canvas ref={canvasRef} width="800" height="600" style={{border: '1px solid gray'}} ></canvas>
        </div>
      </div>
    </div>
  );
}

export default MyCanvas;
