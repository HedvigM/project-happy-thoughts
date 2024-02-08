import { prisma } from "../db";
import { HeartButton } from "./HeartButton";
import { formatDistance, subDays } from "date-fns";
import "./Thoughts.css";

export async function Thoughts() {
  const thoughts = await prisma.thoughts.findMany();

  return (
    <div className="content-container  thoughts-container">
      {thoughts
        .sort((a, b) => a.id - b.id)
        .reverse()
        .map((thought) => (
          <div className="grid" key={thought.id}>
            <p className="message">{thought.thought}</p>
            <div className="button-container">
              <HeartButton id={thought.id} />
              <p>x</p>
              <p>{thought.likes}</p>
            </div>
            <p className="date">
              {formatDistance(
                subDays(new Date(thought.createdAt), 0),
                new Date(),
                {
                  addSuffix: true,
                }
              )}
            </p>
          </div>
        ))}
    </div>
  );
}
