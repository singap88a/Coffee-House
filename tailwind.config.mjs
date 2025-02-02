/* @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // إضافة ألوان مخصصة
        primary: "#D78325",
        secondary: "#394034",
        accent: "#e3342f",
        text_color:"#69370b"
        // يمكنك إضافة المزيد من الألوان هنا
      },
      screens: {
        xs: "480px", // شاشة صغيرة جدًا
        sm: "640px", // شاشة صغيرة
        md: "768px", // شاشة متوسطة
        lg: "1024px", // شاشة كبيرة
        xl: "1280px", // شاشة أكبر
        "2xl": "1536px", // شاشة ضخمة
        // يمكنك إضافة المزيد من الشاشات هنا حسب الحاجة
      },
    },
  },
  plugins: [],
};
