import { QuestionList } from "./components/QuestionList";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const PrvaPomoc = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row items-center justify-center gap-4">
        <QuestionList />
      </div>
      <Footer />
    </>
  );
};
