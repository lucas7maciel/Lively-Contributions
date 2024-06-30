
export async function getContributions(username: string) {
  const headers = {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  };

  const body: Object = {
    query: `query {
        user(login: "${username}") {
          name
          contributionsCollection {
            contributionCalendar {
              colors
              totalContributions
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }`,
  };

  let res: any;

  try {
    res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });

    res = await res.json();
  } catch (error) {
    // throw exceção
    console.log(error);
    return;
  }

  const weeks =
    res?.data.user?.contributionsCollection.contributionCalendar.weeks;

  return weeks || [];
}
