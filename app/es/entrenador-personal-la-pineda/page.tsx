import type { Metadata } from 'next';
import CityServicePage from '@/components/CityServicePage';
import { getCity } from '@/lib/cities';
import { buildMetadata } from '@/lib/seo';

const city = getCity('la-pineda');

export const metadata: Metadata = buildMetadata({
  title: 'Entrenador Personal La Pineda | Movement by Design',
  description: city.description.es,
  path: city.esPath,
  locale: 'es_ES',
  alternatePath: city.enPath,
});

export default function Page() {
  return <CityServicePage city={city} lang="es" />;
}
