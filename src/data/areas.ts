export type ServiceArea = {
  slug: string;
  name: string;
  region?: string;
  description?: string;
  active: boolean;
};

export const serviceAreas: ServiceArea[] = [];
