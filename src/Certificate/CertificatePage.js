import React from 'react';
import image1 from './linux.png';
import image2 from './Certificate_02.png';
import image3 from './net.png';
import image4 from './TS.png';
import image5 from './computer.png';
import image6 from './internet.png';
import './CertificatePage.css';


// MyComponent 컴포넌트
const MyComponent = () => {
    return (
        <div className="image-gallery">
            <div className="image-item">
                <img src={image1} alt="Frame 13" />  
            </div>
            <div className="image-item">
                <img src={image2} alt="Frame 15" />
            </div>
            <div className="image-item">
                <img src={image3} alt="고정석 기간권" />
            </div>
            <div className="image-item">
                <img src={image4} alt="부대시설" />
            </div>
            <div className="image-item">
                <img src={image5} alt="부대시설" />
            </div>
            <div className="image-item">
                <img src={image6} alt="부대시설" />
            </div>
        </div>
    );
}



function ChargeInfoPage() {
    return (
        <main className="chargeinfo-page">
            <p className="sub-title">Certificate</p>
            <h1 className="main-title">자격증</h1>
            <MyComponent/>
        </main>
    )
}

export default ChargeInfoPage;