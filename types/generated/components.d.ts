import type { Schema, Struct } from '@strapi/strapi';

export interface BlogSectionBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_blog_sections';
  info: {
    displayName: 'blog_section';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    description: '';
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    publish: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PhotosPhotoshootPhotos extends Struct.ComponentSchema {
  collectionName: 'components_photos_photoshoot_photos';
  info: {
    displayName: 'Photoshoot Photos';
  };
  attributes: {
    attachment: Schema.Attribute.Media<'images' | 'files'>;
    dimension: Schema.Attribute.Enumeration<
      ['Portrait', 'Landscape', 'Square']
    >;
    priority: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    meta_description: Schema.Attribute.Text;
    meta_keywords: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
    og_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-section.blog-section': BlogSectionBlogSection;
      'faq.faq': FaqFaq;
      'photos.photoshoot-photos': PhotosPhotoshootPhotos;
      'seo.seo': SeoSeo;
    }
  }
}
