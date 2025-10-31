import { branches } from "../../../data/branches";

export const getAllBranches = () => {
    return [...branches];
};

export const getBranchById = (id: number) => {
    return branches.find(branch => branch.id === id);
};

export const createBranch = (branchData: any) => {
    const newId = Math.max(...branches.map(branch => branch.id), 0) + 1;
    const newBranch = {
        id: branches.length + 1,
        ...branchData
    };
    branches.push(newBranch);
    return { ...newBranch };
};

export const updateBranch = (id: number, updateData: any) => {
    const index = branches.findIndex(branch => branch.id === id);
    
    if (index === -1) {
        return undefined;
    }

    branches[index] = {
        ...branches[index],
        ...updateData
    };

    return { ...branches[index] };
};

export const deleteBranch = (id: number) => {
    const index = branches.findIndex(branch => branch.id === id);
    
    if (index === -1) {
        return false;
    }

    branches.splice(index, 1);
    return true;
};