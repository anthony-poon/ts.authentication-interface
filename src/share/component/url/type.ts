export type URLMap = Record<string, string>;

export type URLLabelMap<T extends URLMap> = Partial<Record<keyof T, string>>;

// Breadcrumbs type: key → array of keys
export type BreadcrumbMap<T extends URLMap> = Partial<
  Record<keyof T, ReadonlyArray<keyof T>>
>;