import React from "react";

import { CheckBoxProperties } from "@shared/libs/helpers";

import CustomLabel from "../CustomLabel/CustomLabel";

interface CustomCheckBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  labelPosition?: string;
  className?: string;
  labelClassName?: string;
  shape?: string;
  size?: string;
  isDisabled?: boolean;
}
const CustomCheckBox = ({
  label,
  shape,
  isDisabled,
  size,
  labelPosition,
  className,
  labelClassName,
  ...otherProps
}: CustomCheckBoxProps) => {
  return (
    <div className="block">
      <div className={`flex items-center ${className}`}>
        {label && labelPosition === CheckBoxProperties.LABEL_POSITION.start && (
          <CustomLabel
            className={`inline-flex items-center text-14 ${labelClassName}`}
            title={label}
          />
        )}
        {isDisabled ? (
          <input
            className={`${
              size === CheckBoxProperties.SIZES.small ? "w-8 h-8" : "w-8 h-8"
            }
          ${
            shape === CheckBoxProperties.SHAPE.rounded
              ? "rounded-full"
              : `${
                  shape === CheckBoxProperties.SHAPE.square &&
                  shape === CheckBoxProperties.SIZES.small
                    ? "rounded-[4px]"
                    : "rounded-[5px]"
                }`
          } 
          mx-2 pointer-events-none border-citiGray-300 bg-citiGray-50 drop-shadow-sm border text-[#EBEFF1] border-none focus:ring-0
`}
            disabled={true}
            type="checkbox"
            {...otherProps}
          />
        ) : (
          <input
            className={`${
              size === CheckBoxProperties.SIZES.small ? "w-8 h-8" : "w-8 h-8"
            }
          ${
            shape === CheckBoxProperties.SHAPE.rounded
              ? "rounded-full"
              : `${
                  shape === CheckBoxProperties.SHAPE.square &&
                  shape === CheckBoxProperties.SIZES.small
                    ? "rounded-[4px]"
                    : "rounded-[5px]"
                }`
          } 
          mx-2  cursor-pointer drop-shadow-sm bg-white border border-citiGray-50 
           border-[#EBEFF1] focus:ring-0`}
            type="checkbox"
            {...otherProps}
          />
        )}
        {label && labelPosition === CheckBoxProperties.LABEL_POSITION.end && (
          <CustomLabel
            className={`inline-flex items-center text-14 ${labelClassName}`}
            title={label}
          />
        )}
      </div>
    </div>
  );
};

export default CustomCheckBox;

CustomCheckBox.defaultProps = {
  label: "",
  labelPosition: "",
  className: "",
  labelClassName: "",
  shape: CheckBoxProperties.SHAPE.square,
  size: CheckBoxProperties.SIZES.small,
  isDisabled: false,
};
