import { FC, memo } from "react";

interface Props {
  className?: string;
  image: string;
  index: number;
}

const Card: FC<Props> = ({ className, image, index }) => {
    var hiddenClass = index > 3 ? " hidden " : " ";
    
  return (
    <div className="relative">
      <div
        className={"w-full relative flex  " + hiddenClass + className}
        style={{ right: 25 * index + "px" }}
      >
        <img
          className={
            "inline-block transform duration-1000 hover:-translate-y-5 border-4 border-white w-24 h-24 rounded-full"
          }
          src={image}
          alt="lady icon"
        />
      </div>
    </div>
  );
};

Card.defaultProps = {};

export default memo(Card);
