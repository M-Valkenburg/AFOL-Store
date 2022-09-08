import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);