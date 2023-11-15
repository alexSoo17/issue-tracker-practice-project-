import { Box, Card } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const IssueDetailLoading = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <div className="flex gap-3 my-3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </div>
      <Card className="prose mt-5">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default IssueDetailLoading;
