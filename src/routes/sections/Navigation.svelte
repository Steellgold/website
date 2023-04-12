<script lang="ts">
  import { IconAlertSquare } from "$lib/components/icons";
  import { page } from "$app/stores";
    import { PUBLIC_VERCEL_ENV } from "$env/static/public";
</script>

<section>
  <div class="flex items-center justify-start mx-auto w-5/6 lg:w-2/4">
    <ul class="flex flex-row justify-end text-white gap-2 p-2">
      <a href="/#about" class="block hover:text-white hover:opacity-40 transition-all">
        <code>/about</code>
      </a>
  
      <a href="/blog" class="block hover:text-white hover:opacity-40 transition-all">
        <code>/blog</code>
      </a>
    </ul>
  
    <div class="flex flex-col justify-center ml-auto sm:rounded-lg sm:shadow-lg sm:overflow-hidden">
      <ul class="flex flex-row justify-end text-white gap-2 p-2">
        <a href="/" class="block hover:text-white hover:opacity-40 transition-all">
          <code>/</code>
        </a>
      </ul>
    </div>
  </div>

  {#if $page.data.session}
    <div class="flex items-center justify-between mx-auto w-5/6 lg:w-2/4">
      <ul class="flex flex-row justify-end text-white gap-2 p-2">
        <a href="/user" class="block hover:text-white hover:opacity-40 transition-all">
          <code>{$page.data.session.user.email}</code>
        </a>
      </ul>

      <div class="flex flex-row justify-end text-white gap-2 p-2">
        <a href="/user/logout" type="submit" class="block hover:text-white hover:opacity-40 transition-all">
          <code>Se déconnecter</code>
        </a>
      </div>
    </div>
  {/if}

  {#if PUBLIC_VERCEL_ENV == "preview" || PUBLIC_VERCEL_ENV == "development"}
    <div class="bg-red-500 text-white flex items-center justify-center p-2 gap-3">
      <i><IconAlertSquare /></i>
      <p>Vous êtes actuellement sur la version de développement de mon site web. Certaines fonctionnalités peuvent ne pas fonctionner correctement. Rendez vous sur <a href="https://steellgold.fr" class="underline">steellgold.fr</a> pour accéder à la version stable.</p>
    </div>
  {/if}
</section>