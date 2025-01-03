import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import image1 from './Certificate_03.png';
import image3 from './net.png';
import image7 from './Certificate_07.png';
import image8 from './Certificate_08.png';
import image10 from './TS.png';
import image11 from './linux.png';

import './CertificatePage.css'; // CSS 파일을 추가하여 스타일 적용

function CertificatePage() {
  return (
    <main className="gallery-page">
      <p className="sub-title">Certificate</p>
      <h1 className="main-title">자격증 취득현황</h1>

      <div className="carousel-container">
        <h2 className="carousel-title">1. 정보처리기사</h2>
        <h2 className="carousel-sub-title">취득일 2024.12.11</h2>
        <CCarousel interval={1000} controls transition="crossfade">
          <CCarouselItem className="ccarousel-item">
            <CImage className="image-size" src={image1} alt="slide 1" />
          </CCarouselItem>
        </CCarousel>
      </div>

      <div className="carousel-container">
        <h2 className="carousel-title">2. 네트워크관리사 2급</h2>
        <h2 className="carousel-sub-title">취득일 2024.12.10</h2>
        <CCarousel interval={1000} controls transition="crossfade">
          <CCarouselItem className="ccarousel-item">
            <CImage className="image-size" src={image3} alt="slide 2" />
          </CCarouselItem>
        </CCarousel>
      </div>

      <div className="carousel-container">
        <h2 className="carousel-title">3. 리눅스마스터 2급</h2>
        <h2 className="carousel-sub-title">취득일 2024.12.10</h2>
        <CCarousel interval={1000} controls transition="crossfade">
          <CCarouselItem className="ccarousel-item">
            <CImage className="image-size" src={image11} alt="slide 3" />
          </CCarouselItem>
        </CCarousel>
      </div>

      <div className="carousel-container">
        <h2 className="carousel-title">4. 초경량비행장치 조종자</h2>
        <h2 className="carousel-sub-title">취득일 2024.12.10</h2>
        <CCarousel interval={1000} controls transition="crossfade">
          <CCarouselItem className="ccarousel-item">
            <CImage className="image-size" src={image10} alt="slide 4" />
          </CCarouselItem>
        </CCarousel>
      </div>

      <div className="carousel-container">
        <h2 className="carousel-title">5. 컴퓨터활용능력 1급</h2>
        <h2 className="carousel-sub-title">취득일 2024.12.10</h2>
        <CCarousel interval={1000} controls transition="crossfade">
          <CCarouselItem className="ccarousel-item">
            <CImage className="image-size" src={image8} alt="slide 5" />
          </CCarouselItem>
        </CCarousel>
      </div>

      <div className="carousel-container">
        <h2 className="carousel-title">6. 인터넷관리사 2급</h2>
        <h2 className="carousel-sub-title">취득일 2014.10.22</h2>
        <CCarousel interval={1000} controls transition="crossfade">
          <CCarouselItem className="ccarousel-item">
            <CImage className="image-size" src={image7} />
          </CCarouselItem>
        </CCarousel>
      </div>
    </main>
  );
}

export default CertificatePage;
