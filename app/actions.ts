import { revalidatePath } from "next/cache";
import { prisma } from "../db";

export async function addThought(data: FormData) {
  "use server";

  const thought = data.get("thought") as string;
  if (thought !== "") {
    const createResult = await prisma.thoughts.create({
      data: { thought: thought },
    });
    if (createResult !== null) {
      revalidatePath("/");
      return { message: `The thought was created` };
    } else {
      return { message: "Something went wrong while saving a thougt to db" };
    }
  } else {
    return { message: "There was no thought" };
  }
};

