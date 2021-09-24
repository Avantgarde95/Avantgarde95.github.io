<script lang="ts">
    import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
    import { faSquare } from "@fortawesome/free-regular-svg-icons/faSquare";

    import { currentLanguage, Language } from "store/Language";
    import Icon from "component/Icon.svelte";
    import InKorean from "image/device/InKorean.svg";
    import InEnglish from "image/device/InEnglish.svg";

    export let showNavigators: boolean;

    let nextLanguage: Language;
    let languageImage: string;

    $: nextLanguage = $currentLanguage === "Korean" ? "English" : "Korean";
    $: languageImage = $currentLanguage === "Korean" ? InKorean : InEnglish;
</script>

<div class="navigationBar">
    <div class="cell">
        <button
            class="languageButton"
            style={`background-image: url(${languageImage})`}
            type="button"
            title={`To ${nextLanguage}`}
            aria-label={`To ${nextLanguage}`}
            on:click={() => {
                $currentLanguage = nextLanguage;
            }}
        />
    </div>
    <div class="cell">
        {#if showNavigators}
            <button class="button" type="button" title="Home">
                <Icon definition={faSquare} />
            </button>
        {/if}
    </div>
    <div class="cell">
        {#if showNavigators}
            <button class="button" type="button" title="Back">
                <Icon definition={faChevronLeft} />
            </button>
        {/if}
    </div>
</div>

<style lang="scss">
    @use "./Common";

    .navigationBar {
        display: table;
        width: 100%;
    }

    @mixin baseButton {
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        transition: all 0.1s;

        width: 3rem;
        height: 2.5rem;
        border: none;
        line-height: 2.5rem;
        font-size: 2rem;

        color: Common.$white;
        background-color: transparent;

        &:hover {
            transform: scale(0.8);
        }
    }

    .button {
        @include baseButton();
    }

    .languageButton {
        @include baseButton();

        background-size: auto 2rem;
        background-repeat: no-repeat;
        background-position: center;
    }

    .cell {
        display: table-cell;

        width: 4rem;
        text-align: center;
    }
</style>
