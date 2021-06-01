import React from 'react';
import ReactDOM from 'react-dom';

import MainContainer from './components/container';

const App = () => {
  return (
    <div>
      <MainContainer/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));