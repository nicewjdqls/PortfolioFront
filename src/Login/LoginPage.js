import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CForm, CFormFloating, CFormInput, CFormLabel } from '@coreui/bootstrap-react';
import loginButton from './Sign in Naver.png';

const handleLoginClick = () => {
        alert("네이버 로그인은 준비중입니다.");
    };


function LoginPage() {
    const [form, setForm] = useState({
        id: '',
        pw: '',
    });

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // 로그인 버튼 클릭처럼 동작하도록 할 수 있음
        }
    };

    return (
        <main className="login-page">
            <div className="login-logo"></div>

            <CForm className="login-form">
                {/* 아이디 입력 */}
                <CFormFloating className="mb-3">
                    <CFormInput 
                        type="id" 
                        id="floatingId" 
                        value={form.id} 
                        onChange={e => setForm({...form, id: e.target.value})} 
                        placeholder="abcd1234"/>
                    <CFormLabel htmlFor="floatingId">아이디</CFormLabel>
                </CFormFloating>

                {/* 비밀번호 입력 */}
                <CFormFloating className="mb-3">
                    <CFormInput 
                        type="password" 
                        id="floatingPassword" 
                        value={form.pw} 
                        onChange={e => setForm({...form, pw: e.target.value})} 
                        onKeyDown={handleKeyDown}
                        placeholder="password"/>
                    <CFormLabel htmlFor="floatingPassword">비밀번호</CFormLabel>
                </CFormFloating>

                {/* 로그인 버튼 */}
                <Button 
                    onClick={() => alert("로그인도 준비중입니다.")} // 실제 로그인 처리 없이 폼만 동작
                    className="p-button" 
                    variant="mb-3 p-1 px-3">
                    로그인
                </Button>
            </CForm>
               {/* 네이버 로그인 버튼 */}
               <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', width: '100%', maxWidth: '800px' }}>
                <Button 
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
                </Button>
            </div>

        </main>
    );
}

export default LoginPage;
