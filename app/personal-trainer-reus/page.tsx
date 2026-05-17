import type { Metadata } from 'next';
import CityServicePage from '@/components/CityServicePage';
import { getCity } from '@/lib/cities';
import { buildMetadata } from '@/lib/seo';

const city = getCity('reus');

export const metadata: Metadata = buildMetadata({
  title: 'Personal Trainer Reus | Movement by Design',
  description: city.description.en,
  path: city.enPath,
  locale: 'en_GB',
  alternatePath: city.esPath,
});

export default function Page() {
  return <CityServicePage city={city} lang="en" />;
}
