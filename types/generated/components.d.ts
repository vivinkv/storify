import type { Schema, Struct } from '@strapi/strapi';

export interface BlogSectionBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_blog_sections';
  info: {
    description: '';
    displayName: 'blog_section';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
  };
}

export interface ContactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    address_1: Schema.Attribute.Text;
    address_2: Schema.Attribute.Text;
    contact_email: Schema.Attribute.Email;
    contact_number: Schema.Attribute.String;
    whatsapp_number: Schema.Attribute.String;
  };
}

export interface ContactNotification extends Struct.ComponentSchema {
  collectionName: 'components_contact_notifications';
  info: {
    displayName: 'Notification';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
  };
}

export interface ContactSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_contact_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    facebook_url: Schema.Attribute.String;
    instagram_url: Schema.Attribute.String;
    linkedin_url: Schema.Attribute.String;
    twitter_url: Schema.Attribute.String;
    youtube_url: Schema.Attribute.String;
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

export interface FaqHeading extends Struct.ComponentSchema {
  collectionName: 'components_faq_headings';
  info: {
    description: '';
    displayName: 'Main';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Frequently Asked Questions'>;
    list: Schema.Attribute.Component<'faq.faq', true>;
    sub_heading: Schema.Attribute.String;
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

export interface SettingsFooter extends Struct.ComponentSchema {
  collectionName: 'components_settings_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SettingsGeneral extends Struct.ComponentSchema {
  collectionName: 'components_settings_generals';
  info: {
    description: '';
    displayName: 'General';
  };
  attributes: {
    contact: Schema.Attribute.Component<'contact.contact', false>;
    google_map_embed_code: Schema.Attribute.String;
    google_map_url: Schema.Attribute.String;
    google_tag_manager: Schema.Attribute.Component<
      'settings.google-tag-manager-scripts',
      false
    >;
    notification: Schema.Attribute.Component<'contact.notification', true>;
    social_media: Schema.Attribute.Component<'contact.social-media', false>;
  };
}

export interface SettingsGoogleTagManagerScripts
  extends Struct.ComponentSchema {
  collectionName: 'components_settings_google_tag_manager_scripts';
  info: {
    displayName: 'Google Tag Manager Scripts';
  };
  attributes: {
    body_section: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    head_section: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    other_common_script: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SettingsHeader extends Struct.ComponentSchema {
  collectionName: 'components_settings_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-section.blog-section': BlogSectionBlogSection;
      'contact.contact': ContactContact;
      'contact.notification': ContactNotification;
      'contact.social-media': ContactSocialMedia;
      'faq.faq': FaqFaq;
      'faq.heading': FaqHeading;
      'photos.photoshoot-photos': PhotosPhotoshootPhotos;
      'seo.seo': SeoSeo;
      'settings.footer': SettingsFooter;
      'settings.general': SettingsGeneral;
      'settings.google-tag-manager-scripts': SettingsGoogleTagManagerScripts;
      'settings.header': SettingsHeader;
    }
  }
}
