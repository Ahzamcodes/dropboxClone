'use client';

import Script from 'next/script';

export default function WebFontLoader() {
  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
        strategy="beforeInteractive"
      />
      <Script
        id="webfont-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            WebFont.load({
              google: {
                families: ["Noto Sans Mono:regular,500"]
              }
            });
          `,
        }}
      />
    </>
  );
} 