# 好貸智Plus+

這是一個多頁式貸款公司網站，旨在提供用戶方便的貸款資訊和申請流程。

## 專案結構

- `public/index.html`：網站的主 HTML 文件，包含基本的結構和引入的 CSS 和 JavaScript 檔案。
- `src/assets`：存放網站的靜態資源，如圖片和樣式表。
- `src/components/Navbar.tsx`：定義網站的橫向導覽列，包含首頁、關於我們、貸款方案、申辦流程、常見問題、聯絡我們的連結，以及一個「立即諮詢」的按鈕。
- `src/components/Button.tsx`：定義可重用的按鈕組件，支持自定義樣式和功能。
- `src/pages/Home.tsx`：首頁的內容和佈局。
- `src/pages/About.tsx`：關於我們頁面的內容和佈局。
- `src/pages/LoanPlans.tsx`：貸款方案頁面的內容和佈局。
- `src/pages/Process.tsx`：申辦流程頁面的內容和佈局。
- `src/pages/FAQ.tsx`：常見問題頁面的內容和佈局。
- `src/pages/Contact.tsx`：聯絡我們頁面的內容和佈局。
- `src/App.tsx`：應用程式的主要組件，負責路由設定和組件的渲染。
- `src/types/index.ts`：定義應用程式中使用的 TypeScript 類型和接口。
- `tsconfig.json`：TypeScript 的配置文件，指定編譯選項和要包含的文件。
- `package.json`：npm 的配置文件，列出專案的依賴和腳本。

## 安裝與使用

1. 克隆此專案到本地：
   ```
   git clone <repository-url>
   ```

2. 進入專案目錄：
   ```
   cd 好事貸發生GoodHappen
   ```

3. 安裝依賴：
   ```
   npm install
   ```

4. 啟動開發伺服器：
   ```
   npm start
   ```

## 貢獻

歡迎任何形式的貢獻！請提出問題或提交拉取請求。

## 授權

此專案採用 MIT 授權。詳情請參閱 LICENSE 文件。