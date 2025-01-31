import axios from "axios";
const API_BASE_URL = "https://yfnsgsnkhb.execute-api.ap-northeast-2.amazonaws.com/Prod";

// 환경 변수에서 백엔드 API URL을 가져옴
const api = axios.create({
  baseURL: API_BASE_URL || 'http://localhost:5000/api',  // 백엔드 URL
  headers: {
    "Content-Type": "application/json",
    // 초기 헤더에 토큰을 넣지 않음, 요청마다 동적으로 처리
  },
});

/**
 * 요청 시 토큰을 헤더에 추가하고 로그를 남기는 인터셉터
 */
api.interceptors.request.use(
  (request) => {
    const token = sessionStorage.getItem("token"); // 항상 세션 스토리지에서 가져오기
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`; // Bearer와 함께 설정
    } else {
      console.log("No token found in session storage."); // 디버깅용
    }
    console.log("Request Headers:", request.headers); // 헤더 확인
    return request;
  },
  (error) => {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

/**
 * 응답 시 로그를 남기는 인터셉터
 */
api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);  // 응답 데이터 확인
    return response;
  },
  (error) => {
    // 응답 에러 처리
    if (error.response) {
      console.log("RESPONSE ERROR", error.response.data);  // 에러 응답 확인
    } else {
      console.log("No response from server", error);  // 응답이 없는 경우
    }
    return Promise.reject(error);
  }
);

export default api;
