export async function usePersonalInfo() {
    const { defaultLocale, locale } = useI18n()
    
    try {
        // Dynamically import the JSON file based on locale
        const personalInfo = locale.value === defaultLocale
            ? (await import(`../assets/json/personal-info.json`)).default
            : (await import(`../assets/json/personal-info.${locale.value}.json`)).default
        
        return personalInfo
    } catch (error) {
        // Fallback to default locale if translation doesn't exist
        return (await import(`../assets/json/personal-info.json`)).default
    }
}