import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-status-bar" content="#7649F9" />
          <meta name="theme-color" content="#7649F9" />
          <link rel="apple-touch-icon" href="https://pogy.gg/favicon.ico" />
          <meta name="title" content="Pogy - Coming Soon" />
          <meta
            name="description"
            content="Unlock the full potential of your Discord server with Pogy - the ultimate, fully customizable and multipurpose Discord bot. Impress your friends and community with Pogy's wide range of features and commands, from fun and entertainment to useful utilities. Pogy is the most flexible Discord bot available and will give you the power to make your server unique. Upgrade your server today with Pogy and take your community to the next level!"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://pogy.gg/" />
          <meta property="og:title" content="Pogy - Coming Soon" />
          <meta
            property="og:description"
            content="Unlock the full potential of your Discord server with Pogy - the ultimate, fully customizable and multipurpose Discord bot. Impress your friends and community with Pogy's wide range of features and commands, from fun and entertainment to useful utilities. Pogy is the most flexible Discord bot available and will give you the power to make your server unique. Upgrade your server today with Pogy and take your community to the next level!"
          />
          <meta property="og:image" content="https://pogy.gg/soon.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://pogy.gg/" />
          <meta property="twitter:title" content="Pogy - Coming Soon" />
          <meta
            property="twitter:description"
            content="Unlock the full potential of your Discord server with Pogy - the ultimate, fully customizable and multipurpose Discord bot. Impress your friends and community with Pogy's wide range of features and commands, from fun and entertainment to useful utilities. Pogy is the most flexible Discord bot available and will give you the power to make your server unique. Upgrade your server today with Pogy and take your community to the next level!"
          />
          <meta property="twitter:image" content="https://pogy.gg/soon.png" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta property="og:type" content="website" />
          <meta property="og:color" content="#7649F9" />
          <link rel="canonical" href="https://pogy.gg/" />
          <link rel="icon" type="image/x-icon" href="https://pogy.gg/favicon.ico" />
          <noscript>Please enable JavaScript to view the site</noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
