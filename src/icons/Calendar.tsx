import { FC } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const Calendar: FC<SvgIconProps> = (props: SvgIconProps) => {
    return (
        <SvgIcon viewBox="0 0 16 16" {...props}>
            <path
                d="M12 2.66675H3.99998C2.52722 2.66675 1.33331 3.86066 1.33331 5.33341V12.0001C1.33331 13.4728 2.52722 14.6667 3.99998 14.6667H12C13.4727 14.6667 14.6666 13.4728 14.6666 12.0001V5.33341C14.6666 3.86066 13.4727 2.66675 12 2.66675Z"
                stroke="#363636"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M5.33331 1.33337V4.00004"
                stroke="#363636"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.6666 1.33337V4.00004"
                stroke="#363636"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M1.33331 6.66675H14.6666"
                stroke="#363636"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};

export default Calendar;
