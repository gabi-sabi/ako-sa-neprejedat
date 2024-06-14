import PropTypes from 'prop-types';

export const AboutUs = ({ img, name, email, children, webUrl }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-4/12 p-6">
        <img
          src={img}
          alt={`ProfilePicture${name}`}
          className="rounded-full h-48 m-4"
        />
         <h2 className="text-bold text-center text-4xl">{name}</h2>
        {children}
        <span className="font-bold m-4">
          E-mail:
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
        </span>
        <span className="font-bold m-4">
        Web:
          <a className="underline" href={webUrl}>
            {webUrl}
          </a>
        </span>
      </div>
    </>
  );
};
AboutUs.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  children: PropTypes.node,
};
