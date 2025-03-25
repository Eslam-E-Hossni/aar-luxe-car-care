const locales = ["ar", "en"];

// Mock function to get dynamic service slugs (replace with your data source)
async function getServiceSlugs() {
  // If using file-based data (e.g., JSON, Markdown):
  // const services = await import('@/data/services.json');
  // return services.map(service => service.slug);

  // Example hardcoded slugs (replace with your actual data)
  return [
    "car-paint-protection-(PPF)-service",
    "thermal-insulation-tinting-service",
    "polishing-and-ceramic-coating-service",
    "colored-paint-protection-film-service",
    "cosmetic-car-painting-service",
    "interior-care-and-upholstery-service",
  ];
}

export default async function sitemap() {
  const baseUrl = process.env.FRONTEND_URL;

  // Get dynamic service slugs
  const serviceSlugs = await getServiceSlugs();

  // Static pages (home, about, contact, etc.)
  const staticPages = [{ url: baseUrl, lastModified: new Date() }];

  // Dynamic service pages
  const dynamicServicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
  }));

  // Generate localized URLs for each page
  const localizedPages = locales.flatMap((locale) => {
    const localePrefix = `/${locale}`; // Adjust if defaultLocale is not 'en'

    return [
      // Static pages with locales
      { url: `${baseUrl}${localePrefix}`, lastModified: new Date() },

      // Dynamic service pages with locales
      ...serviceSlugs.map((slug) => ({
        url: `${baseUrl}${localePrefix}/services/${slug}`,
        lastModified: new Date(),
      })),
    ];
  });

  return [...staticPages, ...dynamicServicePages, ...localizedPages];
}
