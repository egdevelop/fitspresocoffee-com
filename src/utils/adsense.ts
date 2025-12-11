import adsenseConfig from '../config/adsense.json';

export type AdSlot = 'header' | 'beforeContent' | 'inArticle' | 'afterContent' | 'sidebar' | 'footer';

interface AdsenseConfig {
  enabled: boolean;
  publisherId: string;
  autoAdsEnabled: boolean;
  headerScript: string;
  adCodes: Record<AdSlot, string>;
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

export function getAdCode(slot: AdSlot): string {
  if (!isAdsenseEnabled()) {
    return '';
  }
  return config.adCodes[slot] || '';
}

export function getPublisherId(): string {
  return config.publisherId || '';
}

export function isAutoAdsEnabled(): boolean {
  return config.autoAdsEnabled === true;
}
