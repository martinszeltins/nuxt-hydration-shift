<template>
    <header class="h-[70px] left-[250px] p-5 fixed top-0 w-[calc(100%-250px)] z-50 bg-primary text-neutral-100 shadow-lg text-2xl font-medium">
        <div class="flex justify-between">
            <div class="flex items-center">
                {{ $t('single_label') }}
            </div>

            <div class="flex items-center gap-8">
                <div>Print</div>
                
                <LanguageSwitcher
                    class="h-[33px] bg-white/90"
                    :show-label="false"
                />
            </div>
        </div>
    </header>
</template>
