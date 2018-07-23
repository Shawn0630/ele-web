enum Component {
    TAKEAWAY = "takeaway",
    SEARCH = "search",
    ORDER = "order",
    USER = "user"
}

function toComponent(component: string): Component {
    switch (component) {
        case "takeaway":
            return Component.TAKEAWAY;
        case "search":
            return Component.SEARCH;
        case "order":
            return Component.ORDER;
        case "user":
            return Component.USER;
        default:
            return Component.TAKEAWAY;
    }
}

export {Component, toComponent};
