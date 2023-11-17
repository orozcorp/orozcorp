export async function getData({ query, variables }, refetch = false) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
      refetch,
    }),
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}

export async function postData({ query, variables }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Network response was not ok: ${error}`);
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // re-throw the error so it can be caught higher up
  }
}
