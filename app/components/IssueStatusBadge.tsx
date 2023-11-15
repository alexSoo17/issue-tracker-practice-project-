import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const IssueStatusBadge = ({ status }: { status: Status }) => {
  const StatusMap: Record<
    Status,
    { label: string; color: "green" | "violet" | "gray" }
  > = {
    OPEN: {
      label: "Open",
      color: "green",
    },
    IN_PROGRESS: {
      label: "In Progress",
      color: "violet",
    },
    CLOSED: {
      label: "Closed",
      color: "gray",
    },
  };
  return (
    <Badge color={StatusMap[status].color}>{StatusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
