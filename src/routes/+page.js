/** @type {import('./$types').PageLoad} */
export function load({ data }) {
  return {
    b: data.a * 2
  };
}