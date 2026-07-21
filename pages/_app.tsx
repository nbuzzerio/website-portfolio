import "@/styles/main.scss";
import Layout from "@/components/Layout";
import AuthContext from "@/components/AuthContext";
import { GA_MEASUREMENT_ID } from "@/lib/analytics/analytics";
import Script from "next/script";

function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="afterInteractive"
        data-cf-beacon='{"token":"81f90747808b4b718ff9e8fb83e659dd"}'
      />

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>

      <AuthContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContext>
    </>
  );
}

export default App;
