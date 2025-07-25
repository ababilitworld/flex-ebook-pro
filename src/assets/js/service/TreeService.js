// File: src/assets/js/service/TreeService.js
import TreeRepository from "../repository/file/TreeRepository.js";
import TreeFactory from "../factory/TreeFactory.js";

export default class TreeService {
    constructor() {
        this.repository = new TreeRepository();
        this.factory = new TreeFactory();
    }

    async getTree() {
        const raw = await this.repository.fetchTreeData();
        const dtoList = Array.isArray(raw) ? raw : raw.data; // or raw.nodes or raw.tree etc.
        return this.factory.createTree(dtoList);
    }

    
}
