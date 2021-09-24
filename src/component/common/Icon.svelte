<script lang="ts">
    // 'import type' is necessary to avoid bundling fontawesome-svg-core.
    import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

    export let definition: IconDefinition;
    export let size = 16;

    const className = `${$$props.class} svg-inline--fa fa-${definition.iconName} fa-w-${size}`;
    const box = `0 0 ${definition.icon[0]} ${definition.icon[1]}`;
    const pathData = definition.icon[4] as string;
</script>

<svg
    class={className}
    aria-hidden
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={box}
>
    <path fill={"currentColor"} d={pathData} />
</svg>

<style lang="scss">
    :global {
        @import "@fortawesome/fontawesome-svg-core/styles";
    }
</style>
