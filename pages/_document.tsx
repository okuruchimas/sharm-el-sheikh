import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/favicon/apple-touch-icon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon/favicon-32x32.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon/favicon-16x16.svg"
        />
        <meta
          name="google-site-verification"
          content="f7HcZSyaucjIeystLdWIZ0zO4v45MQArSp6M3ZvYKVM"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta
          property="og:title"
          content="Sharm Explorer – Discover the Best of Sharm El Sheikh"
        />
        <meta
          property="og:description"
          content="Helping travelers discover the best places in Sharm El Sheikh. Find top restaurants, beaches, hotels, and attractions with our tips and recommendations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.go-go.live" />
        <meta
          property="og:image"
          content="https://www.go-go.live/images/business-card.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sharm Explorer – Discover the Best of Sharm El Sheikh"
        />
        <meta
          name="twitter:description"
          content="Helping travelers find top places to eat, relax, and explore in Sharm El Sheikh."
        />
        <meta
          name="twitter:image"
          content="https://www.go-go.live/images/business-card.png"
        />

        <link rel="canonical" href="https://www.go-go.live" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
