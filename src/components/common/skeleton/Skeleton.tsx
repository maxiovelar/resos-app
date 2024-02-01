import { Skeleton as SkeletonMaterialUI } from "@mui/material";
import { FC } from "react";

type SkeletonMaterialUIProps = React.ComponentProps<typeof SkeletonMaterialUI>;

export const Skeleton: FC<SkeletonMaterialUIProps> = ({ ...props }) => {
  return <Skeleton {...props} />;
};
