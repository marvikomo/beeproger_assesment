import React, { Fragment, LegacyRef, useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

import { ButtonProperties } from "@shared/libs/helpers";

import Icon from "@atoms/Icons";

interface ButtonProps {
  handleClick: Function;
  customClass?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isDisabled?: boolean;
  title?: string;
  isSubmitting?: boolean;
  value?: string;
  icon?: string;
  iconClass?: string;
  id?: string;
  ref?: LegacyRef<HTMLButtonElement> | undefined;
  size?: string;
  iconPosition?: string;
  variant?: string;
  isTransparent?: boolean;
}

/**
 * Renders the actual content of the Button
 * @param {any} title title or text of the button
 * @param {boolean} isSubmitting Loading state
 * @return {React.Component} Button component
 */
const renderContent = (
  title: string | undefined,
  isSubmitting: boolean | undefined
) => (
  <Fragment>
    {isSubmitting ? (
      <>
        <ImSpinner9 className="animate-spin mr-2" />
        <Fragment>{title}</Fragment>
      </>
    ) : (
      <Fragment>{title}</Fragment>
    )}
  </Fragment>
);

const CustomButton = ({
  handleClick,
  variant,
  isTransparent,
  iconPosition,
  size,
  ref,
  id,
  isDisabled,
  customClass,
  type,
  title,
  isSubmitting,
  value,
  icon,
  iconClass,
}: ButtonProps) => {
  const [background, setBackGround] = useState("");
  const [hover, setHover] = useState("");
  const [disabled, setDisabled] = useState("");
  const [focused, setFocused] = useState("");
  const [textColor, setTextColor] = useState("white");
  const [iconFill, setIconFill] = useState("");

  /**
   * This displays the rendered content
   */
  const content = (
    <div className="flex items-center">
      {!isSubmitting &&
      icon &&
      iconPosition === ButtonProperties.ICON_POSITION.start ? (
        <Icon
          className={`mr-2 ${
            isDisabled && isTransparent
              ? `fill-${disabled}`
              : iconFill && isTransparent
              ? `fill-${iconFill} hover:fill-${hover}`
              : ""
          } ${iconClass ? iconClass : ""}`}
          name={icon}
        />
      ) : (
        ""
      )}
      {renderContent(title, isSubmitting)}
      {!isSubmitting &&
      icon &&
      iconPosition === ButtonProperties.ICON_POSITION.end ? (
        <Icon
          className={`ml-2 ${
            isDisabled && isTransparent
              ? `fill-${disabled}`
              : iconFill && isTransparent
              ? `fill-${iconFill} hover:fill-${hover}`
              : ""
          } ${iconClass ? iconClass : ""}`}
          name={icon}
        />
      ) : (
        ""
      )}
    </div>
  );

  const setVariantColours = (variantType: string) => {
    switch (variantType) {
      case ButtonProperties.VARIANT.primary.name:
        if (isTransparent) {
          setBackGround("transparent");
          setTextColor(`${ButtonProperties.VARIANT.primary.background}`);
          setIconFill(`${ButtonProperties.VARIANT.primary.background}`);
        } else {
          setBackGround(`${ButtonProperties.VARIANT.primary.background}`);
          setTextColor("white");
        }
        setHover(`${ButtonProperties.VARIANT.primary.hover}`);
        setDisabled(`${ButtonProperties.VARIANT.primary.disabled}`);
        setFocused(`${ButtonProperties.VARIANT.primary.focused}`);

        break;
    }
  };

  useEffect(() => {
    let mounted = true;

    if (mounted && variant) {
      setVariantColours(variant);
    }

    return () => {
      mounted = false;
    };
  }, [variant, isTransparent, iconFill]);

  const transparentStyles = `${`border-purple-500 ${
    !isDisabled && !isSubmitting
      ? "hover:text-white hover:border-purple-500 focus:text-white"
      : ""
  } `}`;
  const opaqueStyles = `hover:bg-${hover} focus:bg-${focused} border-${background}`;
  const dimensionStyles = `h-[3.75rem] tablet:h-[5rem] ${
    size === ButtonProperties.SIZES.small
      ? "w-[10.25rem] tablet:w-[12rem]"
      : "w-[14.375rem] tablet:w-[19.688rem]"
  }`;

  return isSubmitting || isDisabled ? (
    <button
      className={`cursor-not-allowed text-12 tablet:text-16  rounded-lg bg-${disabled} ${
        isTransparent
          ? `text-gray-400 border-gray-400 ${transparentStyles}`
          : `text-${textColor}`
      }  ${
        isTransparent && `border border-${disabled}`
      }  whitespace-nowrap py-[1.938rem] px-[0.938re] rounded-[0.25rem] flex justify-center items-center ${dimensionStyles}  ${customClass}`}
      id={id}
      ref={ref}
      type={type}
      value={value}
    >
      {content}
    </button>
  ) : (
    <button
      className={`text-${textColor} text-12 tablet:text-16 font-medium smallLaptop:font-bold whitespace-nowrap py-[1.938rem] px-[0.938rem] rounded-[0.625rem] flex justify-center items-center cursor-pointer border ${dimensionStyles} bg-${background} ${
        isTransparent ? `${transparentStyles}` : `${opaqueStyles}`
      } ${customClass}`}
      id={id}
      onClick={() => handleClick()}
      ref={ref}
      type={type}
      value={value}
    >
      {content}
    </button>
  );
};

export default CustomButton;

CustomButton.defaultProps = {
  customClass: "",
  type: "button",
  isDisabled: false,
  title: "",
  isSubmitting: false,
  icon: "",
  iconClass: "",
  value: "",
  id: "",
  ref: null,
  size: ButtonProperties.SIZES.small,
  iconPosition: ButtonProperties.ICON_POSITION.start,
  variant: ButtonProperties.VARIANT.primary,
  isTransparent: false,
};
