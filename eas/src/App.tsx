import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./eas/Home";
import { Root } from "./Root";
import Onchain from "./eas/Onchain";
import Offchain from "./eas/Offchain";

const router = createBrowserRouter([
  {
    path: "/attestedCryptoFan/",
    element: <Root />,
    children: [
      {
        path: "/attestedCryptoFan/",
        element: <Home />,
      },
      {
        path: "/attestedCryptoFan/onchain",
        element: <Onchain />,
      },
      {
        path: "/attestedCryptoFan/offchain",
        element: <Offchain />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
