import { Card } from "./Card"
import { useState } from "react"
export const HomePage = () => {
    const [noOfCardItems, setNoOfItems] = useState(9)
    const arr = new Array(noOfCardItems).fill(0)
    console.log('setNoOfItems ==>', setNoOfItems)
    return (
         <>
            <div className="main-body">
               <section className="first-section">
                   <div>
                       <h1 className="text-white fs-60 txt-align-center">
                          POWER YOUR
                       </h1>
                        <span className="text-blue-400 ds-block fs-60 txt-align-center">AI INFRASTRUCTURE</span>

                      {screen.width > 768 ? (<p className="text-white fs-rem-1_point_25 line-height-36">
                          A unified Autonomous AI Ecosystem that runs your entire business <br/> <span className="ml-48">— operations, sales, marketing, and support — 24/7 on one</span> <br/><span className="ds-flex-js-center">intelligent infrastructure.</span>
                      </p>) : ( <p className="text-white fs-rem-1_point_25 line-height-36 text-align-justify">
                          A unified Autonomous AI Ecosystem that runs your entire business <span className="ml-48">— operations, sales, marketing, and support — 24/7 on one</span> <span>intelligent infrastructure.</span>
                      </p>)}
                      <div>
                         <button className="btn-primary">ACTIVATE AI WORKFORCE</button>
                         <button className="bg-black text-white btn-border-grey border-radius-16 p-12 ml-16">WATCH DEMO</button>
                      </div>
                   </div>
               </section>
               <section className="second-section">
                   <div>
                      <h1 className="text-white txt-align-center">THE <span className="text-blue">AUTONOMOUS</span> STACK</h1>
                   </div>
                   <div className="ds-flex-js-center mt-16">
                      <ul className="card-list">
                          { arr?.length > 0 && arr.map((_, i) => <li>{<Card key={i} />}</li> ) }
                      </ul>
                   </div>
               </section>
            </div>
         </>
    )
}