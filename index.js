let bookContainer = document.querySelector(".search");
let searchBooks = document.getElementById("search-box");

/** @start 添加元素 */
[
  { id: "ProgramingLanguage", title: "编程语言(Python、C++、MATLAB、R)", icon: "" }, 
  { id: "ComputerBasics",title: "计算机基础(数据结构、计算机网络、操作系统)",icon: "",},
  { id: "DataBase", title: "数据库(MySQL、Redis、TiDB)", icon: "" },
  { id: "BigData", title: "大数据框架与组件(Hadoop、Hive、Zookeeper、Spark...)", icon: "" },
  { id: "DataService", title: "数据业务", icon: "" },
  {id: "MachineLearning",title: "机器学习(聚类、分类、降维、神经网络...)",icon: "",},
  { id: "SRE", title: "运维开发", icon: "" },
  { id: "FrontEnd", title: "前端", icon: "" },
  { id: "Other", title: "其他", icon: "" },
].forEach(({ id, title, icon }) => {
  document.addEventListener("DOMContentLoaded", () => {
    drawChartBook(id);
  });

  document.querySelector("#About").innerHTML =
    document.querySelector("#About").innerHTML +
    `
      <section id=${id} class="results">
        <div class="flex">
          <h1 class="section-title">${title}</h1>
          <div>
            <button id="${id}-prev" class="pagination prev" onclick="prev('${id}')">◀</button>
            <button id="${id}-next" class="pagination next" onclick="next('${id}')">▶</button>
          </div>
        </div>
        <div class="list-book ${id} categories">
          <div class='prompt'>
            <div class="loader"></div>
          </div>
        </div>
        <div class="fade left"></div>
        <div class="fade right"></div>
      </section>
  `;
});

/** @end 添加元素 */

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getCover = (title) => {
  return `https://orly-appstore.herokuapp.com/generate?title=${title}&top_text=Just%20Coder&author=wx-chevalier&image_code=${randomIntFromInterval(
    1,
    40
  )}&theme=${randomIntFromInterval(
    0,
    16
  )}&guide_text=&guide_text_placement=bottom_right`;
};

