
fetch('../data.json')
.then((response) => response.json())
.then((data) => {
    console.log(data)
    let html = "";
    const wrap = document.querySelector('.wrap');
    data.map((item) => {
        html += `
            <div class="list">
                    <div class="left">
                        <span class="profile logo"><img src="${item.logo}"></span>
                        <div class="middle">
                            <div class="icon_wrap">
                                <span class="icon company">${item.company}</span>
                                <span>${item.new == true? `<span class="icon">NEW!</span>` : ` `}</span>
                                <span class="icon featured" data-featured="featured">FEATURED</span>
                            </div>
                            <div class="level position">${item.position}</div>
                            <div class="info">
                                <span class="postedAt">${item.postedAt}</span>
                                <span class="contract">${item.contract}</span>
                                <span class="location">${item.location}</span>
                            </div>
                        </div>
                    </div>
                    <ul class="right">
                        <li class="filter">${item.role}</li>
                        <li class="filter">${item.level}</li>
                        ${item.languages.map(lang=>`<li class="filter">${lang}</li>`).join('')}
                        ${item.tools.map(tool=>`<li class="filter">${tool}</li>`).join('')}
                    </ul>
                </div>
            `
    })
    wrap.innerHTML = html;
})
.catch(error => console.log('fetch 에러!'));

const searchitem = document.getElementById('search_items')
window.onload = function () {
    window.addEventListener('click', (e) => {
        if(e.target.classList.contains('filter')) {
            let tagValue = e.target.value;
            console.log(tagValue)
        }
    })

}



