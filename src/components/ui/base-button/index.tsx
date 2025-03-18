import { IBaseButton } from "@/types";
import React from "react";
import cls from "classnames";
import { Link } from "@/i18n/navigation";

const BaseButton = ({
  children,
  type,
  className,
  handler,
  href,
  size,
  theme,
}: IBaseButton) => {
  return !!href ? (
    <Link
      href={href}
      type="button"
      id="base-button"
      className={cls(
        "!leading-[1.3em] w-full !bg-primary pt-[10px] px-[39px] pb-[10px] border-2 border-primary btn-clip font-heading-en relative cursor-pointer",
        className
      )}
      onClick={handler}
    >
      <span className={cls("font-bold text-white text-lg")}>{children}</span>
    </Link>
  ) : (
    <button
      type={type}
      id="base-button"
      className={cls(
        "!leading-[1.3em] w-full pt-[10px] px-[39px] pb-[10px] border-2 border-primary font-heading-arabic relative cursor-pointer",
        className,
        theme,
        size,
        theme === "primary" && "!bg-primary",
        size === "header" &&
          "text-[14px] px-[20px] py-[10px] lg:px-[15px] xl:px-[20px] xl:py-[10px] btn-clip",
        size === "hero" && "btn-clip",
        size === "contact" && ""
      )}
      onClick={handler}
    >
      <span
        className={cls(
          "font-bold text-white text-lg",
          size === "header" && "text-[16px] px-[25px] py-[10px]",
          size === "hero" && "text-[20px]",
          size === "contact" && "text-[18px]",
          size === "footer" && ""
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default BaseButton;
