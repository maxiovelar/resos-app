import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { FC } from "react";

type Props = React.ComponentProps<typeof AccessTimeIcon>;
export const ClockIcon: FC<Props> = ({ ...props }) => {
  return <AccessTimeIcon {...props} />;
};
