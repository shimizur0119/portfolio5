import Script from "next/script";

export type GtmId = `GTM-${string}`;

type Props = {
  gtmId: GtmId;
};

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function GtmScript({ gtmId }: Props) {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
      }}
      id="gtm"
      strategy="afterInteractive"
    />
  );
}
