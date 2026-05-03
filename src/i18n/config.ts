export const supportedLocales = ['en', 'it'] as const;
export const enabledLocales = ['en'] as const;

export type Locale = (typeof supportedLocales)[number];
export type EnabledLocale = (typeof enabledLocales)[number];

export const defaultLocale: EnabledLocale = 'en';

export const localeOptions = [
	{ code: 'en', label: 'EN', nativeLabel: 'English', enabled: true },
	{ code: 'it', label: 'IT', nativeLabel: 'Italiano', enabled: false },
] as const;

export function isSupportedLocale(value: string): value is Locale {
	return supportedLocales.includes(value as Locale);
}

export function resolveLocale(value?: string): Locale {
	if (value && isSupportedLocale(value)) {
		return value;
	}

	return defaultLocale;
}
