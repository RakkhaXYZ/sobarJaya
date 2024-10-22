import React from 'react';

function BackToTop() {
    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <button
      className="fixed bottom-0 right-0 mb-4 mr-4 bg-grey-900 hover:bg-grey-900 text-white font-bold py-2 px-4 rounded"
      onClick={(handleClick)}
    >
      <div className="w-16 h-16 relative">
        <div className="w-16 h-16 left-0 top-0 absolute bg-white rounded-full shadow" />
        <div className="absolute"><img src="arrow.png" alt=""  /></div>
    </div>
    </button>
  );
}

export default BackToTop;