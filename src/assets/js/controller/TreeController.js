// File: src/assets/js/controller/TreeController.js
import TreeService from "../service/TreeService.js";

export default class TreeController {
    constructor() {
        this.service = new TreeService();
    }

    async render(containerId) {
        const root = await this.service.getTree();
        const container = document.getElementById(containerId);
        container.innerHTML = "";

        if (!root) {
            container.innerHTML = "<p>Error loading tree data.</p>";
            return;
        }

        container.appendChild(this.buildTree(root));
    }

    buildTree(node) {
        if (!node) return document.createElement('div');
    
        const wrapper = document.createElement('div');
    
        // Create button for this node
        const button = document.createElement('button');
        button.classList.add('accordion-button');
        button.textContent = node.title;
    
        // Create container for details or child nodes
        const content = document.createElement('div');
        content.classList.add('accordion-content');
        content.style.display = 'none';
    
        button.addEventListener('click', () => {
            this.toggleContent(node);
        });
    
        wrapper.appendChild(button);
        wrapper.appendChild(content);
    
        // Recursively render children (if any)
        const children = node.children || [];
        children.forEach(child => {
            const childNode = this.buildTree(child);
            content.appendChild(childNode);
        });
    
        return wrapper;
    }

    toggleContent(item) {
        const contentArea = document.getElementById("content");
    
        // Clear and append DOM elements instead of using innerHTML
        contentArea.innerHTML = "";
        const content = this.prepareContent(item);
        contentArea.appendChild(content);
    
        // Accordion behavior
        const accordionButton = event.target;
        const accordionContent = accordionButton.nextElementSibling;
    
        accordionButton.classList.toggle("open");
        accordionContent.style.display =
            accordionContent.style.display === "block" ? "none" : "block";
    }
    

    prepareContent(item) {
        const content = document.createElement("div");
    
        // Current item details
        const header = document.createElement("h3");
        header.textContent = `${item.parent} . ${item.id}: ${item.title}`;
    
        const details = document.createElement("div");
        details.classList.add("content-details");
        details.innerHTML = `<p>${item.details || ""}</p>`;
    
        content.appendChild(header);
        content.appendChild(details);
    
        // Recursively add children
        const children = item.children || [];
        if (children.length > 0) {
            const childWrapper = document.createElement("div");
            childWrapper.classList.add("child-content");
    
            children.forEach(child => {
                const childContent = this.prepareContent(child);
                childWrapper.appendChild(childContent);
            });
    
            content.appendChild(childWrapper);
        }
    
        return content;
    }
    
    
    
}
