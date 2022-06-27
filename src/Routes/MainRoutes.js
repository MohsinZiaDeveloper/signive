// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "../App";

// import { HomeNotLogin, ChatOptions } from "../screens";

// const Routes = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<HomeNotLogin />} />
//           <Route path="/:id" element={<HomeNotLogin />} />
//           <Route path="/signupRC" element={<SignupRC />} />
//           <Route path="/loginRC" element={<LoginRC />} />
//           <Route path="/chatoptions" element={<ChatOptions />} />
//           <Route path="/RecoverRC" element={<RecoverPasswordRC />} />
//           <Route path="/JoinChat" element={<JoinChat />} />
//           <Route path="/AboutusRc" element={<AboutusRc />} />
//           <Route path="/ContactusRc" element={<ContactUsRc />} />
//           <Route path="/accessibilityRc" element={<AccessibilityRc />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Routes;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import AfterSendForm from "../Pages/AfterSendForm";
import Page404 from "../Pages/Page404";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AfterSendForm />} />
          <Route path="page404" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
