// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function Button(props) {
  if (props.type === "primary") {
    return (
      <div>
        Primary
        <button
          css={css`
            width: 171.19px;
            height: 50px;
            radius: 4px;
            padding: 0px, 16px, 0px, 16px;
            gap: 8px;
            background-color: #074ee8;
          `}
        >
          Large
        </button>
      </div>
    );
  } else if (props.type === "secondary") {
    return (
      <div>
        Secondary
        <button
          css={css`
            width: 171.19px;
            height: 50px;
            radius: 4px;
            padding: 0px, 16px, 0px, 16px;
            gap: 8px;
            background-color: #07a4e8;
          `}
        >
          Large
        </button>
      </div>
    );
  }
}
export default Button;
