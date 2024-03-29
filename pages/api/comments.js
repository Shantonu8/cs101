// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_CS_ENDPOINT;
const graphcmsToken = process.env.CS_TOKEN


export default async function comments(req, res) {
  const { name, email, slug, comment } = req.body;

  const graphqlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });
  const query = gql`
    mutation CreateComment(
      $name: String!,
      $email: String!,
      $comment: String!,
      $slug: String!,
    ) {
      createComment(
        data: {
          name: $name,
          email: $email,
          comment: $comment,
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphqlClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error)
    }
}

// Commas get removed if error add commas back
