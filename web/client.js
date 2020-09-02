import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.SANITY_STUDIO_API_DATASET, // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});