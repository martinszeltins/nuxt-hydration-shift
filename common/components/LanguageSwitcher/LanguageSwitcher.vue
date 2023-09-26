<template>
    <PrimeDropdown
        v-show="showLanguageSwitcher"
        v-model="selectedLocale"
        :options="availableLocales"
        @change="changeI18nLocale"
        :class="{ '[&_.p-dropdown-label]:pr-0 [&_img]:mr-0 [&_.p-dropdown-trigger]:w-10': !props.showLabel }"
        panel-class="mt-1"
        v-cloak>

        <!-- Selected Value -->
        <template #value="slotProp">
            <div class="flex items-center">
                <img
                    :src="slotProp.value.imageSource" 
                    :alt="slotProp.value.label" 
                    class="w-[20px] mr-4"
                />

                <span v-if="props.showLabel">
                    {{ slotProp.value.label }}
                </span>
            </div>
        </template>

        <!-- Option -->
        <template #option="slotProp">
            <div class="flex items-center">
                <img 
                    :src="slotProp.option.imageSource" 
                    :alt="slotProp.option.label" 
                    class="w-[20px] mr-4"
                />

                <span>{{ slotProp.option.label }}</span>
            </div>
        </template>
    </PrimeDropdown>
</template>

<script setup lang="ts">
    const { locale, setLocale } = useI18n()
    import imgUK from '@img/circle-flags-uk.svg'
    import imgDE from '@img/circle-flags-de.svg'

    const props = defineProps<{
        showLabel: boolean
    }>()

    const showLanguageSwitcher = ref(false)

    const availableLocales = [
        { 
            value: 'en', 
            label: 'English', 
            imageSource: imgUK
        },
        
        { 
            value: 'de', 
            label: 'Deutsch', 
            imageSource: imgDE
        },
    ]

    const selectedLocale = ref()

    const initSelectedLocale = () => {
        selectedLocale.value = availableLocales.find(availableLocale => {
            return availableLocale.value === locale.value
        }) ?? availableLocales[0]
    }

    const changeI18nLocale = (event: any) => {
        const newLocale = event.value.value

        setLocale(newLocale)
    }

    initSelectedLocale()
    
    onMounted(() => {
        showLanguageSwitcher.value = true
    })
</script>
