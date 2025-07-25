// File: src/assets/js/app/App.js
import EbookTreeFacade from "../facade/EbookTreeFacade.js";

export default class App {
    static #instance;

    constructor() 
    {
        if (App.#instance) 
        {
            return App.#instance;
        }
        this.ebookTreeFacade = new EbookTreeFacade();
        App.#instance = this;
    }

    run(containerId) 
    {
        this.ebookTreeFacade.renderTree(containerId);
    }
}