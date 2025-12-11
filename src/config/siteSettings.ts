export interface DesignTokens {
  colors: {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
      inverse: string;
    };
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  typography: {
    fontFamily: {
      sans: string;
      serif: string;
      mono: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: string;
      normal: string;
      relaxed: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface SiteSettings {
  siteName: string;
  siteTagline: string;
  siteDescription: string;
  siteUrl: string;
  logo: {
    type: 'text' | 'image';
    text: string;
    image: string;
    favicon: string;
    showText: boolean;
    width: number;
    height: number;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    defaultImage: string;
    keywords: string[];
    language: string;
    locale: string;
    themeColor: string;
    robots: string;
    twitterHandle: string;
    twitterCardType: 'summary' | 'summary_large_image' | 'app' | 'player';
    facebookAppId: string;
    googleSiteVerification: string;
    bingSiteVerification: string;
    googleAnalyticsId: string;
    author: string;
    publisher: string;
    copyrightYear: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    github: string;
    youtube: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  features: {
    enableSearch: boolean;
    enableCategories: boolean;
    enableTags: boolean;
    enableComments: boolean;
    enableNewsletter: boolean;
    enableRss: boolean;
    postsPerPage: number;
    relatedPostsCount: number;
  };
}

export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

export interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'facebook' | 'instagram' | 'github' | 'youtube';
  url: string;
  label: string;
}

export interface ContentDefaults {
  navigation: {
    header: NavItem[];
    footer: FooterLinkGroup[];
  };
  socialLinks: SocialLink[];
  homepage: {
    heroTitle: string;
    heroSubtitle: string;
    featuredSectionTitle: string;
    latestSectionTitle: string;
  };
  blog: {
    title: string;
    description: string;
    emptyStateMessage: string;
  };
  categories: {
    id: string;
    name: string;
    color: string;
  }[];
}

export interface SiteConfig {
  designTokens: DesignTokens;
  siteSettings: SiteSettings;
  contentDefaults: ContentDefaults;
}

const siteConfig: SiteConfig = {
  designTokens: {
    colors: {
      primary: '#5E3917',
      primaryHover: '#5E3917',
      primaryLight: '#FFF1F2',
      secondary: '#1F2937',
      accent: '#5E3917',
      background: '#F9FAFB',
      surface: '#FFFFFF',
      text: {
        primary: '#111827',
        secondary: '#4B5563',
        muted: '#9CA3AF',
        inverse: '#FFFFFF',
      },
      border: '#E5E7EB',
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
    typography: {
      fontFamily: {
        sans: 'Inter, system-ui, -apple-system, sans-serif',
        serif: 'Georgia, Cambria, serif',
        mono: 'Menlo, Monaco, Consolas, monospace',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    borderRadius: {
      none: '0',
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    },
  },

  siteSettings: {
    siteName: 'Fitspreso Coffee',
    siteTagline: 'Brew Better, Live Better',
    siteDescription: 'Fitspreso Coffee adalah platform pecinta kopi yang menghadirkan berbagai panduan, resep, dan insight seputar espresso, kopi specialty, dan dunia barista rumahan. Kami menyediakan informasi terbaik mulai dari cara membuat espresso yang sempurna, memilih biji kopi berkualitas, hingga tips merawat mesin kopi. Temukan inspirasi, edukasi, dan pengalaman ngopi yang lebih sehat, praktis, dan premium bersama Fitspreso Coffee.',
    siteUrl: 'https://fitspresocoffee.com',
    logo: {
      type: 'image',
      text: 'Fitspreso Coffee',
      image: '/image/generated-image-december-11-2025-12-24pm-removebg-preview.png',
      favicon: '/image/generated-image-december-11-2025-12-24pm-removebg-preview.png',
      showText: true,
      width: 32,
      height: 32,
    },
    seo: {
      defaultTitle: 'Fitspreso Coffee',
      titleTemplate: '%s | Fitspreso Coffee',
      defaultDescription: 'Fitspreso Coffee adalah platform pecinta kopi yang menghadirkan berbagai panduan, resep, dan insight seputar espresso, kopi specialty, dan dunia barista rumahan. Kami menyediakan informasi terbaik mulai dari cara membuat espresso yang sempurna, memilih biji kopi berkualitas, hingga tips merawat mesin kopi. Temukan inspirasi, edukasi, dan pengalaman ngopi yang lebih sehat, praktis, dan premium bersama Fitspreso Coffee.A center for all our resources & insights. Stay updated with the latest in technology, design, and business.',
      defaultImage: '/image/generated-image-december-11-2025-12-24pm-removebg-preview.png',
      keywords: ['blog', 'technology', 'design', 'business', 'insights', 'articles'],
      language: 'id',
      locale: 'id_ID',
      themeColor: '#5E3917',
      robots: 'index, follow',
      twitterHandle: '@fitspresocoffee',
      twitterCardType: 'summary_large_image',
      facebookAppId: '',
      googleSiteVerification: '',
      bingSiteVerification: '',
      googleAnalyticsId: '',
      author: 'Fitspresocoffee Team',
      publisher: 'fitspresocoffee',
      copyrightYear: '2025',
    },
    social: {
      twitter: 'https://twitter.com/fitspresocoffee',
      linkedin: 'https://linkedin.com/company/fitspresocoffee',
      facebook: 'https://facebook.com/fitspresocoffee',
      instagram: 'https://instagram.com/fitspresocoffee',
      github: '',
      youtube: 'https://youtube.com/@fitspresocoffee',
    },
    contact: {
      email: 'hello@fitspresocoffee.com',
      phone: '+6281535272063',
      address: 'Jalan Lingkar Utara , Tasikmalaya , Jawa Barat , Indonesia',
    },
    features: {
      enableSearch: true,
      enableCategories: true,
      enableTags: true,
      enableComments: false,
      enableNewsletter: false,
      enableRss: true,
      postsPerPage: 9,
      relatedPostsCount: 3,
    },
  },

  contentDefaults: {
    navigation: {
      header: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/blog', label: 'Blogs' },
        { href: '/contact', label: 'Contact Us' },
      ],
      footer: [
        {
          title: 'Company',
          links: [
            { href: '/about', label: 'About Us' },
            { href: '/careers', label: 'Careers' },
            { href: '/press', label: 'Press' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { href: '/blog', label: 'Blog' },
            { href: '/guides', label: 'Guides' },
            { href: '/help', label: 'Help Center' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/terms', label: 'Terms of Service' },
            { href: '/disclaimer', label: 'Disclaimer' },
          ],
        },
      ],
    },
    socialLinks: [
      { platform: 'twitter', url: 'https://twitter.com/riven', label: 'Twitter' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/riven', label: 'LinkedIn' },
      { platform: 'facebook', url: 'https://facebook.com/riven', label: 'Facebook' },
    ],
    homepage: {
      heroTitle: 'Our Blogs',
      heroSubtitle: 'A center for all our resources & insights',
      featuredSectionTitle: 'Featured Post',
      latestSectionTitle: 'Latest Articles',
    },
    blog: {
      title: 'Blog',
      description: 'Explore our latest articles and insights',
      emptyStateMessage: 'No posts found. Check back later!',
    },
    categories: [
      { id: 'technology', name: 'Technology', color: '#3B82F6' },
      { id: 'design', name: 'Design', color: '#8B5CF6' },
      { id: 'research', name: 'Research', color: '#10B981' },
      { id: 'management', name: 'Management', color: '#F59E0B' },
      { id: 'customer-success', name: 'Customer Success', color: '#EC4899' },
    ],
  },
};

export default siteConfig;

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}

export function getDesignTokens(): DesignTokens {
  return siteConfig.designTokens;
}

export function getSiteSettings(): SiteSettings {
  return siteConfig.siteSettings;
}

export function getContentDefaults(): ContentDefaults {
  return siteConfig.contentDefaults;
}

export function getNavigation() {
  return siteConfig.contentDefaults.navigation;
}

export function getSocialLinks() {
  return siteConfig.contentDefaults.socialLinks;
}

export function getCategories() {
  return siteConfig.contentDefaults.categories;
}
