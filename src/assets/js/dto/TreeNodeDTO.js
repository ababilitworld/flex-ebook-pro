// File: src/assets/js/dto/TreeNodeDTO.js
export default class TreeNodeDTO {
    constructor({ id, title, details, parent, children = [] }) {
        this.id = id;
        this.title = title;
        this.details = details;
        this.parent = parent;
        this.children = Array.isArray(children) ? children : Object.values(children);
    }
}
