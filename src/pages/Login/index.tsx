// import { domAnimation, LazyMotion } from 'framer-motion';
import './Login01.css';

const LoginPage = () => {
  return (
    <div className="login-01">
      <div className="logo">
        <img
          className="bg-circle"
          src="assets/vectors/BgCircle_x2.svg"
          alt=""
        />
        <span className="live">live1</span>
      </div>
      <div className="login">
        <div className="login-1">
          <span className="enter-email-or-user-name">
            Enter email or user name
          </span>
        </div>
        <div className="login-2">
          <span className="password">Password</span>
        </div>
        <div className="login-3">
          <div className="container-1">
            <div className="rectangle-5"></div>
            <span className="container-2">아이디 저장</span>
          </div>
          <div className="container">
            <div className="rectangle-6"></div>
            <span className="container-3">로그인 유지</span>
          </div>
        </div>
      </div>
      <div className="login-button">
        <div className="login-button-1">
          <span className="container-1">로그인</span>
        </div>
        <span className="container">
          아이디와 비밀번호는
          <br />
          관리자에게 문의 바랍니다.
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
