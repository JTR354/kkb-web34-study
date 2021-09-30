import React from "react";

function ChildPage() {
  console.log("render===> child page");
  return <span>child</span>;
}
export default React.memo(ChildPage);
