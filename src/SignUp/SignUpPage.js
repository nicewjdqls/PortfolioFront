import { useState, useEffect } from 'react';
import api from '../api/api';

import { 
  CButton, CForm, CFormFloating, CFormInput, CFormLabel 
} from '@coreui/react'; // CoreUI의 컴포넌트만 사용합니다.
import SuccessModal from '../Modal/SuccessModal';
import { FcApproval } from "react-icons/fc";
import './SignUpPage.css';

function SignUpPage(props) {
    const [validMessage, setValidMessage] = useState('');    
    const [checkedId, setCheckedId] = useState(false);
    const [checkedPhone, setCheckedPhone] = useState(false);

    const [valid, setValid] = useState({
        pw: false,
        pwCheck: false,
        phone: false,
    });

    const [form, setForm] = useState({
        id: '',
        pw: '',
        pwCheck: '',
        name: '',
        phone: '',
        selectedDate: null,
    });

    // Modal 데이터
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('');

    const handleClose = () => setShow(false);

    // 서버로 보낼 회원가입 데이터
    const data = {
        "userId": form.id,
        "userPw": form.pw,
        "userName": form.name,
        "userPhone": form.phone,
        "userBirthDate": (form.selectedDate !== null) ? `${form.selectedDate.getFullYear()}-${String(form.selectedDate.getMonth() + 1).padStart(2, '0')}-${String(form.selectedDate.getDate()).padStart(2, '0')}` : form.selectedDate
    };

    useEffect(() => {
        setCheckedId(false);
        return () => {};
    }, [form.id]);

    useEffect(() => {
        setCheckedPhone(false);
        return () => {};
    }, [form.phone]);

    // 회원가입 데이터 전송 함수
    const reqSignUp = () => api.post('signUp', data)
    .then(res => {
        if (res.data.success) {
            alert('회원가입 되었습니다.');
            props.onChangePage("login");
        } else {
            alert('회원가입에 실패했습니다.');
        }
        console.log(res, data);
    }).catch(err => {
        alert(err.response.data.message);
        console.log(err);
    });

    // 유효성 검증 함수
    const checkValidation = () => {
        const validCheck = Object.values(valid).filter(value => value === true).length > 0;
        if (validCheck === true) {
            alert('양식을 확인해주세요');
        } else if (checkedId === false) {
            alert('아이디 중복체크를 해주세요');
        } else {
            reqSignUp();
        }        
    };

    // 아이디 중복체크 전송 함수
    const checkId = () => api.get(`signUp/checkId/${form.id}`)
    .then(res => {
        if (res.data.success) {
            alert("사용 가능한 아이디입니다.");
            setCheckedId(true);
        } else {
            alert("사용 불가능한 아이디입니다.");
        }
    }).catch(err => {
        console.log(err);
    });

    const handleNumericInput = (e) => {
        const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];
        if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
          e.preventDefault();
        }
    };

    const validPassword = (e) => {
        const value = e.target.value;
        const hasLetter = /[a-zA-Z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[$@$!%*#?&]/.test(value);

        const validatePattern = hasLetter && hasNumber && hasSpecialChar && value.length >= 8 && value.length <= 20;
        setValid(prevValid => ({...prevValid, pw: !validatePattern}));

        if (!hasLetter || !hasNumber || !hasSpecialChar) {
            setValidMessage('문자, 숫자, 특수문자를 포함해주세요');
        } else if (value.length < 8 || value.length > 20) {
            setValidMessage('8~20자여야 합니다');
        } else {
            setValidMessage('');
        }
    };

    const validPasswordCheck = (e) => {
        form.pw === e.target.value ? setValid({...valid, pwCheck: false}) : setValid({...valid, pwCheck: true});
    };

    const validPhone = (e) => {
        e.target.value.length === 11 ? setValid({...valid, phone: false}) : setValid({...valid, phone: true});
    };

    return (
        <main className="signup-page">
            <div className="login-logo"></div>

            <CForm className="signup-form mb-3">

                {/* 아이디 입력 */}
                <CFormFloating className="mb-3">
                    <CFormInput 
                        type="text" 
                        id="floatingId" 
                        value={form.id} 
                        onChange={e => setForm({...form, id: e.target.value})} 
                        placeholder="abcd1234" />
                    <CFormLabel htmlFor="floatingId">아이디입력 (6 - 20자)</CFormLabel>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <CButton 
                            onClick={checkId} 
                            className="p-button-sm mt-2 me-2" 
                            type="button">중복 확인</CButton>      
                        {checkedId === true && <FcApproval />} 
                    </div>
                </CFormFloating>

                {/* 비밀번호 입력*/}
                <CFormFloating className="mb-3">
                    <CFormInput 
                        type="password" 
                        id="floatingPassword" 
                        value={form.pw} 
                        onChange={(e) => {
                            setForm({...form, pw: e.target.value});
                            validPassword(e);                        
                        }}
                        invalid={valid.pw}
                        placeholder="password"/>
                    <CFormLabel htmlFor="floatingPassword">비밀번호 입력(문자,숫자,특수문자 포함 8-20자)</CFormLabel>
                    <p style={{color: "yellow", fontSize: "13px"}}>{validMessage}</p>
                </CFormFloating>

                {/* 비밀번호 재입력*/}
                <CFormFloating className="mb-3">
                    <CFormInput 
                        type="password" 
                        id="floatingPasswordCheck" 
                        value={form.pwCheck} 
                        onChange={(e) => {
                            setForm({...form, pwCheck: e.target.value});
                            validPasswordCheck(e);
                        }}
                        invalid={valid.pwCheck}
                        placeholder="password"/>
                    <CFormLabel htmlFor="floatingPasswordCheck">비밀번호 재입력</CFormLabel>
                </CFormFloating>

                {/* 이름 입력*/}
                <CFormFloating className="mb-3">
                    <CFormInput 
                        type="text" 
                        id="floatingName" 
                        value={form.name} 
                        onChange={e => setForm({...form, name: e.target.value})} 
                        placeholder="이름"/>
                    <CFormLabel htmlFor="floatingName">이름 입력</CFormLabel>
                </CFormFloating>

                {/* 휴대폰번호 입력*/}
                <CFormFloating className="mb-3">
                    <CFormInput 
                        type="text" 
                        id="floatingPhone" 
                        value={form.phone} 
                        onChange={(e) => {
                            setForm({...form, phone: e.target.value});
                            validPhone(e);
                        }} 
                        onKeyDown={handleNumericInput}
                        invalid={valid.phone}
                        placeholder="휴대폰 번호 입력"/>
                    <CFormLabel htmlFor="floatingPhone">휴대폰 번호 입력 (“-” 제외 11자리 입력)</CFormLabel>
                </CFormFloating>

            </CForm>

            {/* 회원가입 버튼 */}
            <CButton 
                onClick={checkValidation} 
                color="primary" 
                className="mb-3 p-2"
                style={{ width: '100%' }}>
                회원가입
            </CButton>
            <CButton 
                onClick={(e) => {
                    e.preventDefault();
                    props.onChangePage("login");
                }} 
                color="secondary" 
                className="mb-3 p-2"
                style={{ width: '100%' }}>
                이미 계정이 있으신가요? 로그인
            </CButton>

            {/* 회원가입 성공 알림창 */}
            <SuccessModal show={show} handleClose={handleClose} text={msg} />
        </main>
    );
}

export default SignUpPage;
