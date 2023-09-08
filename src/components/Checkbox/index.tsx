import React, { FC, forwardRef, memo, useCallback } from "react";
import styled from "styled-components";
import CheckIcon from "./CheckIcon";
import { generateComponentStyle } from "./generateComponentStyle";
import classNames from "classnames";

export type ComponentSxPropItem = {
  [key: string]: any;
};

export interface ComponentSXProp {
  sx?: ComponentSxPropItem;
}

export interface Props {
  label: any;
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: FC<Props & ComponentSXProp> = memo(
  forwardRef(({ label, onChange, value, disabled = false, sx }, ref) => {
    const handleChange = useCallback(() => {
      if (!disabled) onChange(!value);
    }, [value, disabled, onChange]);

    const cls = classNames({
      "checkbox-icon": true,
      "checkbox-icon-active": !!value,
      "checkbox-icon-disabled": disabled,
    });

    const labelCls = classNames({
      "checkbox-label": true,
      "checkbox-label-disabled": disabled,
    });

    return (
      <Wrapper ref={ref} onClick={handleChange} sx={sx}>
        <div className={cls}>{<CheckIcon />}</div>
        <span className={labelCls}>{label}</span>
      </Wrapper>
    );
  })
);

const Wrapper = styled.div<ComponentSxPropItem>`
  ${({ sx }) =>
    generateComponentStyle({
      sx,
      theme: {
        display: "flex",
        "align-items": "center",
        "&:hover": {
          ".checkbox-icon": {
            "background-color": "#6385C7",
            svg: {
              opacity: 1,
              fill: "#343143",
            },
            "&-active": {
              "background-color": '#6385C7',
              border: `1px solid #6385C7`,
              svg: {
                opacity: 1,
                fill: "#FFF",
              },
            },
            "&-disabled": {
              cursor: "initial",
              "background-color": "rgba(90, 87, 99, 0.3)",
              border: "1px solid #3D3A46",
              svg: {
                opacity: 0,
              },
            },
          },
        },
        ".checkbox-icon": {
          width: "17px",
          height: "17px",
          "border-radius": "3px",
          border: "1px solid #6385C7",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          cursor: "pointer",
          svg: {
            opacity: 0,
            fill: "#fff",
          },
          "&-active": {
            "background-color": '#6385C7',
            border: `1px solid #6385C7`,
            svg: {
              opacity: 1,
              fill: "#fff",
            },
          },
          "&-disabled": {
            cursor: "initial",
            "background-color": "rgba(90, 87, 99, 0.3)",
            border: "1px solid #3D3A46",
            svg: {
              opacity: 0,
            },
          },
        },
        ".checkbox-icon-active.checkbox-icon-disabled": {
          background: "#5A5763",
          border: "1px solid #5A5763",
          svg: {
            opacity: 1,
          },
        },
        ".checkbox-label": {
          cursor: "pointer",
          color: "#fff",
          "padding-left": "8px",
          "line-height": "16px",
          "font-weight": "300",
          "&-disabled": {
            cursor: "initial",
            color: "#9A999D",
          },
        },
      },
    })};
`;

export default Checkbox;
