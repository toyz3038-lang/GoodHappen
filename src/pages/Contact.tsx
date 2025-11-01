import React from 'react';

const Contact: React.FC = () => {
    return (
        <div>
            <h1>聯絡我們</h1>
            <p>如果您有任何問題或需要進一步的資訊，請隨時聯絡我們。</p>
            <form>
                <div>
                    <label htmlFor="name">姓名:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">電子郵件:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">訊息:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">提交</button>
            </form>
        </div>
    );
};

export default Contact;