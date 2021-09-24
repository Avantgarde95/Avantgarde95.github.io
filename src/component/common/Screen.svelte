<script lang="ts">
    import DefaultBackground from "image/device/Background.png";

    export let backgroundImage: string = DefaultBackground;
</script>

<div class="screen">
    <slot />
    <div
        class="background"
        style={`background-image: url(${backgroundImage})`}
    />
</div>

<style lang="scss">
    @keyframes backgroundAnimation {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.2;
        }
        100% {
            opacity: 1;
        }
    }

    .screen {
        position: relative;
        z-index: 0;
        overflow-y: auto;
        width: 100%;
        flex: 1;
    }

    .background {
        z-index: -1;
        background-repeat: no-repeat;
        background-position: center;
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        animation: backgroundAnimation 5s infinite;
    }
</style>
