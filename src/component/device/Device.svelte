<script lang="ts">
    import NavigationBar from "component/device/NavigationBar.svelte";
    import StatusBar from "component/device/StatusBar.svelte";
</script>

<div class="device">
    <StatusBar showTime />
    <div class="content" />
    <NavigationBar showNavigators />
</div>

<style lang="scss">
    @use "../common/Common";

    :global {
        html {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: "Noto Sans KR", sans-serif;
        }

        body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        .Root {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;

            background-color: Common.$black;
        }

        .Temporary {
            box-sizing: border-box;

            padding: 1rem;
            font-weight: bold;

            color: Common.$white;
        }
    }

    .device {
        display: flex;
        flex-direction: column;
        overflow-y: hidden;

        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;

        color: Common.$white;
        background-color: Common.$black;
    }

    .content {
        width: 100%;
        flex: 1;
    }
</style>
