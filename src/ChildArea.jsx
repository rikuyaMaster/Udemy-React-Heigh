import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// コンポーネントはメモで囲うことでコンポーネントしないよという意味になる
export const ChildArea = memo((props) => {
  const { open } = props;

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
