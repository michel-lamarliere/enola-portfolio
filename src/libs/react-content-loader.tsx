import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = ({ className }: { className: string }) => {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      backgroundColor="#F3F2F7"
      foregroundColor="rgba(255, 150, 214, 0.2)"
      className={className}
    >
      <rect rx="3" ry="3" width={"100%"} height={"100%"} />
    </ContentLoader>
  );
};
