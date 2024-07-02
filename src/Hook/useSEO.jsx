import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const useSEO = ({ title, description, keywords, url, image }) => {
  useEffect(() => {
    // Ensure title is updated when component mounts or updates
    document.title = title;

    // Handle meta description
    let descriptionMetaTag = document.querySelector('meta[name="description"]');
    if (!descriptionMetaTag) {
      descriptionMetaTag = document.createElement('meta');
      descriptionMetaTag.name = 'description';
      document.head.appendChild(descriptionMetaTag);
    }
    descriptionMetaTag.content = description;

    // Handle meta keywords
    let keywordsMetaTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsMetaTag) {
      keywordsMetaTag = document.createElement('meta');
      keywordsMetaTag.name = 'keywords';
      document.head.appendChild(keywordsMetaTag);
    }
    keywordsMetaTag.content = keywords;

    // Handle canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

    // Handle Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: image }
    ];

    ogTags.forEach(({ property, content }) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    });

    // Handle Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];

    twitterTags.forEach(({ name, content }) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    });

    // Handle viewport meta tag
    let viewportMetaTag = document.querySelector('meta[name="viewport"]');
    if (!viewportMetaTag) {
      viewportMetaTag = document.createElement('meta');
      viewportMetaTag.name = 'viewport';
      viewportMetaTag.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(viewportMetaTag);
    }
  }, [title, description, keywords, url, image]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};

export default useSEO;