/** 执行书籍抓取 */
const getBooks = async (book) => {
  let data = [];

  switch (book) {
    case "ProgramingLanguage": {
      data = [
        {
          volumeInfo: {
            title: "C Primer Plus",
            previewLink: "#",
            imageLinks: {
              thumbnail: "images/175230-16134691507a8b.jpg",
            },
            categories: ["C/C++"],
          },
        },
        {
          volumeInfo: {
            title: "C语言教程(C语言中文网)",
            previewLink: "http://c.biancheng.net/c/",
            imageLinks: {
              thumbnail: "images/232817-1618327697f103.jpg",
            },
            categories: ["C/C++"],
          },
        },
		        {
          volumeInfo: {
            title: "Python3官方中文文档",
            previewLink:
              "https://docs.python.org/zh-cn/3/",
            imageLinks: {
              thumbnail: "images/223556-16099437560fa6.jpg",
            },
            categories: ["C/C++"],
          },
        },
		{
          volumeInfo: {
            title: "MATLAB中文文档",
            previewLink:
              "https://ww2.mathworks.cn/help/matlab/index.html",
            imageLinks: {
              thumbnail: "images/222442-15997478827b72.jpg",
            },
            categories: ["MATLAB"],
          },
        },
		{
          volumeInfo: {
            title: "R语言教程",
            previewLink:
              "https://www.math.pku.edu.cn/teachers/lidf/docs/Rbook/html/_Rbook/index.html",
            imageLinks: {
              thumbnail: "images/235859-1596815939993e.jpg",
            },
            categories: ["R"],
          },
        },
		{
          volumeInfo: {
            title: "Python速学笔记(廖雪峰)",
            previewLink:
              "https://www.liaoxuefeng.com/wiki/1016959663602400",
            imageLinks: {
              thumbnail: "images/233601-1611588961e251.jpg",
            },
            categories: ["C/C++"],
          },
        },
        {
          volumeInfo: {
            title: "C++教程(C语言中文网)",
            previewLink: "http://c.biancheng.net/c/",
            imageLinks: {
              thumbnail: "images/204113-161028247361da.jpg",
            },
            categories: ["C/C++"],
          },
        },
        {
          volumeInfo: {
            title: "C语言教程(菜鸟教程)",
            previewLink: "https://www.runoob.com/cprogramming/c-tutorial.html",
            imageLinks: {
              thumbnail: "images/232024-161409362427c1.jpg",
            },
            categories: ["C/C++"],
          },
        },
        {
          volumeInfo: {
            title: "C语言标准库(菜鸟教程)",
            previewLink: "https://www.runoob.com/cprogramming/c-standard-library.html",
            imageLinks: {
              thumbnail: "images/231925-1614093565925d.jpg",
            },
            categories: ["C/C++","标准库"],
          },
        },
      ];
      break;
    }
    case "ComputerBasics": {
      data = [
	    {
          volumeInfo: {
            title: "计算机综合",
            previewLink: "https://ng-tech.icu/JavaScript-Series/#/",
            imageLinks: {
              thumbnail: "images/000147-16051105074c60.jpg",
            },
            categories: ["数据结构","计算机网络","操作系统"],
          },
        },
        {
          volumeInfo: {
            title: "labuladong的算法小抄",
            previewLink: "https://gitee.com/Sao-operation/fucking-algorithm",
            imageLinks: {
              thumbnail: "images/224506-1600267506b218.jpg",
            },
            categories: ["数据结构"],
          },
        },
        {
          volumeInfo: {
            title: "计算机网络总结(菜鸟教程)",
            previewLink: "https://www.runoob.com/w3cnote/summary-of-network.html",
            imageLinks: {
              thumbnail: "images/214244-1597671764874d.jpg",
            },
            categories: ["计算机网络"],
          },
        },
        {
          volumeInfo: {
            title: "操作系统(语雀:北冥有鱼)",
            previewLink: "https://www.yuque.com/beimingyouyu-9woka/computer/zcrl9i",
            imageLinks: {
              thumbnail: "images/214347-15917102273d10.jpg",
            },
            categories: ["操作系统"],
          },
        },
		{
          volumeInfo: {
            title: "操作系统(语雀:Jieker)",
            previewLink: "https://www.yuque.com/jieker/operating_system/dglx8z",
            imageLinks: {
              thumbnail: "images/230122-1590591682afb8.jpg",
            },
            categories: ["操作系统"],
          },
        },
      ];
      break;
    }
    case "DataBase": {
      data = [
	    {
          volumeInfo: {
            title: "SQL教程(W3school)",
            previewLink: "#",
            imageLinks: {
              thumbnail: getCover("Design Patterns"),
            },
            categories: ["SQL"],
          },
        },
        {
          volumeInfo: {
            title: "MySQL必知必会",
            previewLink: "#",
            imageLinks: {
              thumbnail: getCover("Design Patterns"),
            },
            categories: ["SQL", "MySQL"],
          },
        },
        {
          volumeInfo: {
            title: "SQL进阶教程",
            previewLink: "#",
            imageLinks: {
              thumbnail: getCover("Algorithm & DataStructure"),
            },
            categories: ["SQL", "MySQL"],
          },
        },
        {
          volumeInfo: {
            title: "MySQL45讲",
            previewLink: "https://ng-tech.icu/SoftwareArchitecture-Series/",
            imageLinks: {
              thumbnail: getCover("Software Architecture"),
            },
            categories: ["MySQL"],
          },
        },
        {
          volumeInfo: {
            title: "高性能MySQL第三版",
            previewLink: "https://ng-tech.icu/SoftwareEngineering-Series/",
            imageLinks: {
              thumbnail: getCover("Refactor"),
            },
            categories: ["MySQL"],
          },
        },
		{
          volumeInfo: {
            title: "MySQL技术内幕:InnoDB存储引擎(第2版)",
            previewLink: "https://ng-tech.icu/SoftwareEngineering-Series/",
            imageLinks: {
              thumbnail: getCover("Refactor"),
            },
            categories: ["MySQL"],
          },
        },
      ];
      break;
    }
    case "BigData": {
      data = [
        {
          volumeInfo: {
            title: "大数据概念及框架体系",
            previewLink: "https://ng-tech.icu/Frontend-Series/",
            imageLinks: {
              thumbnail: getCover("Data Visualization"),
            },
            categories: ["Hadoop"],
          },
        },
        {
          volumeInfo: {
            title: "Hadoop",
            previewLink: "https://ng-tech.icu/Web-Series/",
            imageLinks: {
              thumbnail: getCover("Web Series"),
            },
            categories: ["大数据框架"],
          },
        },
        {
          volumeInfo: {
            title: "HDFS",
            previewLink: "https://ng-tech.icu/React-Series/",
            imageLinks: {
              thumbnail: getCover("React"),
            },
            categories: ["Hadoop","分布式存储"],
          },
        },
        {
          volumeInfo: {
            title: "yarn",
            previewLink: "https://ng-tech.icu/Node-Series/",
            imageLinks: {
              thumbnail: getCover("Node Series"),
            },
            categories: ["Hadoop"],
          },
        },
        {
          volumeInfo: {
            title: "Zookeeper",
            previewLink: "https://ng-tech.icu/CGDataVis-Series/",
            imageLinks: {
              thumbnail: getCover("视觉与可视化"),
            },
            categories: ["Hadoop"],
          },
        },
		{
          volumeInfo: {
            title: "Hive",
            previewLink: "https://ng-tech.icu/CGDataVis-Series/",
            imageLinks: {
              thumbnail: getCover("视觉与可视化"),
            },
            categories: ["Hadoop","离线计算"],
          },
        },
		{
          volumeInfo: {
            title: "HBase",
            previewLink: "https://ng-tech.icu/CGDataVis-Series/",
            imageLinks: {
              thumbnail: getCover("视觉与可视化"),
            },
            categories: ["Hadoop", "分布式数据库"],
          },
        },
		{
          volumeInfo: {
            title: "Kraft",
            previewLink: "https://ng-tech.icu/CGDataVis-Series/",
            imageLinks: {
              thumbnail: getCover("视觉与可视化"),
            },
            categories: ["消息系统"],
          },
        },
		{
          volumeInfo: {
            title: "Spark",
            previewLink: "https://ng-tech.icu/CGDataVis-Series/",
            imageLinks: {
              thumbnail: getCover("视觉与可视化"),
            },
            categories: ["大数据框架", "实时计算"],
          },
        },
      ];
      break;
    }
    case "DataService": {
      data = [
        {
          volumeInfo: {
            title: "数据分析",
            previewLink: "https://ng-tech.icu/Backend-Series/",
            imageLinks: {
              thumbnail: getCover("Backend Series"),
            },
            categories: ["业务"],
          },
        },
		{
          volumeInfo: {
            title: "数据仓库建模",
            previewLink: "https://ng-tech.icu/Backend-Series/",
            imageLinks: {
              thumbnail: getCover("Backend Series"),
            },
            categories: ["数据仓库"],
          },
        },
        {
          volumeInfo: {
            title: "电商数据业务",
            previewLink: "https://ng-tech.icu/MicroService-Series/",
            imageLinks: {
              thumbnail: getCover("MicroService Series"),
            },
            categories: ["业务"],
          },
        },
      ];
      break;
    }
    case "MachineLearning": {
      data = [
        {
          volumeInfo: {
            title: "聚类",
            previewLink: "https://ng-tech.icu/DistributedCompute-Series/#/",
            imageLinks: {
              thumbnail: getCover("Distributed Compute Series"),
            },
            categories: ["统计学"],
          },
        },
        {
          volumeInfo: {
            title: "分类",
            previewLink: "https://ng-tech.icu/Database-Series/#/",
            imageLinks: {
              thumbnail: getCover("Database Series"),
            },
            categories: ["统计学"],
          },
        },
		{
          volumeInfo: {
            title: "降维",
            previewLink: "https://ng-tech.icu/Database-Series/#/",
            imageLinks: {
              thumbnail: getCover("Database Series"),
            },
            categories: ["统计学"],
          },
        },
        {
          volumeInfo: {
            title: "回归",
            previewLink: "https://ng-tech.icu/Network-Series/#/",
            imageLinks: {
              thumbnail: getCover("Network Series"),
            },
            categories: ["统计学"],
          },
        },
        {
          volumeInfo: {
            title: "集成学习",
            previewLink: "https://ng-tech.icu/Cloud-Series/#/",
            imageLinks: {
              thumbnail: getCover("Cloud Series"),
            },
            categories: ["统计学"],
          },
        },
        {
          volumeInfo: {
            title: "神经网络",
            previewLink: "https://ng-tech.icu/Linux-Series/#/",
            imageLinks: {
              thumbnail: getCover("Linux Series"),
            },
            categories: ["深度学习"],
          },
        },
        {
          volumeInfo: {
            title: "群智能优化",
            previewLink: "https://ng-tech.icu/Concurrent-Series/#/",
            imageLinks: {
              thumbnail: getCover("Concurrent Series"),
            },
            categories: ["计算数学"],
          },
        },
		{
          volumeInfo: {
            title: "sklearn中文文档",
            previewLink: "https://www.cntofu.com/book/170/index.html",
            imageLinks: {
              thumbnail: getCover("Concurrent Series"),
            },
            categories: ["Python"],
          },
        },
      ];
      break;
    }
    case "SRE": {
      data = [
        {
          volumeInfo: {
            title: "Nginx中文文档",
            previewLink: "https://www.nginx.cn/doc/",
            imageLinks: {
              thumbnail: getCover("Mathematics Series"),
            },
            categories: ["Nginx"],
          },
        },
        {
          volumeInfo: {
            title: "Docker",
            previewLink: "http://www.dockerinfo.net/document",
            imageLinks: {
              thumbnail: getCover("Data Series"),
            },
            categories: ["docker"],
          },
        },
		{
          volumeInfo: {
            title: "kubernetes",
            previewLink: "http://github.com/caicloud/kube-ladder",
            imageLinks: {
              thumbnail: getCover("Data Series"),
            },
            categories: ["k8s"],
          },
        },
      ];
      break;
    }
    case "FrontEnd": {
      data = [
        {
          volumeInfo: {
            title: "HTML与CSS",
            previewLink: "https://ng-tech.icu/Product-Series/#/",
            imageLinks: {
              thumbnail: getCover("Product Series"),
            },
            categories: ["Product Series"],
          },
        },
        {
          volumeInfo: {
            title: "JavaScript",
            previewLink: "https://ng-tech.icu/Business-Series/#/",
            imageLinks: {
              thumbnail: getCover("Business Series"),
            },
            categories: ["Business Series"],
          },
        },
        {
          volumeInfo: {
            title: "Vue教程",
            previewLink: "https://cn.vuejs.org/v2/guide/",
            imageLinks: {
              thumbnail: getCover("Industry Series"),
            },
            categories: ["Industry Series"],
          },
        },
		{
          volumeInfo: {
            title: "QT",
            previewLink: "https://ng-tech.icu/Product-Series/#/",
            imageLinks: {
              thumbnail: getCover("Product Series"),
            },
            categories: ["Product Series"],
          },
        },
        {
          volumeInfo: {
            title: "MATLAB GUI",
            previewLink: "https://ng-tech.icu/Business-Series/#/",
            imageLinks: {
              thumbnail: getCover("Business Series"),
            },
            categories: ["Business Series"],
          },
        },
      ];
      break;
    }
	case "Other": {
      data = [
        {
          volumeInfo: {
            title: "开发工具",
            previewLink: "https://ng-tech.icu/Product-Series/#/",
            imageLinks: {
              thumbnail: getCover("Product Series"),
            },
            categories: ["Product Series"],
          },
        },	
        {
          volumeInfo: {
            title: "财务分析",
            previewLink: "https://ng-tech.icu/Product-Series/#/",
            imageLinks: {
              thumbnail: getCover("Product Series"),
            },
            categories: ["Product Series"],
          },
        },
        {
          volumeInfo: {
            title: "创新与创业思考",
            previewLink: "https://ng-tech.icu/Industry-Series/#/",
            imageLinks: {
              thumbnail: getCover("Industry Series"),
            },
            categories: ["Industry Series"],
          },
        },
      ];
      break;
    }
  }

  data.forEach((d) => {
    d.volumeInfo.authors = [" "];	/**作者姓名**/
  });

  return { totalItems: data.length, items: data };
};

