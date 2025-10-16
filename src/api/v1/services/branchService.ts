import { Branch } from "../models/branch";
import * as repository from "../repositories/repository";

const COLLECTION = "branches";

export const getAllBranches = async (): Promise<Branch[]> => {
  return await repository.getDocuments<Branch>(COLLECTION);
};

export const getBranchById = async (id: string): Promise<Branch | null> => {
  return await repository.getDocumentById<Branch>(COLLECTION, id);
};

export const createBranch = async (branch: Branch): Promise<Branch & { id: string }> => {
  return await repository.addDocument<Branch>(COLLECTION, branch);
};

export const updateBranch = async (id: string, branch: Partial<Branch>): Promise<void> => {
  await repository.updateDocument<Branch>(COLLECTION, id, branch);
};

export const deleteBranch = async (id: string): Promise<void> => {
  await repository.deleteDocument(COLLECTION, id);
};