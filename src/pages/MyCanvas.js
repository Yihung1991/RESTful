import React, { useRef, useEffect, useState } from "react";
import { productData } from "../data/product-data";

function MyCanvas() {
  const canvasRef = useRef();
  const shadowRef = useRef();
  const [cart, setCart] = useState([]);
  const [cache, setCache] = useState({});
  const positions = [
    [0, 0],
    [600, 0],
    [300, 300],
    [0, 500],
    [600, 500],
  ];

  useEffect(() => {
    renderCanvas();
  }, [cart]);
  const renderCanvas = async () => {
    const c = shadowRef.current;
    const ctx = c.getContext("2d");

    const dishImg = await getImageFromPath("/imgs/anya.jpg");
    ctx.drawImage(dishImg, 0, 0);
    for (let i in cart) {
      const item = cart[i];
      const itemImg = await getImageFromPath("/imgs/" + item.img);
      ctx.drawImage(itemImg, positions[i][0], positions[i][1]);
    }
    //畫到真正要呈現的canvas上
    const ctx2 = canvasRef.current.getContext("2d");
    ctx2.clearRect(0, 0, c.width, c.height);
    ctx2.drawImage(c, 0, 0);
  };

  const getImageFromPath = (path) => {
    return new Promise((resolve, reject) => {
      if (cache[path]) {
        return resolve(cache[path]);
      }
      const img = new Image();
      img.onload = (event) => {
        resolve(img);
        setCache({ ...cache, [path]: img });
      };
      img.src = path;
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {productData.map((p, i) => {
            return (
              <div
                style={{ display: "inline-block" }}
                key={p.id}
                onClick={() => {
                  //設定tid可以給每個物件唯一值
                  p.tid = Date.now();
                  const new_p = { ...p, tid: Date.now() };
                  console.log(new_p);
                  setCart([...cart, new_p]);
                }}
              >
                <div>
                  <img src={"/imgs/" + p.img} alt={p.name} width="150" />
                </div>
                <div>
                  {p.name} {p.price}
                </div>
              </div>
            );
          })}
          {cart.map((p, i) => {
            return (
              <div
                style={{ display: "inline-block" }}
                key={p.tid}
                onClick={() => {
                  const newCart = cart.filter((v, i) => {
                    return v.tid !== p.tid;
                  });
                  setCart(newCart);
                }}
              >
                <div>
                  <img src={"/imgs/" + p.img} alt={p.name} width="50" />
                </div>
                <div>
                  {p.name} {p.price}
                </div>
              </div>
            );
          })}
          <canvas ref={shadowRef} width="800" height="600" hidden></canvas>
          <canvas
            ref={canvasRef}
            width="800"
            height="600"
            style={{ border: "1px solid gray" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default MyCanvas;
