<template>
    <aside class="app-sidebar bg-white flex flex-col h-full left-0 py-4 fixed top-0 transform transition-transform select-none w-[250px]">
        <nav class="select-none grow mt-6 overflow-y-auto px-4">
            <ol class="list-none m-0 p-0 space-y-2">
                <li class="list-none mb-2 text-xl rounded-md transition hover:bg-gray-200">
                    <AppLink to="/" class="p-3 flex items-center">    
                        <div class="ml-4">{{ $t('single_label') }}</div>
                    </AppLink>
                </li>

                <li class="list-none mb-2 text-xl rounded-md transition hover:bg-gray-200">
                    <AppLink to="/" class="p-3 flex items-center">
                        <div class="ml-4">{{ $t('multi_label') }}</div>
                    </AppLink>
                </li>
            </ol>
        </nav>
    </aside>
</template>
