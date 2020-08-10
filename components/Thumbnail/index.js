import Link from 'next/link';

const Thumbnail = ({
  imageUrl = 'https://via.placeholder.com/210x295?text=?',
  caption,
  href = '',
  as = '',
  small = false,
}) => {
  return (
    <div className="thumbnail">
      <Link href={href} as={as}>
        <a>
          <img className="thumbnail__image" src={imageUrl} />
          <div className="thumbnail__caption">{caption}</div>
        </a>
      </Link>
      <style jsx>
        {`
          .thumbnail__image {
            width: ${small ? '100px' : '100%'};
            margin-right: 10px;
          }

          .thumbnail__caption {
            text-alighn: center;
            pagging: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Thumbnail;
