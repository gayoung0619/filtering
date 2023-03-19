import rendering from "./js/rendering.js";
import joblist from "./js/joblist.js";
import filter from "./js/filtering.js";

const data = await rendering();
joblist(data);

filter();


