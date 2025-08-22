class UrlParser {
    constructor(fullUrl) {
        try {
            this._url = new URL(fullUrl);
        } catch (error) {
            throw new Error("Некоректний URL");
        }
    }

    get protocol() {
        return this._url.protocol;
    }

    get hostname() {
        return this._url.hostname;
    }

    get path() {
        return this._url.pathname.split('/')[1];
    }

    get queryParams() {
        const params = {};
        this._url.searchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }
}

const parser = new UrlParser("https://example.com/products/item?search=book&page=2");

console.log(parser.protocol);
console.log(parser.hostname);
console.log(parser.path);
console.log(parser.queryParams);
