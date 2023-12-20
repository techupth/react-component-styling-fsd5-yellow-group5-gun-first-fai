// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  if (props.type === "error") {
    return (
      <div
        className="box"
        css={css`
          border-radius: 10px;
          background: #f9c8c8;
        `}
      >
        <div
          className="textInBox"
          css={css`
            width: 545px;
            height: 33px;
            color: #444;
            font-family: Kanit;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          `}
        >
          <img src="src/images/frown.jpg" /> This is error alert box
        </div>
      </div>
    );
  } else if (props.type === "warning") {
    return (
      <div
        className="box2"
        css={css`
          border-radius: 10px;
          background: #f9d9c8;
        `}
      >
        <div
          className="textInBox2"
          css={css`
            width: 545px;
            height: 33px;
            color: #444;
            font-family: Kanit;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          `}
        >
          <img src="src/images/alert-triangle.png" />
          This is warning alert box
        </div>
      </div>
    );
  } else if (props.type === "info") {
    return (
      <div
        className="box3"
        css={css`
          border-radius: 10px;
          background: #f9ebc8;
        `}
      >
        <div
          className="textInBox3"
          css={css`
            width: 545px;
            height: 33px;
            color: #444;
            font-family: Kanit;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          `}
        >
          <img src="src/images/alert-circle.png" />
          This is info alert box
        </div>
      </div>
    );
  } else if (props.type === "success") {
    return (
      <div
        className="box4"
        css={css`
          border-radius: 10px;
          background: #cef7cd;
        `}
      >
        <div
          className="textInBox4"
          css={css`
            width: 545px;
            height: 33px;
            color: #444;
            font-family: Kanit;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          `}
        >
          <img src="src/images/check-circle.png" />
          This is success alert box
        </div>
      </div>
    );
  }
}
export default Alert;
