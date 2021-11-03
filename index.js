let bookContainer = document.querySelector(".search");
let searchBooks = document.getElementById("search-box");

/** @start 添加元素 */
[
  { id: "ProgramingLanguage", title: "编程语言(Python、C++、MATLAB、R)", icon: "" }, 
  { id: "ComputerBasics",title: "计算机基础(数据结构、计算机网络、操作系统)",icon: "",},
  { id: "DataBase", title: "数据库(MySQL、Redis、TiDB)", icon: "" },
  { id: "BigData", title: "大数据框架与组件(Hadoop、Hive、Zookeeper、Spark...)", icon: "" },
  { id: "DataWarehouse", title: "数据仓库", icon: "" },
  {id: "MachineLearning",title: "机器学习(聚类、分类、降维、神经网络...)",icon: "",},
  { id: "SRE", title: "运维开发", icon: "" },
  { id: "FrontEnd", title: "前端", icon: "" },
  { id: "Other", title: "其他", icon: "" },
].forEach(({ id, title, icon }) => {
  document.addEventListener("DOMContentLoaded", () => {
    drawChartBook(id);
  });
  
  /** 去除无效的箭头 */
  document.querySelector("#About").innerHTML =
    document.querySelector("#About").innerHTML +
    `
      <section id=${id} class="results">
        <div class="flex">
          <h1 class="section-title">${title}</h1>
		  
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
  
/** 原版 */
/**
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
**/

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
            title: "C Primer Plus(未上线)",
            previewLink: "#",
            imageLinks: {
              thumbnail: "images/175230-16134691507a8b.jpg",
            },
            categories: ["C/C++"],
          },
        },
        {
          volumeInfo: {
            title: "C语言入门",
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
            title: "Python速学笔记",
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
            title: "C++教程",
            previewLink: "http://c.biancheng.net/c/",
            imageLinks: {
              thumbnail: "images/204113-161028247361da.jpg",
            },
            categories: ["C/C++"],
          },
        },
        {
          volumeInfo: {
            title: "C语言教程",
            previewLink: "https://www.runoob.com/cprogramming/c-tutorial.html",
            imageLinks: {
              thumbnail: "images/232024-161409362427c1.jpg",
            },
            categories: ["C/C++"],
          },
        },
        {
          volumeInfo: {
            title: "C语言标准库",
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
            title: "labuladong的算法小抄",
            previewLink: "https://labuladong.gitee.io/algo/",
            imageLinks: {
              thumbnail: "images/223855-16292975352254.jpg",
            },
            categories: ["数据结构"],
          },
        },
        {
          volumeInfo: {
            title: "算法通关之路",
            previewLink: "https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/",
            imageLinks: {
              thumbnail: "images/001202-1629562322acef.jpg",
            },
            categories: ["数据结构"],
          },
        },
        {
          volumeInfo: {
            title: "LeetCode题解集合",
            previewLink: "https://github.com/liweiwei1419/LeetCode-Solutions-in-Good-Style",
            imageLinks: {
              thumbnail: "images/000926-1629562166e568.jpg",
            },
            categories: ["数据结构"],
          },
        },
	    {
          volumeInfo: {
            title: "计算机综合",
            previewLink: "https://dasydong.gitbook.io/interview/",
            imageLinks: {
              thumbnail: "images/000147-16051105074c60.jpg",
            },
            categories: ["数据结构","计算机网络"],
          },
        },
        {
          volumeInfo: {
            title: "计算机网络总结",
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
            previewLink: "https://www.w3school.com.cn/sql/index.asp",
            imageLinks: {
              thumbnail: "images/000027-1577980827ddbf.jpg",
            },
            categories: ["SQL"],
          },
        },
        {
          volumeInfo: {
            title: "MySQL必知必会",
            previewLink: "#",
            imageLinks: {
              thumbnail: "images/002135-1577290895ab81.jpg",
            },
            categories: ["SQL", "MySQL"],
          },
        },
        {
          volumeInfo: {
            title: "SQL进阶教程",
            previewLink: "#",
            imageLinks: {
              thumbnail: "images/002250-1570292570e101.jpg",
            },
            categories: ["SQL", "MySQL"],
          },
        },
        {
          volumeInfo: {
            title: "MySQL45讲",
            previewLink: "https://sao-operation.gitee.io/my-sql45/",
            imageLinks: {
              thumbnail: "images/004448-1571417088f756.jpg",
            },
            categories: ["MySQL"],
          },
        },
        {
          volumeInfo: {
            title: "高性能MySQL",
            previewLink: "https://www.jianguoyun.com/p/DYjjHdIQkrXqCRjqgI4E",
            imageLinks: {
              thumbnail: "images/005846-1577293126bce8.jpg",
            },
            categories: ["MySQL"],
          },
        },
		{
          volumeInfo: {
            title: "InnoDB存储引擎",
            previewLink: "https://www.jianguoyun.com/p/DUjezqMQkrXqCRjngI4E",
            imageLinks: {
              thumbnail: "images/010942-15772937827d2b.jpg",
            },
            categories: ["MySQL"],
          },
        },
		{
          volumeInfo: {
            title: "TiDB博客",
            previewLink: "https://pingcap.com/zh/blog",
            imageLinks: {
              thumbnail: "images/233456-1587742496b804.jpg",
            },
            categories: ["MySQL"],
          },
        },
		{
          volumeInfo: {
            title: "TiDB in Action",
            previewLink: "https://book.tidb.io/",
            imageLinks: {
              thumbnail: "images/234314-1585582994560e.jpg",
            },
            categories: ["MySQL"],
          },
        }
      ];
      break;
    }
    case "BigData": {
      data = [
        {
          volumeInfo: {
            title: "大数据概念及框架体系",
            previewLink: "https://notebook.memorydrive.online/",
            imageLinks: {
              thumbnail: "images/090303-15687685838243.jpg",
            },
            categories: ["Hadoop"],
          },
        },
        {
          volumeInfo: {
            title: "Hadoop",
            previewLink: "https://notebook.memorydrive.online/",
            imageLinks: {
              thumbnail: "images/093952-15768923927311.jpg",
            },
            categories: ["大数据框架"],
          },
        },
        {
          volumeInfo: {
            title: "HDFS",
            previewLink: "https://notebook.memorydrive.online/",
            imageLinks: {
              thumbnail: "images/094305-157689258505de.jpg",
            },
            categories: ["Hadoop","分布式存储"],
          },
        },
        {
          volumeInfo: {
            title: "yarn",
            previewLink: "https://notebook.memorydrive.online/",
            imageLinks: {
              thumbnail: "images/095355-1576893235e846.jpg",
            },
            categories: ["Hadoop"],
          },
        },
        {
          volumeInfo: {
            title: "Zookeeper",
            previewLink: "https://notebook.memorydrive.online/",
            imageLinks: {
              thumbnail: "images/095928-1576893568c5b3.jpg",
            },
            categories: ["Hadoop"],
          },
        },
		{
          volumeInfo: {
            title: "Hive",
            previewLink: "https://www.jianguoyun.com/p/Df4AsBkQkrXqCRjpgI4E",
            imageLinks: {
              thumbnail: "images/120846-15779381268161.jpg",
            },
            categories: ["Hadoop","离线计算"],
          },
        },
		{
          volumeInfo: {
            title: "HBase",
            previewLink: "https://notebook.memorydrive.online/",
            imageLinks: {
              thumbnail: "images/150631-15711231918639.jpg",
            },
            categories: ["Hadoop", "分布式数据库"],
          },
        },
		{
          volumeInfo: {
            title: "Kafka",
            previewLink: "https://kafka.apachecn.org/",
            imageLinks: {
              thumbnail: "images/180809-1568628489c3bd.jpg",
            },
            categories: ["消息系统"],
          },
        },
		{
          volumeInfo: {
            title: "Spark",
            previewLink: "http://spark.apachecn.org/#/",
            imageLinks: {
              thumbnail: "images/183943-15810719837bba.jpg",
            },
            categories: ["大数据框架", "实时计算"],
          },
        },
      ];
      break;
    }
    case "DataWarehouse": {
      data = [
        {
          volumeInfo: {
            title: "数仓基础",
            previewLink: "https://www.jianguoyun.com/p/DQ-H9e4QkrXqCRjcgI4E",
            imageLinks: {
              thumbnail: "images/184821-15860837017868.jpg",
            },
            categories: ["数据仓库"],
          },
        },
		{
          volumeInfo: {
            title: "Hive SQL",
            previewLink: "https://www.jianguoyun.com/p/DWb0lxEQkrXqCRjlgI4E",
            imageLinks: {
              thumbnail: "images/202121-158479328143e5.jpg",
            },
            categories: ["SQL"],
          },
        },
		{
          volumeInfo: {
            title: "Hive调优",
            previewLink: "https://www.jianguoyun.com/p/DZe2aLMQkrXqCRjrgI4E",
            imageLinks: {
              thumbnail: "images/7c540c227b962f8dd894b933c4a7125.jpg",
            },
            categories: ["SQL"],
          },
        },
		{
          volumeInfo: {
            title: "血缘关系管理平台",
            previewLink: "https://sqlflow.gudusoft.com/#/",
            imageLinks: {
              thumbnail: "images/224506-1600267506b218.jpg",
            },
            categories: ["数据仓库"],
          },
        },
		{
          volumeInfo: {
            title: "数据分析",
            previewLink: "https://www.yuque.com/choingai/data_analysis",
            imageLinks: {
              thumbnail: "images/201845-1580991525bc77.jpg",
            },
            categories: ["数据分析"],
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
            previewLink: "https://www.yuque.com/choingai/revhng/bl1oz9",
            imageLinks: {
              thumbnail: "images/205154-157762391470ff.jpg",
            },
            categories: ["统计学"],
          },
        },
        {
          volumeInfo: {
            title: "分类",
            previewLink: "https://www.yuque.com/choingai/revhng/htqpcv",
            imageLinks: {
              thumbnail: "images/211159-15736507190a1c.jpg",
            },
            categories: ["统计学"],
          },
        },
		{
          volumeInfo: {
            title: "降维",
            previewLink: "https://www.yuque.com/choingai/revhng/fvgor8",
            imageLinks: {
              thumbnail: "images/214924-1578404964b30b.jpg",
            },
            categories: ["统计学"],
          },
        },
        {
          volumeInfo: {
            title: "回归",
            previewLink: "https://www.yuque.com/choingai/revhng/xvwyov",
            imageLinks: {
              thumbnail: "images/215045-1570024245d1ce.jpg",
            },
            categories: ["统计学"],
          },
        },
        {
          volumeInfo: {
            title: "集成学习（未上线）",
            previewLink: "#",
            imageLinks: {
              thumbnail: "images/215153-1573134713cb33.jpg",
            },
            categories: ["统计学"],
          },
        },
        {
          volumeInfo: {
            title: "神经网络",
            previewLink: "https://www.yuque.com/choingai/revhng/oi9qd1",
            imageLinks: {
              thumbnail: "images/223544-15848013445019.jpg",
            },
            categories: ["深度学习"],
          },
        },
        {
          volumeInfo: {
            title: "群智能优化（未上线）",
            previewLink: "#",
            imageLinks: {
              thumbnail: "images/224016-1568644816974e.jpg",
            },
            categories: ["计算数学"],
          },
        },
		{
          volumeInfo: {
            title: "sklearn中文文档",
            previewLink: "https://www.cntofu.com/book/170/index.html",
            imageLinks: {
              thumbnail: "images/224414-1585406654d96b.jpg",
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
              thumbnail: "images/224748-15755572688942.jpg",
            },
            categories: ["Nginx"],
          },
        },
        {
          volumeInfo: {
            title: "Docker",
            previewLink: "http://www.dockerinfo.net/document",
            imageLinks: {
              thumbnail: "images/224821-1588862901f9c3.jpg",
            },
            categories: ["docker"],
          },
        },
		{
          volumeInfo: {
            title: "kubernetes",
            previewLink: "http://github.com/caicloud/kube-ladder",
            imageLinks: {
              thumbnail: "images/224938-15686453785033.jpg",
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
            previewLink: "https://www.runoob.com/html/html5-intro.html",
            imageLinks: {
              thumbnail: "images/225854-15700283344428.jpg"
            },
            categories: ["Web前端"],
          },
        },
        {
          volumeInfo: {
            title: "JavaScript",
            previewLink: "https://www.nowcoder.com/tutorial/10009/93ea8bfac75844888a914d1b8741b791",
            imageLinks: {
              thumbnail: "images/230143-1577977303d98f.jpg",
            },
            categories: ["Web前端"],
          },
        },
        {
          volumeInfo: {
            title: "Vue教程",
            previewLink: "https://cn.vuejs.org/v2/guide/",
            imageLinks: {
              thumbnail: "images/230446-1580310286dcf8.jpg",
            },
            categories: ["Web前端"],
          },
        },
		{
          volumeInfo: {
            title: "PyQT",
            previewLink: "http://code.py40.com/pyqt5/",
            imageLinks: {
              thumbnail: "images/230840-1585408120e886.jpg",
            },
            categories: ["PC客户端"],
          },
        },
        {
          volumeInfo: {
            title: "MATLAB App Designer",
            previewLink: "https://ww2.mathworks.cn/help/matlab/gui-development.html?s_tid=CRUX_lftnav",
            imageLinks: {
              thumbnail: "images/231336-1574954016b4d7.jpg",
            },
            categories: ["PC客户端"],
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
            previewLink: "https://www.yuque.com/choingai/rn5vsl#",
            imageLinks: {
              thumbnail: "images/232140-15711529009394.jpg",
            },
            categories: ["程序员"],
          },
        },	
        {
          volumeInfo: {
            title: "财务分析(未上线)",
            previewLink: "#",
            imageLinks: {
              thumbnail: "images/232459-1575645899a766.jpg",
            },
            categories: ["金融"],
          },
        },
        {
          volumeInfo: {
            title: "创新与创业思考(未上线)",
            previewLink: "#",
            imageLinks: {
              thumbnail: "images/232608-1585581968a1f2.jpg",
            },
            categories: ["风险与收益"],
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
