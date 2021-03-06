// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap"
            rel="stylesheet"
          />
          <style>
            {`
              * {
                font-family: 'Open Sans', sans-serif;
                box-sizing : border-box ;
              }
              a{
                text-decoration : none ;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
