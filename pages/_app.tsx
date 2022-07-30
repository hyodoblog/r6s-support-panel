import "ress";
import "~/styles/globals.scss";
import "~/styles/custom.scss";

import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";

import { createEmotionCache } from "~/cache";
import { theme } from "~/theme";
import { DefaultLayout } from "~/layouts/Default";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
  router,
}: MyAppProps): JSX.Element {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <DefaultLayout>
          <Component {...pageProps} key={router.asPath} />
        </DefaultLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
