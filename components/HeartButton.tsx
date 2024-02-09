import { revalidatePath } from "next/cache";
import { prisma } from "../db";
import "./HeartButton.css";

type HeartButtonProps = {
  id: number;
};
export async function HeartButton(id: HeartButtonProps) {
  async function heartIncrease() {
    "use server";

    const createResult = await prisma.thoughts.update({
      where: id,
      data: {
        likes: {
          increment: 1,
        },
      },
    });
    revalidatePath("/");
    createResult;
  }
  return (
    <form action={heartIncrease}>
      <button className="heart" type="submit">
        <span role="img" aria-label="heart emoji">
          {" "}
          ❤️
        </span>
      </button>
    </form>
  );
}
