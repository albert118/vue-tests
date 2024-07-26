const importPromise = new Promise((resolve, reject) => {
  return import(`../assets/icons/calendar.svg`)
    .then((mod) => {
      console.log(`resolved module ${'calendar'}Icon`, mod);
      return resolve({ template: mod.default, name: `${'calendar'}Icon` });
    })
    .catch((error) => {
      console.log(`error while resolving icon module ${'calendar'}Icon`, error);
      return reject(error);
    });
});


// export interface Props {
//   icon: string;
//   fill?: string;
// }

// const props = defineProps<Props>();

// see here: https://github.com/jpkleemans/vite-svg-loader/issues/85
// this or instead use the svg loader
// https://github.com/jpkleemans/vite-svg-loader