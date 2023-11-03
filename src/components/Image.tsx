import { CSSProperties } from 'react';

interface Props {
  src: string;
  alt: string;
  style?: CSSProperties;
  className?: string;
}

export const Image = ({ src, alt, style, className = '' }: Props) => (
  <div
    className={`r-stretch ${className}`}
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      ...style,
    }}
  >
    <img
      data-src={src}
      alt={alt}
      style={{ display: 'block', height: 'inherit', objectFit: 'scale-down' }}
    />
  </div>
);
