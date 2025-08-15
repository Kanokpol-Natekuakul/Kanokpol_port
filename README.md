# Portfolio Website - กนกพล เนตรเกื้อกูล

เว็บไซต์ Portfolio ส่วนตัวที่สร้างด้วย React และ Tailwind CSS พร้อมระบบ deployment อัตโนมัติ

## 🚀 เทคโนโลยีที่ใช้

### Frontend
- **React 19.1.0** - JavaScript library สำหรับสร้าง user interface
- **React DOM 19.1.0** - สำหรับ render React components
- **React Icons 5.5.0** - ไลบรารีไอคอนสำหรับ React

### Styling
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **@tailwindcss/vite** - Tailwind CSS plugin สำหรับ Vite

### Build Tools
- **Vite 7.0.4** - Build tool และ development server
- **@vitejs/plugin-react** - React plugin สำหรับ Vite

### Code Quality
- **ESLint 9.30.1** - JavaScript linter
- **eslint-plugin-react-hooks** - ESLint rules สำหรับ React Hooks
- **eslint-plugin-react-refresh** - ESLint rules สำหรับ HMR

### Deployment
- **GitHub Pages** - สำหรับ host website
- **GitHub Actions** - CI/CD pipeline สำหรับ auto-deployment

## 📦 การติดตั้ง

### ความต้องการของระบบ
- Node.js 20 หรือสูงกว่า
- npm หรือ yarn

### ขั้นตอนการติดตั้ง

1. **Clone repository**
   ```bash
   git clone https://github.com/Kanokpol-Natekuakul/Kanokpol_port.git
   cd Kanokpol_port
   ```

2. **ติดตั้ง dependencies**
   ```bash
   npm install
   ```

3. **เริ่ม development server**
   ```bash
   npm run dev
   ```

4. **เปิดเว็บไซต์ในเบราว์เซอร์**
   ```
   http://localhost:5173
   ```

## 🛠️ คำสั่งที่สำคัญ

```bash
# เริ่ม development server
npm run dev

# Build โปรเจคสำหรับ production
npm run build

# ตรวจสอบ code ด้วย ESLint
npm run lint

# Preview build ใน local
npm run preview

# Deploy ไป GitHub Pages (manual)
npm run deploy
```

## 🚀 การ Deploy

### Auto Deployment (แนะนำ)
โปรเจคนี้ใช้ GitHub Actions สำหรับ auto-deployment เมื่อมีการ push ไป branch `main`:

1. Push code ไป GitHub repository
2. GitHub Actions จะ build และ deploy อัตโนมัติ
3. เว็บไซต์จะอัปเดตที่ `https://kanokpol-natekuakul.github.io/Kanokpol_port/`

### Manual Deployment
```bash
npm run predeploy  # Build โปรเจค
npm run deploy     # Deploy ไป GitHub Pages
```

## 📁 โครงสร้างโปรเจค

```
├── .github/
│   └── workflows/
│       └── deploy-to-gh-pages.yml  # GitHub Actions workflow
├── public/
│   └── vite.svg                    # Static assets
├── src/
│   └── main.jsx                    # Entry point
├── .gitignore                      # Git ignore rules
├── eslint.config.js                # ESLint configuration
├── index.html                      # HTML template
├── package.json                    # Dependencies และ scripts
├── README.md                       # เอกสารนี้
└── vite.config.js                  # Vite configuration
```

## ⚙️ การตั้งค่า

### Vite Configuration
- Base URL: `/Kanokpol_port/` (สำหรับ GitHub Pages)
- Plugins: React และ Tailwind CSS

### ESLint Configuration
- JavaScript/JSX support
- React Hooks rules
- React Refresh rules
- Custom rules สำหรับ unused variables

## 🌐 Demo

เยี่ยมชมเว็บไซต์ได้ที่: [https://kanokpol-natekuakul.github.io/Kanokpol_port/](https://kanokpol-natekuakul.github.io/Kanokpol_port/)

## 📝 การพัฒนา

### การเพิ่มหน้าใหม่
1. สร้างไฟล์ component ใหม่ใน `src/components/`
2. Import และใช้งานใน `src/App.jsx`
3. ใช้ Tailwind CSS classes สำหรับ styling

### การใช้ Icons
```jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function MyComponent() {
  return (
    <div>
      <FaGithub className="text-2xl" />
      <FaLinkedin className="text-2xl" />
    </div>
  );
}
```

### การใช้ Tailwind CSS
```jsx
function MyComponent() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors">
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  );
}
```

## 🙏 Credits

โปรเจคนี้ได้รับแรงบันดาลใจและอ้างอิงจาก:
- **Original Template:** [ISHAQ98/my-personal-portfolio](https://github.com/ISHAQ98/my-personal-portfolio)
- ขขอบคุณ ISHAQ98 สำหรับ template และไอเดียที่ยอดเยี่ยม

## 🤝 การมีส่วนร่วม

หากต้องการแจ้งปัญหาหรือเสนอแนะ สามารถสร้าง Issue ใน GitHub repository ได้

## 📄 License

โปรเจคนี้เป็น open source และใช้ภายใต้ MIT License

---

**พัฒนาโดย:** กนกพล เนตรเกื้อกูล  
**Repository:** [GitHub](https://github.com/Kanokpol-Natekuakul/Kanokpol_port)  
**Based on:** [ISHAQ98/my-personal-portfolio](https://github.com/ISHAQ98/my-personal-portfolio)
