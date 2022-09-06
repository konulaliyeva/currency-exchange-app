import React, {Suspense} from "react";

const Home = React.lazy(() => import('./pages/Home.js'));

function App() {
  return (
  <Suspense>
  <Home />
  </Suspense>
  );
}

export default App;
