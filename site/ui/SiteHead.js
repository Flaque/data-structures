import Head from 'next/head';
export default({
  titleText
}) => (
  <Head>
    <title>{titleText}</title>
    <link rel="stylesheet" type="text/css" href="/static/spectre-exp.min.css"/>
    <link rel="stylesheet" type="text/css" href="/static/spectre-icons.min.css"/>
    <link rel="stylesheet" type="text/css" href="/static/spectre.min.css"/> 
  </Head>
)
