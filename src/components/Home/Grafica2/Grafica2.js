import React from "react";
import { useState, useEffect, useRef } from "react";
import './BarProgress.css';
import G2Style from './Grafica2.module.css';
import Modal1 from "./Modal1";

const Grafica2 = () => {


    const [offset,setOffset] = useState(424.11500823462205);
    const circleRef = useRef(null);
    const [toggleConfig,setToggleConfig] = useState(false);
    const [progress,setProgress] = useState(0)
    const [meta,setMeta] = useState(1);
    const [time,setTime] = useState(1800);
    
    
    const size = 150;
	const strokeWidth = 15;

	  
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2 ;
    const circumference = 2 * Math.PI * radius;

    useEffect(()=>{
       const configProgress = time * 100 / (3600 * meta);
       setProgress(configProgress)
    },[meta,time])


    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out'; 
    }, [setOffset, progress, circumference, offset]);

    
    return <>
        <div className={G2Style.containerGraph}>
            <div className={G2Style.configGraph2}>
            <p>Meta Diaria</p><i onClick={()=> setToggleConfig(true)}className={`fa-solid fa-gear ${G2Style.tuerca}`}></i>
            </div>

            <div className={G2Style.svgContainer}>
              <svg 
              className="svg"
              width={size}
              height={size}
              >
                  <circle
                     className="svg-circle-bg"
                     stroke={'#d9edfe'}
                     cx={center}
                     cy={center}
                     r={radius}
                     strokeWidth={strokeWidth}>
                  </circle>
                  <circle
                     className="svg-circle"
                     ref={circleRef}
                     stroke={'#19d2d8'}
                     cx={center}
                     cy={center}
                     r={radius}
                     strokeWidth={strokeWidth}
                     strokeDasharray={circumference}
                     strokeDashoffset={ offset}
                     >   
                  </circle> 
                    <text 
                    x={`${center}`} 
                    y={`${center}`} 
                    className={G2Style.svgCircleText}>
                        {progress.toFixed(1)}%
                </text>         
              </svg>
              </div>
              {
                 toggleConfig ?
                  <Modal1 
                  toggleConfig={toggleConfig} 
                  setToggleConfig={setToggleConfig} 
                  meta={meta} setMeta={setMeta} 
                  time={time}
                  setProgress={setProgress}
                  /> 
                  : null 
              }
              
        </div>
    
        </>
}

export default Grafica2;