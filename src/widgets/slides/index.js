import React from 'react';
import { Slides } from './Slides';

const slideshow = {
  label: 'Slideshow',
  id: 'slides',

  pattern: /\`slides:\[(.*?)\]\`$/,

  fromBlock: (match) => {
    let slides = [];
    if (match) {
      const items = match[1]
        .split(',')
        .filter(item => item !== '');
      slides = items;
    }
    return { slides };
  },
  toBlock: ({ slides = [] }) => `\`slides:[${slides.join(',')}]\``,
  toPreview: ({ slides }, getAsset) => {
    slides = slides
      .map(image => getAsset(image) || '')
      .filter(pathname => pathname !== '');
    return <Slides slides={slides} />;
  },
  fields: [
    {
      label: 'Slides',
      name: 'slides',
      widget: 'list',
      field: {
        label: 'Slide',
        name: 'slide',
        widget: 'image',
      },
    },
    // {
    //   label: 'Slides',
    //   name: 'slides',
    //   widget: 'image',
    //   media_library: {
    //     allow_multiple: true,
    //   },
    // },
  ],
};

export default slideshow;
