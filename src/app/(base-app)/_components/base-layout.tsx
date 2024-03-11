import React from "react";
import BaseHeader from "./base-header";
import BaseFooter from "./base-footer";

type BaseLayoutProps = {
  children: React.ReactNode;
};

function BaseLayout(props: BaseLayoutProps) {
  return (
    <div>
      <BaseHeader />
      {props.children}
      <BaseFooter />
    </div>
  );
}

export default BaseLayout;
