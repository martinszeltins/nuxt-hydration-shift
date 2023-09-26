export function useSingleLabelStepItems() {
    const { t } = useI18n()

    const stepItems = computed(() => [
        {
            step: 1,
            label: t('from_to'),
            route: '/'
        },
        
        {
            step: 2,
            label: t('shipment_data'),
            route: '/',
        },
        
        {
            step: 3,
            label: t('customs_information'),
            route: '/',
        },

        {
            step: 4,
            label: t('products_and_services'),
            route: '/',
        },

        {
            step: 5,
            label: t('summary'),
            route: '/',
        }
    ])

    return { stepItems }
}
