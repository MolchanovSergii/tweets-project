import { Route, Routes } from 'react-router-dom';

import GlobalStyles from 'GlobalStyles';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'page/Home/Home';
import Tweets from 'page/Tweets/Tweets';
import RedirectHome from 'page/NotFound404/RedirectHome';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/tweets" element={<Tweets />}></Route>
          <Route path="*" element={<RedirectHome />} />
        </Route>
      </Routes>
    </>
  );
};
