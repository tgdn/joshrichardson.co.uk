/** @jsx React.DOM */

const visit = require('unist-util-visit');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { Slides } = require('./Slides');

const pattern = /slides:\[(?<images>.*?)\]$/;

module.exports = ({ markdownAST }) => {
  visit(markdownAST, `inlineCode`, node => {
    const { value } = node;

    if (value.startsWith('slides')) {
      console.log(value);
      const images = value
        .match(pattern).groups.images
        .split(',')
        .filter(img => img !== '');

      const markup = ReactDOMServer.renderToStaticMarkup(
        React.createElement(Slides, { images })
      );
      console.log(markup);

      node.type = 'html';
      node.value = markup;

      // slides:[/img/10_600.jpg,/img/11_480.jpg]
      //const images =
    }
  })

  return markdownAST;
}
