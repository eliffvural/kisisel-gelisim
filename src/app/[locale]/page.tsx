import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations(''); // root namespace
  return <main>{t('hello')}</main>;
}