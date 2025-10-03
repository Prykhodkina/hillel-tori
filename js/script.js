`use strict;`

function createBus() {
    const topics = Object.create(null);

    function on(topic, handler) {
        if (!topics[topic]) {
            topics[topic] = new Set();
        }
        topics[topic].add(handler);

        return function unsubscribe() {
            off(topic, handler);
        };
    }

    function off(topic, handler) {
        if (!topics[topic]) return;
        topics[topic].delete(handler);


        if (topics[topic].size === 0) {
            delete topics[topic];
        }
    }

    function emit(topic, payload, delay = 0) {
        if (!topics[topic]) return;

        setTimeout(() => {

            const handlers = Array.from(topics[topic]);
            for (let i = 0; i < handlers.length; i++) {
                try {
                    handlers[i](payload);
                } catch (err) {
                    console.error("Handler error:", err);
                }
            }
        }, delay);
    }

    return { on, off, emit };
}
