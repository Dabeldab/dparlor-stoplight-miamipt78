import React, {useState} from 'react'

import '../../styles/trafficlight.css'
let cycle


const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState('');

    function toggle() {
        const lights = ['red','yellow','green']
        let randomlight = lights[(Math.floor(Math.random() * lights.length))]
        setActiveLight(randomlight)
    } 
   
function lightup() {
 cycle = setInterval(() => {
    toggle() 
}, 1000);

setTimeout(() => {
    stopit()
}, 10000)
    }
 
    function stopit() {
        clearInterval(cycle)
    }

   return <>    
                <div className="background">
                    
                <div className="TrafficLightstick">
                   </div>
                   <div>
                <div className="TrafficLightbody"> 
                    </div>
                <div>
                    <div className="Trafficlights">
                    <div className={`redlight ${activeLight === 'red' ? 'on' : ''}`}></div>
                    <div className={`yellowlight ${activeLight === 'yellow' ? 'on' : ''}`}></div>
                    <div className={`greenlight ${activeLight === 'green' ? 'on' : ''}`}></div>
                    </div>
                </div>
                </div>
                <div id="lbuttons">
                    <button className="btn btn-danger"onClick={() => setActiveLight('red')}>Red</button>
                    <button className="btn btn-warning"onClick={() => setActiveLight('yellow')}>Yellow</button>
                    <button className="btn btn-success"onClick={() => setActiveLight('green')}>Green</button>
                    <button className="btn btn-primary"onClick={toggle}>Random</button>
                    <button className="btn btn-primary"onClick={lightup}>lightup</button>
                    <button className="btn btn-primary"onClick={stopit}>Stop</button>

                </div>
                </div>
                <div className="ground">
                <span>----------------------</span>
                </div>



        </>
}


export default TrafficLight