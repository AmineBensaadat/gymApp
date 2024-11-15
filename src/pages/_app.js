// src/pages/_app.js
import '@coreui/coreui/dist/css/coreui.min.css';  // CoreUI Styles
import '@coreui/icons/css/all.min.css';  // CoreUI Icons (optional)
import '../styles/scss/style.scss';


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
