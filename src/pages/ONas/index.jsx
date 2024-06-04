import konz_about_cut from "../../assets/konz_about_cut.jpg";
import skupina_about_cut from "../../assets/skupina_about_cut.jpg";

export const ONasPage = () => {
  return (
    <>
      <div className="flex flex-row gap-8 py-20 px-60 items-center justify-center">
        <div className="flex w-1/2 items-center justify-center">
          <img
            src={skupina_about_cut}
            alt="ProfilePicture"
            className="rounded-full h-48"
          />
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <img
            src={konz_about_cut}
            alt="ProfilePicture"
            className="rounded-full h-48"
          />
        </div>
      </div>
    </>
  );
};
