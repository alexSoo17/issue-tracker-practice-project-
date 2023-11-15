import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const IssueAction = () => {
  return (
    <Flex mb="5" justify="between">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueAction;
