import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "@/app/validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validatedBody = issueSchema.safeParse(body);
  if (!validatedBody.success) {
    return NextResponse.json(validatedBody.error.format(), {
      status: 400,
    });
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(newIssue, {
    status: 201,
  });
}
