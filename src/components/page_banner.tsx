import "../styles/page_banner.css";

type Props = {
  image?: string;
  heading?: string;
};

export default function PageBanner({ image, heading }: Props) {
  return (
    <div className="page_banner">
      <div className="image">
        <img src={image} alt="image banner" />
      </div>
      <div className="title">
        <h1>{heading}</h1>
      </div>
    </div>
  );
}