const drawChartBook = async (subject, startIndex = 0) => {
  let cbookContainer = document.querySelector(`.${subject}`);
  cbookContainer.innerHTML = `<div class='prompt'><div class="loader"></div></div>`;
  const cdata = await getBooks(subject);
  if (cdata.error) {
    cbookContainer.innerHTML = `<div class='prompt'>ツ Limit exceeded! Try after some time</div>`;
  } else if (cdata.totalItems == 0) {
    cbookContainer.innerHTML = `<div class='prompt'>ツ No results, try a different term!</div>`;
  } else if (cdata.totalItems == undefined) {
    cbookContainer.innerHTML = `<div class='prompt'>ツ Network problem!</div>`;
  } else {
    cbookContainer.innerHTML = cdata.items;
    cbookContainer.innerHTML = cdata.items
      .map(
        ({ volumeInfo }) =>
          `<div class='book' style='background: linear-gradient(` +
          getRandomColor() +
          `, rgba(0, 0, 0, 0));'><a href='${volumeInfo.previewLink}' target='_blank'><img class='thumbnail' src='` +
          (volumeInfo.imageLinks.thumbnail === undefined
            ? "icons/logo.svg"
            : volumeInfo.imageLinks.thumbnail.replace("http://", "https://")) +
          `' alt='cover'></a><div class='book-info'><h3 class='book-title'><a href='${volumeInfo.previewLink}' target='_blank'>${volumeInfo.title}</a></h3><div class='book-authors' onclick='updateFilter(this,"author");'>${volumeInfo.authors}</div><div class='info' onclick='updateFilter(this,"subject");' style='background-color: ` +
          getRandomColor() +
          `;'>` +
          (volumeInfo.categories === undefined
            ? "Others"
            : volumeInfo.categories) +
          `</div></div></div>`
      )
      .join("");
  }
};

