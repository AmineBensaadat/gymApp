// src/pages/_app.js
import '@coreui/coreui/dist/css/coreui.min.css';  // CoreUI Styles
import '@coreui/icons/css/all.min.css';  // CoreUI Icons (optional)
import '../styles/globals.css';  // Your custom global styles

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
