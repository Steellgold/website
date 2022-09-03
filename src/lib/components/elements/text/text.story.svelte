<script lang="ts">
  import { Text } from ".";
  export let Hst: any;

  export let text = "Lorem ipsum dolor sit amet et velit deleniti et porro doloribus et nobis deleniti.";
  export let type: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "p";
  export let color: "white" | "primary" | "secondary" | "tertiary" | "default" = "default";
  export let align: "left" | "center" | "right" | "default" = "default";
  export let italic: boolean = false;
  export let textTransform: "none" | "capitalize" | "uppercase" | "lowercase" = "none";
</script>

<Hst.Story title="components/elements/Text" icon="ic:outline-clear-all">
  <svelte:fragment slot="controls">
    <Hst.Text bind:value={text} title="Text" />
    <Hst.Select bind:value={type} title="aa" options={["p", "h1", "h2", "h3", "h4", "h5", "h6"]} />
    <Hst.Select bind:value={color} title="Color" options={["white", "primary", "secondary", "tertiary", "default"]} />
    <Hst.Select bind:value={align} title="Align" options={["left", "center", "right", "default"]} />
    <Hst.Checkbox bind:value={italic} title="Italic" />
    <Hst.Select bind:value={textTransform} title="Text Transform" options={["none", "capitalize", "uppercase", "lowercase"]} />
  </svelte:fragment>

  <Text type={type} color={color} align={align} italic={italic} textTransform={textTransform}>
    {text}
  </Text>
</Hst.Story>