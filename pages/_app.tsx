import "@/styles/main.scss";
import Layout from "@/components/Layout";
import AuthContext from "@/components/AuthContext";
import Script from "next/script";

function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="afterInteractive"
        data-cf-beacon='{"token":"81f90747808b4b718ff9e8fb83e659dd"}'
      />

      <AuthContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContext>
    </>
  );
}

export default App;
