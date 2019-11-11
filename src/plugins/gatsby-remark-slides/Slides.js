const React = require('react');

const Slides = ({ images }) => {
  return (
    React.createElement(
      'div',
      { className: 'slider' },

      React.createElement(
        'div',
        { className: 'slides' },
        images.map((img, idx) => (
          // React.createElement(
          //   'div',
          //   {
          //     key: `${idx}-${img}`,
          //     className: 'slide'
          //   },
            React.createElement(
              'img',
              {
                src: img,
                key: `${idx}-${img}`,
                className: 'img-slide'
              }
            )
          // )
        ))
      )
    )
  );
}

// return (
//   <div className="slider">
//     {images.map((img, idx) => (
//       <div key={`${idx}-${img}`}>
//         <img src={img} />
//       </div>
//     ))}
//   </div>
// )

module.exports = { Slides };
