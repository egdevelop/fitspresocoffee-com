let adsenseConfig: AdsenseConfig = {
  enabled: false,
  publisherId: "",
  autoAdsEnabled: false,
  headerScript: "",
  adCodes: {}
};

try {
  // @ts-ignore
  const imported = await import('../config/adsense.json');
  adsenseConfig = imported.default || imported;
} catch (e) {
  // File doesn't exist, use defaults
}

export interface AdsenseConfig {
  enabled: boolean;
  publisherId: string;
  autoAdsEnabled: boolean;
  headerScript?: string;
  adCodes?: {
    header?: string;
    sidebar?: string;
    inArticle?: string;
    footer?: string;
    beforeContent?: string;
    afterContent?: string;
  };
}

export function isAdsenseEnabled(): boolean {
  return adsenseConfig.enabled === true;
}

export function getHeaderScript(): string {
  return adsenseConfig.headerScript || '';
}

export function getAdCode(slot: 'header' | 'sidebar' | 'inArticle' | 'footer' | 'beforeContent' | 'afterContent'): string {
  return adsenseConfig.adCodes?.[slot] || '';
}

export function getPublisherId(): string {
  return adsenseConfig.publisherId || '';
}

export function isAutoAdsEnabled(): boolean {
  return adsenseConfig.autoAdsEnabled === true;
}
