declare namespace API {
  export interface SEOComponent {
    metaTitle?: string;
    metaDescription?: string;
    metaImage?: string;
    keywords?: string;
  }

  export interface Page {
    title: string;
    seo: SEOComponent;
    blocks: Array<any>;
  }
}
