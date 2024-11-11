export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Kamperem po Europie | Blog';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next.js Blog Theme';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Wszystkie prawa zastrzeżone 2024-2025 | Więcej o nas';
     : 'Wszystkie prawa zastrzeżone 2024-2025 | Więcej o nas';

  return {
    name,
    blogTitle,
    footerText,
  };
};
