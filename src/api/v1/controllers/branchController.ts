import { Request, Response } from "express";
import * as branchService from "../services/branchService";
import { SuccessResponse, ErrorResponse } from "../models/responseModel";
import { Branch } from "../models/branch";

export const getAllBranches = async (req: Request, res: Response): Promise<void> => {
  try {
    const branches = await branchService.getAllBranches();
    const response: SuccessResponse<Branch[]> = {
      message: "Get all branches",
      data: branches,
    };
    res.status(200).json(response);
  } catch (err: any) {
    const errorResponse: ErrorResponse = { message: err.message || "Failed to fetch branches" };
    res.status(500).json(errorResponse);
  }
};

export const getBranchById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const branch = await branchService.getBranchById(id);

    if (!branch) {
      const errorResponse: ErrorResponse = { message: "Branch not found" };
      res.status(404).json(errorResponse);
      return;
    }

    const response: SuccessResponse<Branch> = {
      message: "Branch found",
      data: branch,
    };
    res.status(200).json(response);
  } catch (err: any) {
    const errorResponse: ErrorResponse = { message: err.message || "Failed to fetch branch" };
    res.status(500).json(errorResponse);
  }
};

export const createBranch = async (req: Request, res: Response): Promise<void> => {
  try {
    const newBranch = await branchService.createBranch(req.body);
    const response: SuccessResponse<Branch> = {
      message: "Branch created",
      data: newBranch,
    };
    res.status(201).json(response);
  } catch (err: any) {
    const errorResponse: ErrorResponse = { message: err.message || "Failed to create branch" };
    res.status(500).json(errorResponse);
  }
};

export const updateBranch = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const branch = await branchService.getBranchById(id);

    if (!branch) {
      const errorResponse: ErrorResponse = { message: "Branch not found" };
      res.status(404).json(errorResponse);
      return;
    }

    await branchService.updateBranch(id, req.body);

    const response: SuccessResponse<null> = {
      message: "Branch updated",
      data: null,
    };
    res.status(200).json(response);
  } catch (err: any) {
    const errorResponse: ErrorResponse = { message: err.message || "Failed to update branch" };
    res.status(500).json(errorResponse);
  }
};

export const deleteBranch = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await branchService.deleteBranch(id);

    const response: SuccessResponse<null> = {
      message: "Branch deleted",
      data: null,
    };
    res.status(200).json(response);
  } catch (err: any) {
    const errorResponse: ErrorResponse = { message: err.message || "Failed to delete branch" };
    res.status(500).json(errorResponse);
  }
};