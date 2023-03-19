import rendering from "./rendering.js";
import joblist from "./joblist.js";

const data = await rendering();
let filterArr = new Set();

const tagClickHandler = (e) => {
    const filter = document.querySelector(".filter");
    const items = document.querySelector(".filter .items");
    const jobs = document.querySelector(".job-list");

    if (e.target.matches(".skills button")) {
        if (filterArr.has(e.target.textContent)) {
            return;
        }
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
      <span>${e.target.textContent}</span>
      <button>
      x
      </button>
      `;
        items.appendChild(item);
        filterArr.add(e.target.textContent);
        const deleteBtn = item.querySelector("button");
        deleteBtn.addEventListener("click", deleteClickHanlder);

        filter.classList.remove("hidden");
        jobs.classList.add("filtering");

        filterJob();
    }
};

const deleteClickHanlder = (e) => {
    const element = e.target.closest(".item");
    filterArr.delete(element.querySelector("span").textContent);
    element.remove();

    const filter = document.querySelector(".filter");
    const jobs = document.querySelector(".job-list");
    if (filterArr.size === 0) {
        filter.classList.add("hidden");
        jobs.classList.remove("filtering");
    }

    filterJob();
};

const clearClickHandler = () => {
    const filter = document.querySelector(".filter");
    const jobs = document.querySelector(".job-list");
    const items = document.querySelector(".filter .items");

    filterArr.clear();
    items.innerHTML = "";

    filter.classList.add("hidden");
    jobs.classList.remove("filtering");

    filterJob();
};

const filterJob = async () => {
    if (filterArr.size !== 0) {
        const filterData = data.filter((v) => {
            let isFilter = true;
            filterArr.forEach((elem) => {
                if (v.role !== elem && v.level !== elem && !v.languages.includes(elem) && !v.tools.includes(elem)) isFilter = false;
            });
            return isFilter;
        });
        joblist(filterData);
    } else {
        joblist(data);
    }
};

const filtering = () => {
    const jobs = document.querySelector(".job-list");
    const clear = document.querySelector(".clear");

    jobs.addEventListener("click", tagClickHandler);
    clear.addEventListener("click", clearClickHandler);
};

export default filtering;
