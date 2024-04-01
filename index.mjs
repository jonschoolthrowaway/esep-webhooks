export const handler = async (event) => {
  await fetch(process.env.SLACK_URL, {
    method: "POST",
    body: JSON.stringify({
      text: `Issue Created: ${event.issue.html_url}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify("OK!"),
  };
};
