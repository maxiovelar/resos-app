import { Skeleton as SkeletonMaterialUI } from "@mui/material";
import { FC } from "react";

type SkeletonMaterialUIProps = React.ComponentProps<typeof SkeletonMaterialUI>;
type Props = SkeletonMaterialUIProps;

export const Skeleton: FC<Props> = ({ ...props }) => {
  return <Skeleton {...props} />;
};
