"use client";

import Script from "next/script";

export default function Scripts() {
  return (
    <>
      {/* jQuery MUST be first */}
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        strategy="afterInteractive"
      />

      {/* Bootstrap */}
      <Script
        src="/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      {/* Plugins */}
      <Script
        src="/js/owl.carousel.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/js/custom.js"
        strategy="afterInteractive"
      />
    </>
  );
}
