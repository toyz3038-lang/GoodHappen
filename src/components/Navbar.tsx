import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // 假設有一個 CSS 文件來樣式化導航欄

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><Link to="/">首頁</Link></li>
                <li><Link to="/about">關於我們</Link></li>
                <li><Link to="/loan-plans">貸款方案</Link></li>
                <li><Link to="/process">申辦流程</Link></li>
                <li><Link to="/faq">常見問題</Link></li>
                <li><Link to="/contact">聯絡我們</Link></li>
            </ul>
            <button className="navbar-button">立即諮詢</button>
        </nav>
    );
};

export default Navbar;