import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  imgUrl: string;
  siteUrl: string;
}

const MetaTags = ({ title, description, imgUrl, siteUrl }: Props) => {
  return (
    <Head>
      <link rel="canonical" href={siteUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={imgUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl} />
    </Head>
  );
};

export default MetaTags;
