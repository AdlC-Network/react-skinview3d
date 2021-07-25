import React from "react";
import Skinview3d from "..";
import { withKnobs } from "@storybook/addon-knobs";
import { SkinViewer } from "skinview3d";
// import { withKnobs, radios, number } from "@storybook/addon-knobs";

export default {
  title: "All stories",
  decorators: [withKnobs],
};

export const basic = () => (
  <Skinview3d
    skinUrl="/textures/skin-legacyhat-default-no_hd.png"
    height={300}
    width={150}
    onReady={(instance: SkinViewer) => {
      console.log(instance);
    }}
  />
);

// export const noOrbit = () => (
//   <Skinview3d
//     className='viewer'
//     skinUrl="/textures/skin-legacyhat-default-no_hd.png"
//     height={300}
//     width={150}
//     enableOrbitControls={false}
//   />
// );

// export const basicWithKnobs = () => {

//   const options: any = [
//     '/textures/skin-legacyhat-default-no_hd.png',
//     '/textures/skin-1.8-default-no_hd.png',
//     '/textures/skin-1.8-slim-no_hd.png',
//     '/textures/skin-old-default-no_hd.png',
//   ]

//   const value = radios('Skin URL', options, '/textures/skin-legacyhat-default-no_hd.png');

//   const numberOptions = {
//     range: true,
//     min: 128,
//     max: 1024,
//     step: 1,
//  };

//   const width = number('Width', 150, numberOptions);
//   const height = number('Height', 300, numberOptions);

//   return <Skinview3d
//     className='viewer'
//     skinUrl={value}
//     height={height}
//     width={width}
//   />
// };

// export const multiple = () => (
//   <div style={{ display: 'flex', flexDirection: 'row',  }}>
//     <Skinview3d
//       className='viewer'
//       skinUrl="/textures/skin-legacyhat-default-no_hd.png"
//       height={300}
//       width={120}
//     />
//     <Skinview3d
//       className='viewer'
//       skinUrl="/textures/skin-1.8-default-no_hd.png"
//       height={300}
//       width={120}
//     />
//     <Skinview3d
//       skinUrl="/textures/skin-1.8-slim-no_hd.png"
//       height={300}
//       width={120}
//     />
//   </div>
// );

// export const withAnimation = () => {
//   return <Skinview3d
//     className='viewer'
//     skinUrl="/textures/skin-legacyhat-default-no_hd.png"
//     height={300}
//     width={150}
//     onReady={skinViewer => {
//       // This should be done internally in skinview3d
//       // As making the dev do this seems strange,
//       // need to see if the animation refactor solved this
//       skinViewer.animation = new skinview.CompositeAnimation();

//       skinViewer.animation.add(skinview.WalkingAnimation);

//     }}
//   />
// };

// export const withCape = () => {
//   return <Skinview3d
//     className='viewer'
//     skinUrl="/textures/skin-legacyhat-default-no_hd.png"
//     capeUrl="/textures/mojang-classic-cape.png"
//     height={300}
//     width={150}
//   />
// };

// export const initWithConfig = () => {
//   return <Skinview3d
//     className='viewer'
//     config={{
//       width: 300,
//       heigh: 400,
//       skinUrl: "/textures/skin-legacyhat-default-no_hd.png"
//     }}
//   />
// };
