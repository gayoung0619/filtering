const createFlags = (isNew, isFeatured) => {
    let str = "";
    if (isNew) str += `<span class="new">NEW!</span>`;
    if (isFeatured) str += `<span class="feature">FEATURED!</span>`;
    return str;
};

const createTag = (tag) => {
    return `<button>${tag}</button>`;
};

const createTags = (tags) => {
    let str = "";
    tags.forEach((tag) => {
        str += `<button>${tag}</button>`;
    });
    return str;
};

const addFeatured = (isFeatured) => {
    return isFeatured ? "featured" : "";
};

const createJob = (data) => {
    return `
    <div class="job ${addFeatured(data.featured)}">
      <div class="profile">
        <img src=${data.logo} alt="logo" />
        <div class="contents">
          <div class="top">
            <h2 class="company">${data.company}</h2>
            ${createFlags(data.new, data.featured)}
          </div>
          <a class="position">${data.position}</a>
          <ul class="bottom">
            <li>${data.postedAt}</li>
            <li>${data.contract}</li>
            <li>${data.location}</li>
          </ul>
        </div>
      </div>
      <div class="skills">
        ${createTag(data.role)}
        ${createTag(data.level)}
        ${createTags(data.languages)}
        ${createTags(data.tools)}
      </div>
    </div>
  `;
};

const joblist = (data) => {
    const jobs = document.querySelector(".job-list");
    let str = "";

    data.forEach((v) => {
        str += createJob(v);
    });

    jobs.innerHTML = str;
};

export default joblist;
