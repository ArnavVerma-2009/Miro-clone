"use client";

import { Color } from "@/types/canvas";
import { colorToCss } from "@/lib/utils";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  // const [customColor, setCustomColor] = useState("#000000");
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
          <ColorButton color={{ r: 255, g: 0, b: 0 }} onClick={onChange} />{" "}
          <ColorButton color={{ r: 243, g: 82, b: 35 }} onClick={onChange} />
          <ColorButton
            color={{ r: 252, g: 142, b: 42 }}
            onClick={onChange}
          />{" "}
          <ColorButton color={{ r: 255, g: 255, b: 0 }} onClick={onChange} />
          <ColorButton
            color={{ r: 180, g: 170, b: 0 }}
            onClick={onChange}
          />{" "}
          <ColorButton color={{ r: 68, g: 202, b: 99 }} onClick={onChange} />
          <ColorButton color={{ r: 39, g: 142, b: 237 }} onClick={onChange} />
          <ColorButton color={{ r: 155, g: 105, b: 245 }} onClick={onChange} />
          <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
          <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
          <ColorButton color={{ r: 111, g: 111, b: 111 }} onClick={onChange} />
          <ColorButton color={{ r: 100, g: 40, b: 255 }} onClick={onChange} />
          <ColorButton color={{ r: 200, g: 20, b: 255 }} onClick={onChange} />
          <ColorButton color={{ r: 0, g: 255, b: 0 }} onClick={onChange} />
          <ColorButton color={{ r: 0, g: 0, b: 255 }} onClick={onChange} />
          <ColorButton color={{ r: 20, g: 20, b: 20 }} onClick={onChange} />
        </div>
        {/* <CustomColorButton onClick={onChange} color={customColor} />  */}
      </div>
    </>
  );
};

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
};

// interface customColorProps {
//   onClick: any;
//   color: string;
// }

// const CustomColorButton = ({ onClick, color }: customColorProps) => {
//   return <HexColorPicker onClick={onClick} color={color} />;
// };
