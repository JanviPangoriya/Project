import React from "react";
interface props {
  l?: Array<string>;
}
const Avatararray: React.FC<props> = ({ l }) => {
    var s=0;
  if (l && l.length > 0) {
    s = l.length - 4;
  }

  return (
    <>
      <div className="flex flex-row mt-20 items-center">
        {l &&
          l.slice(0, 4).map((k, index: number) => (
            <div>
              {console.log(index)}
              <img
                key={index}
                src={k}
                className={
                  "relative" +
                  " -left-" +
                  `${index * 8}` +
                  " rounded-full transform  hover:-translate-y-5  duration-1000"
                }
              ></img>
            </div>
          ))}
              {s > 0 &&
                  <div className="w-28 h-12 relative -left-32  bg-white shadow-2xl font-medium text-blue-500 rounded-full flex items-center justify-center">
                      {" "}
                      +{l && l.length - 4} more
                  </div>}
      </div>
    </>
  );
};
const v = "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg";

Avatararray.defaultProps = {
  l: [v, v, v, v, v, v, v],
};

export default React.memo(Avatararray);
