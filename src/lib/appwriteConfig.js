import { Client, Databases } from "appwrite";

const client = new Client();

const projectId = process.env.APPWRITE_PROJECT_ID;
const databaseId = process.env.APPWRITE_DATABASE_ID;
const collectionId = process.env.APPWRITE_COLLECTION_ID;

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(projectId);

const database = new Databases(client);

export const getAllBlogPosts = async () => {
  const response = await database.listDocuments(databaseId, collectionId);
  return response;
};

export const getPostById = async (id) => {
  const response = await database.getDocument(databaseId, collectionId, id);

  return response;
};
