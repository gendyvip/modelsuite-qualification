export const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
};

export const isEmptyRichText = (html) => stripHtml(html).length === 0;
