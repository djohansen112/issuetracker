import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "Please enter a title").max(255),
  description: z.string().min(1, "Please enter a description"),
});