const drawListBook = async () => {
  if (searchBooks.value != "") {
    bookContainer.style.display = "flex";
    bookContainer.innerHTML = `<div class='prompt'><div class="loader"></div></div>`;
    const data = await getBooks(`${searchBooks.value}&maxResults=6`);
    if (data.error) {
      bookContainer.innerHTML = `<div class='prompt'>ツ Limit exceeded! Try after some time</div>`;
    } else if (data.totalItems == 0) {
      bookContainer.innerHTML = `<div class='prompt'>ツ No results, try a different term!</div>`;
    } else if (data.totalItems == undefined) {
      bookContainer.innerHTML = `<div class='prompt'>ツ Network problem!</div>`;
    } else {
      bookContainer.innerHTML = data.items
        .map(
          ({ volumeInfo }) =>
            `<div class='book' style='background: linear-gradient(` +
            getRandomColor() +
            `, rgba(0, 0, 0, 0));'><a href='${volumeInfo.previewLink}' target='_blank'><img class='thumbnail' src='` +
            (volumeInfo.imageLinks.thumbnail === undefined
              ? "icons/logo.svg"
              : volumeInfo.imageLinks.thumbnail.replace(
                  "http://",
                  "https://"
                )) +
            `' alt='cover'></a><div class='book-info'><h3 class='book-title'><a href='${volumeInfo.previewLink}' target='_blank'>${volumeInfo.title}</a></h3><div class='book-authors' onclick='updateFilter(this,"author");'>${volumeInfo.authors}</div><div class='info' onclick='updateFilter(this,"subject");' style='background-color: ` +
            getRandomColor() +
            `;'>` +
            (volumeInfo.categories === undefined
              ? "Others"
              : volumeInfo.categories) +
            `</div></div></div>`
        )
        .join("");
    }
  } else {
    bookContainer.style.display = "none";
  }
};
const updateFilter = ({ innerHTML }, f) => {
  document.getElementById("main").scrollIntoView({
    behavior: "smooth",
  });
  let m;
  switch (f) {
    case "author":
      m = "inauthor:";
      break;
    case "subject":
      m = "subject:";
      break;
  }
  searchBooks.value = m + innerHTML;
  debounce(drawListBook, 1000);
};
const debounce = (fn, time, to = 0) => {
  to ? clearTimeout(to) : (to = setTimeout(drawListBook, time));
};

