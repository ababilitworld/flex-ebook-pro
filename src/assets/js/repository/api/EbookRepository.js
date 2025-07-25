export default class EbookRepository {
    async fetchEbookData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}