const rendering = () => {
    return fetch("../../data.json").then((response) => response.json());
};

export default rendering;
