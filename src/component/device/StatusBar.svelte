<script lang="ts">
    import { faWifi } from "@fortawesome/free-solid-svg-icons/faWifi";
    import { faSignal } from "@fortawesome/free-solid-svg-icons/faSignal";
    import { faBatteryFull } from "@fortawesome/free-solid-svg-icons/faBatteryFull";

    import Icon from "component/common/Icon.svelte";
    import { currentAMPM, currentHour, currentMinute } from "store/Time";

    export let showTime: boolean;
</script>

<div class="statusBar">
    <div class="left">
        <div class="block">Hunmin Park</div>
    </div>
    <div class="right">
        <div class="block">
            <Icon definition={faWifi} />
        </div>
        <div class="block">
            <Icon definition={faSignal} />
        </div>
        <div class="block">
            <Icon definition={faBatteryFull} />
        </div>
        {#if showTime}
            <div class="block">
                {$currentHour}:{$currentMinute}
                {$currentAMPM}
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    @use "../common/Common";

    .statusBar {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;

        width: 100%;
        height: 2rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
        line-height: 2rem;

        color: Common.$white;
    }

    .left {
        height: 100%;
    }

    .right {
        margin-left: auto;
        height: 100%;
    }

    .block {
        display: inline-block;

        margin-left: 0.2rem;
        margin-right: 0.2rem;
    }
</style>
