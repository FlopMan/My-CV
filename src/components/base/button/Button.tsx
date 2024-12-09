import { Assets } from "@/assets";
import { cn } from "@/lib/utils";

import { Icon } from "../icon/Icon";

interface IButton {
  className?: string;
  label: string;
  icon?: string;
}
function Button(props: IButton) {
  const { className, label: title, icon } = props;

  return (
    <button
      className={cn(
        "px-7 py-4 gap-2 flex items-center shadow-green hover:bg-blue-700 w-fit rounded-full text-body-18 bg-theme-primary text-theme-primary-text",
        className,
        "font-medium",
        "light:text-white "
      )}
    >
      {title}
      <Icon
        url={icon || Assets.arrowTopRightIcon.src}
        size={24}
        className="text-theme-primary-text light:text-white"
      />
    </button>
  );
}

export default Button;
