<script setup lang="ts">
import { Size } from './Size.ts';
import { computed } from 'vue';

// PR: https://github.com/PropertyMe/pM/pull/13467#event-13639516007
export interface Props {
  icon: string;
  size?: Size;
  fill?: string;
  class?: string;
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: 'fill-tints-text-primary',
  size: Size.Medium
});

// this factory only needs to resolve a promise, it doesn't need to know anything more
// @ts-ignore: Argument of type
const PvIcon = defineAsyncComponent(() => import(`../assets/icons/${props.icon}.svg`));

// export default {
// this factory only needs to resolve a promise, it doesn't need to know anything more
// @ts-ignore: Argument of type
// components: { PvIcon: defineAsyncComponent(() => import(`../assets/icons/calendar.svg`)) }
// };

const dimm = {
  [Size.Small]: '12px',
  [Size.Medium]: '38px',
  [Size.Large]: '128px'
}[props.size];

const styles = computed(() => ({
  height: dimm,
  width: dimm
}));
</script>

<template>
  <div :style="styles">
    <a v-if="props.href" :href="props.href" target="_blank">
      <pv-icon :class="props.class" :fill="props.fill" height="100%" width="100%" />
    </a>
    <pv-icon v-else :class="props.class" :fill="props.fill" height="100%" width="100%" />
  </div>
</template>
