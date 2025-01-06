import { useState } from 'react';
import api from '../api/api';
import { CButton } from '@coreui/react';  // CButton import
import { CForm, CFormInput, CFormLabel, CFormFloating } from '@coreui/react';
import loginButton from './Sign in Naver.png';

function LoginPage(props) {
    const [form, setForm] = useState({
        id: '',
        pw: '',
    });

    // 서버로 보낼 로그인 데이터
    const data = {
        "userId": form.id,
        "userPw": form.pw
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            conTest(); // 엔터 키가 눌리면 버튼 클릭 함수 호출
        }
    };

    // 서버 전송 함수(axios post)
    const conTest = () => api.post('/login', data)
        .then((res) => {
            // 로그인 성공했을 때
            if (res.data.success) {
                localStorage.setItem("id", form.id);
                localStorage.setItem("name", res.data.name);
                alert(`${localStorage.getItem("name")}님 로그인 되었습니다`);
                props.onLogin();
            }
            // 로그인 실패했을 때
            else {
                alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
                console.log(res);
            }
        }).catch((err) => {
            alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
            console.log(err);
        });

    const handleLoginClick = async () => {
        try {
            const response = await fetch('https://zev4wu0r0a.execute-api.ap-northeast-2.amazonaws.com/api/naverlogin', {
                method: 'GET',
                credentials: 'include',
            });
            const data = await response.json();

            if (data.success) {
                const loginWindow = window.open(data.api_url, 'naverLogin', 'width=500,height=600');

                if (!loginWindow) {
                    alert('팝업 차단이 활성화되어 있습니다. 팝업을 허용해 주세요.');
                    return;
                }

                const handleLoginMessage = (event) => {
                    // 출처 확인
                    if (event.origin === 'https://zev4wu0r0a.execute-api.ap-northeast-2.amazonaws.com') {
                        const userData = event.data.userData.response;
                        if (event.data.userData.message === 'success') {
                            console.log('User Data:', userData);
                            localStorage.setItem("id", userData.id);
                            localStorage.setItem("name", userData.name);
                            localStorage.setItem("naver", "1");
                            alert(`${localStorage.getItem("name")}님 로그인 되었습니다`);
                            props.onLogin();
                        }
                    }
                };

                window.addEventListener('message', handleLoginMessage);

                // 새 창이 닫히면 메시지 리스너 제거
                const interval = setInterval(() => {
                    if (loginWindow.closed) {
                        clearInterval(interval);
                        window.removeEventListener('message', handleLoginMessage);
                    }
                }, 1000);
            } else {
                console.error('로그인 요청 실패:', data);
            }
        } catch (error) {
            console.error('네이버 로그인 요청 중 오류 발생:', error);
        }
    };

    // 화면부
    return (
        <main className="login-page">
            <div className="login-logo"></div>

            <CForm className="login-form">

                {/* 아이디 입력 */}
                <CFormFloating className="mb-3">
                    <CFormInput
                        type="text"
                        id="floatingId"
                        value={form.id}
                        onChange={e => setForm({ ...form, id: e.target.value })}
                        placeholder="abcd1234" />
                    <CFormLabel htmlFor="floatingId">아이디</CFormLabel>
                </CFormFloating>

                {/* 비밀번호 입력 */}
                <CFormFloating className="mb-3">
                    <CFormInput
                        type="password"
                        id="floatingPassword"
                        value={form.pw}
                        onChange={e => setForm({ ...form, pw: e.target.value })}
                        onKeyDown={handleKeyDown}
                        placeholder="password" />
                    <CFormLabel htmlFor="floatingPassword">비밀번호</CFormLabel>
                </CFormFloating>

                {/* 비밀번호 찾기 */}
                <CFormLabel className="mb-5" style={{ float: 'right' }}>
                    <a onClick={e => {
                        e.preventDefault();
                        props.onChangePage("forgotUser");
                    }}>
                        <u className="underline">비밀번호를 잊으셨나요?</u>
                    </a>
                </CFormLabel>

            </CForm>

            {/* 로그인 버튼 */}
            <CButton
                onClick={conTest}
                className="p-button"
                variant="mb-3 p-1 px-3">
                로그인
            </CButton>

            {/* 회원가입 버튼 */}
            <CButton
                onClick={(e) => {
                    e.preventDefault();
                    props.onChangePage("signUp");
                }}
                variant="mb-3 p-1 px-3"
                className="s-button">
                회원가입
            </CButton>

            {/* 네이버 로그인 버튼 */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%', maxWidth: '800px' }}>
                <CButton
                    id="naverLoginButton"
                    variant="mb-3 mt-3"
                    style={{
                        borderRadius: '8px',
                        borderWidth: '1px',
                        width: '100%',
                        maxWidth: '800px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 0'
                    }}
                    onClick={handleLoginClick}
                >
                    <img
                        src={loginButton}
                        alt="네이버 로그인 이미지"
                    />
                </CButton>
            </div>

        </main>
    );
}

export default LoginPage;
