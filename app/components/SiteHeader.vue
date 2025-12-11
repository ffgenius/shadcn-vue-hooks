<template>
    <header class="bg-background sticky top-0 z-50 w-full">
        <div class="container-wrapper 3xl:fixed:px-0 px-6">
            <div class="3xl:fixed:container flex h-(--header-height) items-center **:data-[slot=separator]:!h-4">
                <div class="flex items-center">
                    <Button
                        as-child
                        class="hidden size-8 lg:flex"
                        size="icon"
                        variant="ghost"
                    >
                        <NuxtLink to="/">
                            <img
                                :alt="siteConfig.name"
                                class="size-5"
                                src="/logo.svg"
                            >
                            <span class="sr-only">{{ siteConfig.name }}</span>
                        </NuxtLink>
                    </Button>
                    <span class="hidden md:block">{{ siteConfig.siteTitle }}</span>
                </div>

                <MainNav
                    :items="siteConfig.navItems"
                    class="hidden lg:flex"
                />
                <div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
                    <GitHubLink />
                    <Separator
                        class="3xl:flex hidden"
                        orientation="vertical"
                    />
                    <SiteConfig class="3xl:flex hidden" />
                    <Separator orientation="vertical" />
                    <ModeSwitcher />
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { siteConfig } from '@/lib/config'
</script>
