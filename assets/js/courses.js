import data from "../data/data.json" assert { type: "json" };
const { course } = data;
// indentify viewing course
const urlParam = new URLSearchParams(window.location.search);
let courseRender = {};
switch (urlParam.get("course")) {
  case "master-pronounciation":
    courseRender = course[0];
    break;
  case "american-accent":
    courseRender = course[1];
    break;
  case "english-in-life":
    courseRender = course[2];
    break;
  default:
    courseRender = course[0];
    break;
}
//render name
const renderCourseName = (courseRender) => {
  document.querySelector("#header__course-name").innerHTML = courseRender?.name;
};
//render problem
const renderProblem = (courseRender) => {
  let contentHTML = "";
  const { problem } = courseRender;
  problem.map((item) => {
    return (contentHTML += `
    <div class="problem__right-item d-flex align-items-center shadow">
              <div class="problem__right-img text-center">
                <img src="./assets/icon/icon_7.png" alt="" />
              </div>
              <div class="problem__right-text">
                
                <p>
                  ${item}
                </p>
              </div>
            </div>
    `);
  });
  document.querySelector("#problem__holder").innerHTML = contentHTML;
};
//render offer
const renderOffer = (courseRender) => {
  let contentHTML = "";
  const { offer } = courseRender;
  offer.map((item, index) => {
    return (contentHTML += `
    <div class="help__item col-12 col-lg-6">
              <div class="help__img">
                <img src="./assets/icon/Shape${index + 1}.png" alt="..." />
                <div class="help__txt">
                  <p>
                    ${item}
                  </p>
                </div>
              </div>
            </div>
    `);
  });
  document.querySelector("#help__holder").innerHTML = contentHTML;
};
//render question
const renderQuestion = (courseRender) => {
  let contentHTML = "";
  const { questions } = courseRender;
  questions.map((item, index) => {
    return (contentHTML += `
      <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapse-${index + 1}"
          aria-expanded="false"
          aria-controls="flush-collapse-${index + 1}"
        >
          <img src="./assets/icon/Question_2.png" alt="..." />
          ${item?.ask}
        </button>
      </h2>
      <div
        id="flush-collapse-${index + 1}"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          ${item?.ans}
        </div>
      </div>
    </div>
      `);
  });
  document.querySelector("#accordionFlushExample").innerHTML = contentHTML;
};
//render other course
const renderOthers = (courseRender) => {
  //find others courses
  const currentIndex = data.course.findIndex(
    (item) => item.courseId === courseRender.courseId
  );
  const cloneCourse = [...data.course];
  cloneCourse.splice(currentIndex, 1);
  //DOM
  let contentHTML = "";
  cloneCourse.map((item, index) => {
    return (contentHTML += `
    <div class="others__item d-flex">
    <div class="others__left">
      <img src="./assets/img/g3.jpg" alt="..." />
    </div>
    <div class="others__right">
      <div class="others__txt">
        <h3>${item?.name}</h3>
        <h5>Nói nhanh giọng Mỹ</h5>

        <p>
          ${
            item?.offer[0].length > 100
              ? item.offer[0].slice(0, 100) + "..."
              : item.offer[0]
          }
        </p>
        <a href="#" class="btn-course-detail">Xem chi tiết</a>
      </div>
    </div>
  </div>
        `);
  });
  document.querySelector("#others__holder").innerHTML = contentHTML;
};
/**---------RENDER-------------- */
renderCourseName(courseRender);
renderProblem(courseRender);
renderOffer(courseRender);
renderQuestion(courseRender);
renderOthers(courseRender);
