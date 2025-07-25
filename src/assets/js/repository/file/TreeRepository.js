// File: src/assets/js/repository/TreeRepository.js
export default class TreeRepository {
    async fetchTreeData() {
        const response = await fetch("./data/ebook.json");
        //console.log(response);
        if (!response.ok) 
        {
            throw new Error("Failed to fetch tree data");
        }
        return await response.json();
    }
}