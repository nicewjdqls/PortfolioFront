import React from 'react';
import image1 from './linux.png';
import image2 from './Certificate_02.png';
import image3 from './net.png';
import image4 from './TS.png';
import image5 from './computer.png';
import image6 from './internet.png';
import './CertificatePage.css';

const certificates = [
  { name: "리눅스 마스터", date: "2023-10-15", issuer: "한국정보통신진흥협회", image: image1 },
  { name: "정보처리기사", date: "2022-08-01", issuer: "한국산업인력공단", image: image2 },
  { name: "네트워크 관리사", date: "2021-11-20", issuer: "한국정보통신협회", image: image3 },
  { name: "TS 인증", date: "2020-05-30", issuer: "TS 공인기관", image: image4 },
  { name: "컴퓨터 활용능력", date: "2019-07-10", issuer: "대한상공회의소", image: image5 },
  { name: "인터넷 정보관리사", date: "2018-12-05", issuer: "한국인터넷진흥원", image: image6 },
];

const MyComponent = () => {
  return (
    <div className="image-gallery">
      {certificates.map((cert, index) => (
        <div className="image-item" key={index}>
          <div className="image-text">
            <p>자격증명: {cert.name}</p>
            <p>취득일: {cert.date} / ({cert.issuer})</p>
          </div>
          <img src={cert.image} alt={cert.name} />
        </div>
      ))}
    </div>
  );
};

function CertificatePage() {
  return (
    <main className="chargeinfo-page">
      <p className="sub-title">Certificate</p>
      <h1 className="main-title">자격증</h1>
      <MyComponent />
    </main>
  );
}

export default CertificatePage;
