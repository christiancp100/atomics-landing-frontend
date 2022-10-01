const env = {
  development: process.env.NODE_ENV === `development`,
  test: process.env.NODE_ENV === `test`,
  production: process.env.NODE_ENV === `production`,
};

const graphqlUrl = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const contactUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;
const academyContactUrl = process.env.NEXT_PUBLIC_ACADEMY_CONTACT_FORM_URL;

export { apiUrl, env, graphqlUrl, contactUrl, academyContactUrl };
