import React from 'react';

export const Slides = ({ slides = [] }) => {
  return <span>{slides.join(',')}</span>
};

