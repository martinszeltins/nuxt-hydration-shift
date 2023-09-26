<template>
    <PrimeCard>
        <template #content>
            <PrimeSteps :model="stepItems" aria-label="Form Steps" :readonly="false">
                <template #item="{ item }">
                    <a class="p-menuitem-link">
                        <span class="p-steps-number">
                            {{ item.step }}
                        </span>

                        <span class="p-steps-title">
                            {{ item.label }}
                        </span>
                    </a>
                </template>
            </PrimeSteps>
        </template>
    </PrimeCard>
</template>

<script setup lang="ts">
    const { stepItems } = useSingleLabelStepItems()
</script>