// searchBooks.addEventListener("input", () => debounce(drawListBook, 1000));
searchBooks.addEventListener("click", function name(params) {
  // window.location.href = "#";		#搜索跳转
});

let mainNavLinks = document.querySelectorAll(".scrolltoview");
window.addEventListener("scroll", (event) => {
  let fromTop = window.scrollY + 64;
  mainNavLinks.forEach(({ hash, classList }) => {
    if (!hash) {
      return;
    }

    let section = document.querySelector(hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      classList.add("current");
    } else {
      classList.remove("current");
    }
  });
});
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}40`;
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
if (localStorage.getItem("marcdownTheme") == "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  document
    .querySelector("meta[name=theme-color]")
    .setAttribute("content", "#090b28");
  toggleSwitch.checked = true;
  localStorage.setItem("marcdownTheme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
  document
    .querySelector("meta[name=theme-color]")
    .setAttribute("content", "#ffffff");
  toggleSwitch.checked = false;
  localStorage.setItem("marcdownTheme", "light");
}
const switchTheme = ({ target }) => {
  if (target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", "#090b28");
    localStorage.setItem("marcdownTheme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", "#ffffff");
    localStorage.setItem("marcdownTheme", "light");
  }
};
toggleSwitch.addEventListener("change", switchTheme, false);
let startIndex = 0;
const next = (subject) => {
  startIndex += 6;
  if (startIndex >= 0) {
    document.getElementById(`${subject}-prev`).style.display = "inline-flex";
    drawChartBook(subject, startIndex);
  } else {
    document.getElementById(`${subject}-prev`).style.display = "none";
  }
};
const prev = (subject) => {
  startIndex -= 6;
  if (startIndex <= 0) {
    startIndex = 0;
    drawChartBook(subject, startIndex);
    document.getElementById(`${subject}-prev`).style.display = "none";
  } else {
    document.getElementById(`${subject}-prev`).style.display = "inline-flex";
    drawChartBook(subject, startIndex);
  }
};

let pwaInstalled = localStorage.getItem("pwaInstalled") == "yes";
if (window.matchMedia("(display-mode: standalone)").matches) {
  localStorage.setItem("pwaInstalled", "yes");
  pwaInstalled = true;
}
if (window.navigator.standalone === true) {
  localStorage.setItem("pwaInstalled", "yes");
  pwaInstalled = true;
}
if (pwaInstalled) {
  document.getElementById("installPWA").style.display = "none";
} else {
  document.getElementById("installPWA").style.display = "inline-flex";
}
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  deferredPrompt = e;
});
async function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(({ outcome }) => {
      if (outcome === "accepted") {
        console.log("Your PWA has been installed");
      } else {
        console.log("User chose to not install your PWA");
      }
      deferredPrompt = null;
    });
  }
}
window.addEventListener("appinstalled", (evt) => {
  localStorage.setItem("pwaInstalled", "yes");
  pwaInstalled = true;
  document.getElementById("installPWA").style.display = "none";
});
