import router from "@/router";
import { RouterProvider } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Route />
//     </>
//   );
// }

// export default App;

// type Props = {}

export default function App() {
  return (
   <RouterProvider router={router}/>
  )
}