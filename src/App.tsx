import classNames from 'classnames';
import React from 'react';

function App() {
  return (
    <div style={{border: '1px solid black'}} className={classNames('flex', 'flex-col', 'h-screen')}>
      <h1 className='text-center'>Ascend Test App</h1>
    </div>
  );
}

export default App;
