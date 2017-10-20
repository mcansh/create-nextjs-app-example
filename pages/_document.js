import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class Page extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>create-nextjs-app-example</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width, viewport-fit=cover"
          />
          <meta
            name="description"
            content="undefined"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Page;