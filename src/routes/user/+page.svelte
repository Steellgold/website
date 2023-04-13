<div class="justify-center mx-auto w-5/6 lg:w-2/4 mt-6">
  <div class="flex flex-col gap-2 mb-4">
    <h1 class="text-2xl font-bold text-left text-white">Connexion via un lien magique</h1>
    <p class="text-sm text-left text-gray-400">Veuillez saisir votre adresse email pour recevoir un lien de connexion, il est nécessaire pour poster un commentaire, ou simplement modifier un article si vous en êtes l'auteur.</p>
  </div>

  <form action="?/login" method="POST" class="flex flex-col gap-2">
    <input type="email" name="email" placeholder="Adresse électronique" class="w-full p-2.5 rounded-lg shadow-lg bg-[rgb(22,22,22)] text-white cursor-text focus:outline-none focus:ring-2 focus:ring-[#161616] focus:ring-opacity-50" required>
    <button type="submit" class="w-full p-2 rounded-lg shadow-lg bg-[#161616] text-white">Envoyer</button>
  </form>
</div>