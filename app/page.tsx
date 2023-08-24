"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = (range: number) => {
    setCount(1);
    if(intervalId){
      clearInterval(intervalId);
    }
      const idInterval = window.setInterval(()=>{ setCount(count => count+1)}, (range * 1000));
      setIntervalId(idInterval);
  };
  
  const handleStop =() =>{
    setCount(1);
    clearInterval(intervalId);
    setIntervalId(0);
  }

  const buttonsClass = "bg-red-400 w-20 p-2 rounded-md text-white font-bold";
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="p-6 bg-white rounded-xl text-black">
        <h1 className="text-6xl font-bold">{count}</h1>
        <div className="w-64">
          <h3>Intervalos</h3>
          <div className="flex justify-between">
            <button className={buttonsClass} onClick={() => handleClick(1)}>
              1
            </button>
            <button className={buttonsClass} onClick={() => handleClick(3)}>
              3
            </button>
            <button className={buttonsClass} onClick={() => handleStop()}>
              Stop
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
