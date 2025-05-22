export function formatNumberUS(num) {
  if (num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1e3) {
      return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  }
}

 export const commentsArray = [
    {
      name: "ibrahim",
      comment: "Lorem ipsum dolor sit amet.",
      replies: [
        {
          name: "makashi",
          comment: "Lorem ipsum dolor sit amet.",
          replies: [
            {
              name: "jack",
              comment: "Lorem ipsum dolor sit amet.",
              replies: [
                {
                  name: "ibrahim",
                  comment: "Lorem ipsum dolor sit amet.",
                  replies: [
                    {
                      name: "makashi",
                      comment: "Lorem ipsum dolor sit amet.",
                      replies: [
                        {
                          name: "jack",
                          comment: "Lorem ipsum dolor sit amet.",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "ibrahim",
                      comment: "Lorem ipsum dolor sit amet.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "ibrahim",
          comment: "Lorem ipsum dolor sit amet.",
          replies: [],
        },
      ],
    },
    {
      name: "ibrahim",
      comment: "Lorem ipsum dolor sit amet.",
      replies: [],
    },
    {
      name: "ibrahim",
      comment: "Lorem ipsum dolor sit amet.",
      replies: [],
    },
    {
      name: "ibrahim",
      comment: "Lorem ipsum dolor sit amet.",
      replies: [],
    },
  ];
