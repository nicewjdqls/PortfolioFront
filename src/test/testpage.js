import React from 'react';
import image1 from './Certificate_03.png';
import image2 from './Certificate_08.png';
import image3 from './Certificate_07.png';
import image4 from './net.png';
import './test.css';


// MyComponent 컴포넌트
const MyComponent = () => {
    return (
        <div className="image-gallery">
            <div className="image-item">
                <img src={image3} alt="Frame 13" />  
            </div>
            <div className="image-item">
                <img src={image4} alt="Frame 15" />
            </div>
            <div className="image-item">
                <img src={image1} alt="고정석 기간권" />
            </div>
            <div className="image-item">
                <img src={image2} alt="부대시설" />
            </div>
            <div className="image-item">
                <img src={image2} alt="부대시설" />
            </div>
            <div className="image-item">
                <img src={image2} alt="부대시설" />
            </div>
        </div>
    );
}



function ChargeInfoPage() {
    return (
        <main className="chargeinfo-page">
            <p className="sub-title">Usage fee</p>
            <h1 className="main-title">이용요금</h1>
            <MyComponent/>
        </main>
    )
}

export default ChargeInfoPage;