// File: src/assets/js/facade/EbookTreeFacade.js
import TreeManager from "../singleton/TreeManager.js";

export default class EbookTreeFacade 
{
    renderTree(containerId) 
    {
        TreeManager.getInstance().init(containerId);
    }
}