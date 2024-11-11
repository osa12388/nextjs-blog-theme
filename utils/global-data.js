export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Kamperem po Europie | Blog';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Blog o podróżowaniu po Europie. Kamperem i nie tylko';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
     : 'Wszystkie prawa zastrzeżone 2024-2025 | Więcej o nas';
   const footerTextEx = process.env.BLOG_FOOTER_TEXT_EX
    ? decodeURI(process.env.BLOG_FOOTER_TEXT_EX)
     : 'Wszystkie prawa zastrzeżone 2 2024-2025 ' ;
  
  return {
    name,
    blogTitle,
    footerText,
    footerTextEx,
  };
};
