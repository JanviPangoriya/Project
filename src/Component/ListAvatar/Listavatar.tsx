import { FC, memo } from "react";
import Avatar1 from "./Avatar1";

interface Props {
  size?: "small" | "medium" | "large";
  avatarLength: number;
}

const Card8: FC<Props> = ({ size, avatarLength }) => {
  var sizeTheme =
    size === "large"
      ? " text-2xl p-2 px-4 right-32 "
      : size === "medium"
      ? " text-lg p-1 px-2 right-24 "
      : " text-sm px-2 right-24 ";

  const avatars = [
    {
      image:
        "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
    },
    {
      image: "https://designreset.com/cork/ltr/demo4/assets/img/profile-7.jpeg",
    },
    {
      image: "https://designreset.com/cork/ltr/demo4/assets/img/profile-3.jpeg",
    },
    {
      image: "https://designreset.com/cork/ltr/demo4/assets/img/profile-8.jpeg",
    },
    {
      image: "https://designreset.com/cork/ltr/demo4/assets/img/profile-6.jpeg",
    },
  ];

  return (
    <div className="flex flex-row relative">
      {avatars.map(function (avatar, index) {
        if (index >= avatarLength || index > 4) {
          return;
        }

        return (
          <Avatar1 index={index} image={avatar.image} key={index}></Avatar1>
        );
      })}
      {avatarLength > 4 && (
        <div
          className={
            "bg-white w-28 h-12 pt-3 pl-3 mt-5 font-semibold relative rounded-full border-2 border-gray-400 text-center " +
            sizeTheme
          }
        >
          +{avatarLength - 4} more
        </div>
      )}
    </div>
  );
};

Card8.defaultProps = { avatarLength: 5 };

export default memo(Card8);
