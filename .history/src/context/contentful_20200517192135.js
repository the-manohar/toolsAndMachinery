import * as contentful from "contentful";

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "xwwnbkwhf3jv",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "FAdc5vwjHT5CPcI6RtPrinaII4RmGfUdpOqC3BiK6WQ",
});
