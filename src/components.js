import { Col } from 'react-bootstrap';
import React from 'react';

export const SectionTitle = ({ title }) => (
  <>
    <div className="text-left">
      <span
        style={{
          marginBottom: 10,
          borderBottom: '1px solid',
          paddingBottom: 1,
          letterSpacing: -0.5,
          color: '#010012',
          fontWeight: 'bold'
        }}
      >
        {title}
      </span>
    </div>
    <div
      style={{
        height: 1,
        width: '100%',
        background: 'rgb(235,235,235)',
        marginBottom: 30
      }}
    ></div>
  </>
);

export const SectionSubTitle = ({ children, ico, id }) => (
  <Col
    id={id}
    xs="12"
    md="auto"
    style={{
      fontSize: '1.25rem',
      width: 150,
      letterSpacing: -1
    }}
    className="text-left font-weight-bold text-primary mb-4 pr-0"
  >
    {children}
  </Col>
);

export const ImageItem = ({ src, alt }) => (
  <Col xs="6" md="4" style={{ marginBottom: 30 }}>
    <img alt={alt || 'itemImage'} src={src} style={{ width: '100%' }} />
  </Col>
);

export const S1Ico = ({ src, alt }) => (
  <Col xs="auto" className="pr-0">
    <img alt={alt} src={src} style={{ width: 24, height: 24 }} />
  </Col>
);
export const S1Label = ({ children, className, color }) => (
  <Col
    xs="12"
    md="auto"
    style={{ width: 140, color }}
    className={'text-left font-weight-bold ' + className}
  >
    {children}
  </Col>
);

export const S1Content = ({ children, className, style }) => (
  <Col
    style={{ lineHeight: '1em', ...style }}
    className={'text-left font-weight-bold ' + className}
  >
    {children}
  </Col>
);

export const S2Content = ({ children, className, style }) => (
  <Col
    xs={12}
    // style={{ fontWeight: '500' }}
    className={'text-left  font-weight-bold ' + (className || '')}
  >
    {children}
  </Col>
);

export const S3Content = ({ children, className, style }) => (
  <Col
    xs="auto"
    style={{ margin: 10, ...style }}
    className={'text-left font-weight-bold ' + className}
  >
    {children}
  </Col>
);

export const FloatingBtn = ({ alt, src, onClick, style }) => (
  <div className="mb-2 " onClick={onClick}>
    <img
      className="floating-btn"
      alt={alt || ''}
      src={src}
      style={{
        ...style
      }}
    />
  </div>
);

export const BannerBtn = ({ alt, style, ...props }) => (
  <img
    {...props}
    alt={alt}
    style={{ width: '12vw', cursor: 'pointer', style }}
  />
);

export const CollapseBtn = ({ alt, src, title, className, url }) => {
  return (
    <a
      className={`collapse-btn mb-2 ${title ? 'collapse-btn-with-title' : ''} ${
        className ? className : ''
      }`}
      href={url}
      rel="noopener noreferrer"
      style={{ color: '#fff', textDecoration: 'none' }}
      target="_blank"
    >
      <img alt={alt} src={src} />
      {title && <span>{title}</span>}
    </a>
  );
};

export const CollapseMobileBtn = ({ alt, src, title, className, onClick }) => {
  return (
    <>
      <div
        className={`collapse-btn collapse-m-btn bg-white mb-2 ${
          className ? className : ''
        }`}
        onClick={onClick}
      >
        {title && <span>{title}</span>}
        <img alt={alt} src={src} />
      </div>
    </>
  );
};
