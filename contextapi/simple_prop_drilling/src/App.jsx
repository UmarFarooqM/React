import React from 'react';

function ChildC({ message }) {
  return <h3>ChildC received: {message}</h3>;
}

function ChildB({ message }) {
  return <ChildC message={message} />;
}

function ChildA({ message }) {
  return <ChildB message={message} />;
}

function App() {
  const data = "Hello from App!";
  return (
    <div>
      <h2>Prop Drilling Example</h2>
      <ChildA message={data} />
    </div>
  );
}

export default App;
