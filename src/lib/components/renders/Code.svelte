<script lang="ts">
  export let lang: string;
  export let text: string;

  import hljs from "highlight.js";
</script>

<pre class="hjls">{@html hljs.highlight(lang, text).value}</pre>