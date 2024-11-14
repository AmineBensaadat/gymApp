// src/pages/login.js
import { useState } from 'react';
import { CCard, CCardBody, CCardFooter, CForm, CFormInput, CButton, CContainer, CRow, CCol, CCardGroup } from '@coreui/react';
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
  
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login(username, password);
      // Store user info or token (e.g., in localStorage or context)
      const token = response.token;
      localStorage.setItem('user', JSON.stringify(response));
      localStorage.setItem('authToken', token); // Store the token in localStorage
      if (token) {
        window.location.href = '/dashboard'; // Redirect to dashboard after login
      }
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
