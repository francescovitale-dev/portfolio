import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Francesco Vitale - Software Developer',
  description = 'Software Developer specializing in modern web development. Expert in React, JavaScript, and innovative web solutions.',
  image = 'https://raw.githubusercontent.com/francescovitale-dev/portfolio/refs/heads/main/src/assets/images/og_image.png',
  url = 'https://www.vitalefrancesco.com/',
  type = 'website',
  siteName = 'Vitale Francesco'
}) => {
  const fullTitle = title === 'Francesco Vitale - Software Developer' ? title : `${title} | Francesco Vitale`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="web development, React developer, JavaScript expert, software development, portfolio, frontend developer, full stack developer, web applications, custom software solutions, UI/UX design, responsive design, modern web development" />
      <meta name="author" content="Francesco Vitale" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Vitale Francesco Picture" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 