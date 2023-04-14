import React from 'react';

interface Props {}

interface State {
  value: string;
}

class App extends React.Component<Props, State> {
  render() {
    return (
      <>
        <h1>Hi</h1>
      </>
    );
  }
}

export default App;
