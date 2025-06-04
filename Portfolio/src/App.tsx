import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Portfolio Website Created!</h1>
      <p className="text-lg text-center mb-6">
        Your static HTML/CSS/JS portfolio website has been created in the <code className="bg-gray-200 px-2 py-1 rounded">public/</code> directory.
      </p>
      <p className="text-lg text-center">
        Open the <code className="bg-gray-200 px-2 py-1 rounded">public/index.html</code> file directly to view your beautiful portfolio.
      </p>
    </div>
  );
}

export default App;