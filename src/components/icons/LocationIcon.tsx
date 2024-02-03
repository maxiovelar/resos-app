import RoomIcon from "@mui/icons-material/Room";
import { FC } from "react";

type Props = React.ComponentProps<typeof RoomIcon>;

export const LocationIcon: FC<Props> = ({ ...props }) => {
  return <RoomIcon {...props} />;
};
