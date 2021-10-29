import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link href="https://fonts.gstatic.com" crossOrigin="true" rel="preconnect" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Mulish:wght@600&family=Nunito:wght@300;400;700&family=Roboto:wght@400;500;700&family=Bebas+Neue&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-white font-jcSubHeading text-base leading-7'>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument