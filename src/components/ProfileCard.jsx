export const AboutUs = ({ img, name, email, children }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-4/12 p-6">
        <h1 className="text-bold text-4xl">{name}</h1>
        <img
          src={img}
          alt={`ProfilePicture${name}`}
          className="rounded-full h-48 m-4"
        />
        <p className="leading-normal ">{children}</p>
        <span className="font-bold m-8">
          E-mail:{' '}
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
        </span>
      </div>
    </>
  );
};
