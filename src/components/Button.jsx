// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <div
        css={css`
          display: flex;
          width: 170px;
          height: 50px;
          padding: 0px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          border-radius: 4px;
          background: #074ee8;
        `}
      >
        <h1
          css={css`
            color: #fff;
            font-family: Sarabun;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
          `}
        >
          Large
        </h1>
      </div>
    );
  } else if (props.type === "secondary") {
    return (
      <div
        css={css`
          display: flex;
          width: 171.19px;
          height: 50px;
          padding: 0px 16px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          border-radius: 4px;
          background: #07a4e8;
        `}
      >
        <h1
          css={css`
            color: var(--Surface, #fff);
            font-family: Sarabun;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px; /* 112.5% */
          `}
        >
          Large
        </h1>
      </div>
    );
  }
}

export default Button;
