import { Route, Routes } from 'react-router-dom';

import GlobalStyles from 'GlobalStyles';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'page/Home/Home';
import Tweets from 'page/Tweets/Tweets';
import NotFound404 from 'page/NotFound404/NotFound404';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/tweets" element={<Tweets />}></Route>
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </>
  );
};
