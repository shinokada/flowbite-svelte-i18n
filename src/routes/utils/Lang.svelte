<script lang="ts">
  import { Dropdown, DropdownItem } from '$lib';
  import { i, language, languages, switchLanguage } from '@inlang/sdk-js'
  import Us from './Us.svelte';
  import Ja from './Ja.svelte';
  async function switchLanguageToEnglish() {
		console.log('switching language to English ...')
		await switchLanguage('en')
		console.log('... language switched to English')
	}
  async function switchLanguageToJapanese() {
		console.log('switching language to Japanese ...')
		await switchLanguage('ja')
		console.log('... language switched to Japanese')
	}
  let promiseEng = switchLanguageToEnglish();
  const handleEnglish = ()=>{
    promiseEng = switchLanguageToEnglish();
  }
  let promiseJap = switchLanguageToJapanese();
  const handleJapanese = ()=>{
    promiseJap = switchLanguageToJapanese();
  }
</script>

<div class='p-2'>
  <Us size="18" id="countries"/>
</div>
<Dropdown triggeredBy="#countries">
  <DropdownItem on:click={handleEnglish} on:keydown={handleEnglish}>
    <div class="inline-flex items-center">
      <Us />
      <span class='p-2'>
        English (US)
      </span>
    </div>
  </DropdownItem>
  <DropdownItem on:click={handleJapanese} on:keydown={handleJapanese}>
    <div class="inline-flex items-center">
      <Ja />
      <span class='p-2'>
        日本語
      </span>
    </div>
  </DropdownItem>
</Dropdown>