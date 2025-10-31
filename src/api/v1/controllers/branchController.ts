import { Request, Response } from "express";
import * as branchService from "../services/branchService";

export const getAllBranches = (req: Request, res: Response): void => {
    const branches = branchService.getAllBranches();
    res.status(200).json({ message: "Get all branches", data: branches });
};

export const getBranchById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const branch = branchService.getBranchById(id);
    
    if (branch) {
        res.status(200).json({ message: "Branch found", data: branch });
    } else {
        res.status(404).json({ message: "Branch not found" });
    }
};

export const createBranch = (req: Request, res: Response): void => {
    const newBranch = req.body;
    
    if (!newBranch.name || !newBranch.address || !newBranch.phone) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }
    
    const createdBranch = branchService.createBranch(newBranch);
    res.status(201).json({ message: "Branch created", data: createdBranch });
};

export const updateBranch = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const updatedBranch = req.body;
    const result = branchService.updateBranch(id, updatedBranch);
    
    if (result) {
        res.status(200).json({ message: "Branch updated", data: result });
    } else {
        res.status(404).json({ message: "Branch not found" });
    }
};

export const deleteBranch = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const result = branchService.deleteBranch(id);
    
    if (result) {
        res.status(200).json({ message: "Branch deleted" });
    } else {
        res.status(404).json({ message: "Branch not found" });
    }
};