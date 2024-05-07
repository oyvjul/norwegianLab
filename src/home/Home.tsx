import { useRecoilValue } from "recoil";
import { PageState, pageStateAtom } from "../utils/pageState";
import TopSection from "./top/TopSection";
import PersonForm from "./form/PersonForm";
import NewsSection from "./news/NewsSection";

const Home = () => {
  const { page } = useRecoilValue(pageStateAtom);

  return (
    <>
      <TopSection />
      {page === PageState.Home && <NewsSection />}
      {page === PageState.Form && <PersonForm />}
    </>
  );
};

export default Home;
