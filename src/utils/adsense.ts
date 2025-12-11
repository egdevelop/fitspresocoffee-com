import adsenseConfig from '../config/adsense.json';

export type AdSlot = 'header' | 'beforeContent' | 'inArticle' | 'afterContent' | 'sidebar' | 'footer';

interface AdCodeConfig {
  slot: string;
  format?: string;
  layout?: string;
  responsive?: boolean;
}

interface AdsenseConfig {
  enabled: boolean;
  publisherId: string;
  autoAdsEnabled: boolean;
  headerScript: string;
  adCodes: Record<AdSlot, AdCodeConfig | string>;
}

const config: AdsenseConfig = adsenseConfig as AdsenseConfig;

export function isAdsenseEnabled(): boolean {
  return config.enabled === true;
}

export function getHeaderScript(): string {
  if (!isAdsenseEnabled()) {
    return '';
  }
  return config.headerScript || '';
}

export function getPublisherId(): string {
  return config.publisherId || '';
}

export function isAutoAdsEnabled(): boolean {
  return config.autoAdsEnabled === true;
}

export function getAdConfig(location: AdSlot): AdCodeConfig | null {
  if (!isAdsenseEnabled()) {
    return null;
  }
  
  const adCode = config.adCodes[location];
  
  if (!adCode) {
    return null;
  }
  
  if (typeof adCode === 'string') {
    return adCode ? { slot: adCode } : null;
  }
  
  if (!adCode.slot || adCode.slot.trim() === '') {
    return null;
  }
  
  return adCode;
}

export function getAdCode(slot: AdSlot): string {
  const adConfig = getAdConfig(slot);
  if (!adConfig || !adConfig.slot) {
    return '';
  }
  return adConfig.slot;
}
