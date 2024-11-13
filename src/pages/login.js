// src/pages/login.js
import { useState } from 'react';
import { CCard, CCardBody, CCardFooter, CForm, CFormInput, CButton, CContainer, CRow, CCol } from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { useRouter } from 'next/router';
import { login } from '../services/authService'; // Assuming you created the authService

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    console.log(15)
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const user = await login(username, password);
      // Store user info or token (e.g., in localStorage or context)
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/dashboard'); // Redirect to dashboard after successful login
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };
  return (
    <CContainer className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <h3 className="text-center">Login</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormInput
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <CButton type="submit" color="primary" block={String(true)}>
                  <CIcon icon={cilUser} className="me-2" />
                  Login
                </CButton>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center">
              Don't have an account? <a href="/register">Register</a>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default LoginPage;
