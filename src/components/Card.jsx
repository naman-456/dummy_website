import aiImg1 from "../assets/images/ai_img1.jpg"
export const Card = () => {
     return (
         <div className="card">
            <div className="card-header">
                <img src={aiImg1} alt="AI Infrastructure Image" />
            </div>
            <div className="card-body">
                <span>MANEE</span>
                <p className="fs-24 fw-700 mt-16">Omnichannel AI Communication</p>
            </div>
         </div>
     )
}