<script lang="ts">
  import Article from "$lib/components/layouts/Article.svelte";
  import { initializeApp, getApps, getApp } from "firebase/app";
  import { collection, getFirestore, onSnapshot } from "firebase/firestore";
  import { firebaseConfig } from "$lib/config/firebase";
  import { browser } from "$app/env";
  
  const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
  const db = browser && getFirestore();
  const colRef = browser && collection(db, "articles");

  interface Article {
    id: string;
    title: string;
    published_date: string;
    small_description: string;
    primary_tech: string;
    banner_url: string | null;
    tags: string[] = [];
    difficulty: string;
  }

  let articles: Article[] = [];
  const unsubscribe = browser &&
    onSnapshot(colRef, (querySnapshot: any) => {
      let content: Article[] = [];
      querySnapshot.forEach((doc: any) => {
        let article = {...doc.data(), id: doc.id};
        content.push(article);
      })
      articles = content;
  });

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<div class="articles">
  {#each articles as article}
    <Article {...article} />
  {/each}
</div>

<style lang="scss">
  .articles {
    padding: 30px;
    gap: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>