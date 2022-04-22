import React from 'react';
import {Chart as ChartJS, LineElement, LinearScale, CategoryScale, PointElement  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Graph1 from './Grafica1.module.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const Grafica1 = () => {
    return <div className={Graph1.containerGraph}>

            <Line 
            data={
                {
                    labels:['Lunes','Martes','Miercoles','Jueves','Viernes'],
                    datasets:[
                        {
                            label:'ojala que funcione',
                            data: [1,6,8,16,24],
                            backgroundColor:[
                                '#19d2d8'    
                            ]
                        }
                    ]
                }

            }
        
            options={
                {
                    maintainAspectRatio:false,
                    responsive:true,
                }
            }
            
            
            />   
    </div>
}

export default Grafica1;