import { rest } from "msw";

export const handlers = [
  rest.get(
    "http://localhost/users/rvW9hrTBCKXkE1ByR2F1ORWGZmk1/memos",
    (req, res, ctx) => {
      return res(
        ctx.json({
          memos: [
            {
              _id: "638357f80d2db35d9227488a",
              title: "강아지",
              description: "영어로는 Puppy",
            },
            {
              _id: "456789",
              title: "고양이",
              description: "영어로는 cat",
            },
          ],
        })
      );
    }
  ),
];
