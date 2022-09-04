<script lang="ts">
  import { Text } from ".";
  export let Hst: any;

  export let text = "Lorem ipsum dolor sit amet et velit deleniti et porro doloribus et nobis deleniti.";
  export let type: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "p";
  export let size: "default" | "1xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" = "default";
  export let color: "white" | "primary" | "secondary" | "tertiary" | "default" = "default";
  export let customColor: string = "#fff";
  export let align: "left" | "center" | "right" | "default" = "default";
  export let italic: boolean = false;
  export let textTransform: "none" | "capitalize" | "uppercase" | "lowercase" = "none";
  export let weight: "normal" | "bold" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 = "normal";
  export let width: "default" | "auto" | 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 = "default";
</script>

<Hst.Story title="components/elements/Text" icon="ic:outline-clear-all">
  <svelte:fragment slot="controls">
    <Hst.Text bind:value={text} title="Text" />
    <Hst.Select bind:value={type} title="Type" options={["p", "h1", "h2", "h3", "h4", "h5", "h6"]} />
    <Hst.Select bind:value={size} title="Size" options={["default", "1xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"]} />
    <Hst.Select bind:value={color} title="Color" options={["white", "primary", "secondary", "tertiary", "default"]} />
    <Hst.Select bind:value={align} title="Align" options={["left", "center", "right", "default"]} />
    <Hst.Checkbox bind:value={italic} title="Italic" />
    <Hst.Select bind:value={textTransform} title="Text Transform" options={["none", "capitalize", "uppercase", "lowercase"]} />
    Custom Color: <input type="color" bind:value={customColor} />
    <Hst.Select bind:value={weight} title="Weight" options={["normal", "bold", 100, 200, 300, 400, 500, 600, 700, 800, 900]} />
    <Hst.Select bind:value={width} title="Width" options={["default", "auto", 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]} />
  </svelte:fragment>

  <Text type={type} color={color} align={align} italic={italic} textTransform={textTransform}>
    {text}
  </Text>
</Hst.Story>