import { isEmptyRichText } from '../../utils/richText';

const RichTextContent = ({ html, className = '' }) => {
  if (!html || isEmptyRichText(html)) return null;

  return (
    <div
      className={`rich-text-content ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default RichTextContent;
