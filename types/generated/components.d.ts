import type { Schema, Struct } from '@strapi/strapi';

export interface BlogSectionBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_section_blog_sections';
  info: {
    description: '';
    displayName: 'blog_section';
  };
  attributes: {
    Content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Heading: Schema.Attribute.String;
  };
}

export interface ContactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    Address_1: Schema.Attribute.Text;
    Address_2: Schema.Attribute.Text;
    Contact_Email: Schema.Attribute.Email;
    Contact_Number: Schema.Attribute.String;
    WhatsApp_Number: Schema.Attribute.String;
  };
}

export interface ContactNotification extends Struct.ComponentSchema {
  collectionName: 'components_contact_notifications';
  info: {
    displayName: 'Notification';
  };
  attributes: {
    Email: Schema.Attribute.Email & Schema.Attribute.Required;
  };
}

export interface ContactSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_contact_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    Facebook_URL: Schema.Attribute.String;
    Instagram_URL: Schema.Attribute.String;
    Linkedin_URL: Schema.Attribute.String;
    Twitter_URL: Schema.Attribute.String;
    Youtube_URL: Schema.Attribute.String;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    description: '';
    displayName: 'faq';
  };
  attributes: {
    Answer: Schema.Attribute.Text & Schema.Attribute.Required;
    Publish: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FaqHeading extends Struct.ComponentSchema {
  collectionName: 'components_faq_headings';
  info: {
    description: '';
    displayName: 'Main';
  };
  attributes: {
    Heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Frequently Asked Questions'>;
    List: Schema.Attribute.Component<'faq.faq', true>;
    Sub_Heading: Schema.Attribute.String;
  };
}

export interface PhotosPhotoshootPhotos extends Struct.ComponentSchema {
  collectionName: 'components_photos_photoshoot_photos';
  info: {
    displayName: 'Photoshoot Photos';
  };
  attributes: {
    Attachment: Schema.Attribute.Media<'images' | 'files'>;
    Dimension: Schema.Attribute.Enumeration<
      ['Portrait', 'Landscape', 'Square']
    >;
    Priority: Schema.Attribute.Integer;
    Title: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    Meta_Description: Schema.Attribute.Text;
    Meta_Keywords: Schema.Attribute.Text;
    Meta_Title: Schema.Attribute.String;
    OG_Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SettingsFooter extends Struct.ComponentSchema {
  collectionName: 'components_settings_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    Content: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SettingsGeneral extends Struct.ComponentSchema {
  collectionName: 'components_settings_generals';
  info: {
    description: '';
    displayName: 'General';
  };
  attributes: {
    Contact: Schema.Attribute.Component<'contact.contact', false>;
    Google_Map_Embed_Code: Schema.Attribute.String;
    Google_Map_URL: Schema.Attribute.String;
    Google_Tag_Manager: Schema.Attribute.Component<
      'settings.google-tag-manager-scripts',
      false
    >;
    Notification: Schema.Attribute.Component<'contact.notification', true>;
    Social_Media: Schema.Attribute.Component<'contact.social-media', false>;
  };
}

export interface SettingsGoogleTagManagerScripts
  extends Struct.ComponentSchema {
  collectionName: 'components_settings_google_tag_manager_scripts';
  info: {
    displayName: 'Google Tag Manager Scripts';
  };
  attributes: {
    Body_Section: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Head_Section: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Other_Common_Script: Schema.Attribute.RichText &
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
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String;
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
