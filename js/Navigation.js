`use strict;`

class URLParser {
    constructor(fullUrl) {
        // 1. Помилка: немає перевірки на валідність URL
        this.url = fullUrl;
    }

    get protocol() {
        // 2. Помилка: повертає протокол без двокрапки, бо рядок не розібрано
        return this.url.split("://")[0];
    }

    get hostname() {
        // 3. Помилка: може зламатися, якщо є http:// та query
        return this.url.split("/")[2];
    }

    get path() {
        // 4. Помилка: неправильний зріз, може включати домен або пропустити частину
        return this.url.split("/")[3];
    }

    get queryParams() {
        // 5. Помилка: рядок query розбирають вручну без перевірок
        const paramsPart = this.url.split("?")[1];
        const pairs = paramsPart.split("&"); // впаде, якщо немає "?"
        const params = {};
        pairs.forEach(pair => {
            const [key, value] = pair.split("="); // впаде, якщо формат некоректний
            params[key] = value;
        });
        return params;
    }
}

const badParser = new URLParser("https://example.com/products/item?search=book&page=2");
console.log(badParser.protocol);    // "https"
console.log(badParser.hostname);    // "example.com"
console.log(badParser.path);        // "products" (НЕ "/products/item")
console.log(badParser.queryParams); // { search: "book", page: "2" } (працює лише якщо ? є)

