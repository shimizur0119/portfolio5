// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import type { Asset, Entry } from "contentful";

export interface IWorksFields {
  /** date */
  date?: string | undefined;

  /** description */
  description?: string | undefined;

  /** img */
  img?: Asset | undefined;

  /** title */
  title?: string | undefined;

  /** url */
  url?: string | undefined;
}

export interface IWorks extends Entry<IWorksFields> {
  sys: {
    contentType: {
      sys: {
        id: "works";
        linkType: "ContentType";
        type: "Link";
      };
    };
    createdAt: string;
    id: string;
    locale: string;
    type: string;
    updatedAt: string;
  };
}

export type CONTENT_TYPE = "works";

export type IEntry = IWorks;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
