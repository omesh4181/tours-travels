import React, { useState } from 'react';
import { BsEnvelopeFill, BsLockFill, BsEyeSlashFill, BsEyeFill, BsGoogle, BsFacebook, BsAirplaneFill, BsMap } from 'react-icons/bs';
import './LoginPage.css';
import {Link} from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

const navigateToDashboard = () => {
    // Replace '/dashboard' with the path to your dashboard or desired page
    window.location.href = '/dashboard';
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
    navigateToDashboard();
};
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left side - Branding */}
        <div className="login-left">
          <div className="login-left-content">
            <h1>Wonder's Travel</h1>
            <p>Discover amazing destinations around the world</p>
            <div className="travel-illustration">
              <BsAirplaneFill className="travel-icon" />
              <div className="travel-path"></div>
              <BsMap className="travel-icon" />
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="login-right">
          <div className="login-form-container">
            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Please login to continue your journey</p>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-group">
                  <BsEnvelopeFill className="input-icon" />
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-group">
                  <BsLockFill className="input-icon" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="password-toggle" onClick={togglePasswordVisibility}>
                    {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </div>
                </div>
              </div>
              
              <div className="form-extras">
                <div className="remember-me">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>
              
                <Link to='/home'><button type="submit" className="login-btn">Login</button></Link>
            
              
              <div className="separator">
                <span>or continue with</span>
              </div>
              
              <div className="social-login">
                <button type="button" className="social-btn google">
                  <BsGoogle />
                  <span>Google</span>
                </button>
                <button type="button" className="social-btn facebook">
                  <BsFacebook />
                  <span>Facebook</span>
                </button>
              </div>
              <Link to='/Signup'>
                <p className="signup-link">
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

// import React, { useState } from 'react';
// // import './AuthStyles.css';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     username: ''
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       console.log('Login submitted:', { email: formData.email, password: formData.password });
//       // Add your login logic here
//     } else {
//       if (formData.password !== formData.confirmPassword) {
//         alert("Passwords don't match!");
//         return;
//       }
//       console.log('Signup submitted:', formData);
//       // Add your signup logic here
//     }
//   };
  
//   const toggleAuthMode = () => {
//     setIsLogin(!isLogin);
//     // Clear form data when switching modes
//     setFormData({
//       email: '',
//       password: '',
//       confirmPassword: '',
//       username: ''
//     });
//   };
  
//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <div className="auth-header">
//           <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//           <p>{isLogin ? 'Welcome back!' : 'Create a new account'}</p>
//         </div>
        
//         <form className="auth-form" onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}
          
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
          
//           {!isLogin && (
//             <div className="form-group">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           )}
          
//           {isLogin && (
//             <div className="forgot-password">
//               <a href="#forgot">Forgot password?</a>
//             </div>
//           )}
          
//           <button type="submit" className="auth-button">
//             {isLogin ? 'Login' : 'Sign Up'}
//           </button>
//         </form>
        
//         <div className="auth-footer">
//           <p>
//             {isLogin ? "Don't have an account? " : "Already have an account? "}
//             <button className="toggle-button" onClick={toggleAuthMode}>
//               {isLogin ? 'Sign Up' : 'Login'}
//             </button>
//           </p>
//         </div>
        
//         <div className="social-auth">
//           <p>Or continue with</p>
//           <div className="social-buttons">
//             <button className="social-button">
//               <i className="icon">G</i> Google
//             </button>
//             <button className="social-button">
//               <i className="icon">F</i> Facebook
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;