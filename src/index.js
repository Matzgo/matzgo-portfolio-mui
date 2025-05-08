import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


root.render(
  <div className="application">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Matzgo Portfolio</title>
      <link rel="canonical" href="http://matzgo.com/" />

      {/* SEO Meta Tags */}
      <meta name="description" content="Matzgo, Game Developer. Portfolio showcasing a range of projects developed over the last few years." />
      <meta name="keywords" content="portfolio, developer, programmer, Matzgo, game development, software development, siegebound, game" />

    {/* Open Graph Meta Tags (for social media sharing) */}
    <meta property="og:title" content="Matzgo Portfolio" />
    <meta property="og:description" content="Matzgo, Game Developer. Portfolio showcasing a range of projects developed over the last few years." />
    <meta property="og:url" content="http://matzgo.com/" />
    <meta property="og:type" content="website" />

    {/* Additional Meta Tags */}
    <meta name="author" content="Matzgo" />
    <meta name="robots" content="index, follow" />
    </Helmet>
    <ThemeProvider theme={theme} >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </ThemeProvider>
    
  </div>
);
