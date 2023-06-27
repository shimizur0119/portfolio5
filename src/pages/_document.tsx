import { Html, Head, Main, NextScript } from "next/document";

import type { GtmId } from "@/components/GtmScript";

export default function Document() {
  const gtmId = (process.env.NEXT_PUBLIC_GTM_ID as GtmId) || "";
  return (
    <Html>
      <Head />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
