<script lang="ts">
  import { Dropdown, DropdownItem } from '$lib';
  import { i, language, languages, switchLanguage } from '@inlang/sdk-js'
  import De from './flags/De.svelte';
  import Es from './flags/Es.svelte';
  import It from './flags/It.svelte';
  import Ja from './flags/Ja.svelte';
  import Kr from './flags/Kr.svelte';
  import No from './flags/No.svelte';
  import Us from './flags/Us.svelte';

  async function handleLanguageChange(lang: string) {
    console.log(`switching language to ${lang} ...`)
    await switchLanguage(lang)
    console.log(`... language switched to ${lang}`)
  }

  let dropdownOpen = false;
  const sfLanguages = [
    {
      lang: 'de',
      value: 'Deutsch',
      icon: De
    },
    {
      lang: 'en',
      value: 'English',
      icon: Us
    },
    {
      lang: 'es',
      value: 'Español',
      icon: Es
    },
    {
      lang: 'it',
      value: 'Italiano',
      icon: It
    },
    {
      lang: 'ja',
      value: '日本語',
      icon: Ja
    },
    {
      lang: 'ko',
      value: '한국어',
      icon: Kr
    },
    {
      lang: 'no',
      value: 'Norsk',
      icon: No
    },
  ]
</script>

<div class='p-2' id="countries">
  Lang
</div>
<Dropdown triggeredBy="#countries" bind:open={dropdownOpen}>
  {#each sfLanguages as { lang, value, icon }}
    <DropdownItem on:click={() => handleLanguageChange(lang)} on:keydown={() => handleLanguageChange(lang)} on:click={() => dropdownOpen = false}>
      <div class="inline-flex items-center">
        <svelte:component this={icon} />
        <span class='p-2'>
          {value}
        </span>
      </div>
    </DropdownItem>
  {/each}
</Dropdown>
