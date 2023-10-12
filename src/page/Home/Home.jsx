import {
  HomePageContainer,
  HomePageTitle,
  HomePageDescription,
} from './HomeStyled';

const Home = () => {
  return (
    <>
      <HomePageContainer>
        <HomePageTitle>Welcome to our Twitter Clone!</HomePageTitle>
        <HomePageDescription>
          Discover tweets from users all around the globe. Navigate to the
          Tweets page to see more.
        </HomePageDescription>
      </HomePageContainer>
    </>
  );
};

export default Home;
