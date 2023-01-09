//Import data
import data from "../data/data.json" assert { type: "json" };
const { course } = data;
// indentify viewing course
const urlParam = new URLSearchParams(window.location.search);

let courseRender = {}; //set course at first
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
  default: //=> default course
    courseRender = course[0];
    break;
}
//render name
const renderCourseName = (courseRender) => {
  document.querySelector("#header__course-name").innerHTML = courseRender?.name;
  document.querySelector("#help__name").innerHTML = courseRender?.name;
};
//render problem
const renderProblem = (courseRender) => {
  const { problem } = courseRender;
  const contentHTML =
    problem.reduce((init, current) => {
      return (init += `
    <li>${current}</li>
    `);
    }, "<ul>") + "</ul>";
  document.querySelector("#problem__holder").innerHTML = contentHTML;
};
//render offer
const renderOffer = (courseRender) => {
  let contentHTML = "";
  const { offer } = courseRender;
  const offer_spliced = offer.splice(Math.floor(offer.length / 2));
  const offerRender = new Array(offer, offer_spliced);

  offerRender.map((item, index) => {
    if (index % 2 === 0) {
      return (contentHTML += `
   <div class="help__item row align-items-center">
              <div class="help__img col-12 col-lg-6">
                <img src="https://i.pravatar.cc" alt="..." />
              </div>
              <div class="help__txt col-12 col-lg-6">
              ${
                item.reduce((init, current) => {
                  return (init += `
                <li>${current}</li>
                `);
                }, "<ul>") + "</ul>"
              }  
              </div>
            </div>
    `);
    } else {
      return (contentHTML += `
   <div class="help__item row align-items-center">
     <div class="help__txt col-12 col-lg-6">
        ${
          item.reduce((init, current) => {
            return (init += `
          <li>${current}</li>
          `);
          }, "<ul>") + "</ul>"
        }  
      </div>          
      <div class="help__img col-12 col-lg-6">
        <img src="https://i.pravatar.cc" alt="..." />
      </div>
    </div>
    `);
    }
  });
  document.querySelector("#help__holder").innerHTML = contentHTML;
};
//render highlight
const renderHighlight = (courseRender) => {
  let contentHTML = "";
  const { highlight } = courseRender;
  highlight.map((item) => {
    return (contentHTML += `
    <li>${item}</li>    
    `);
  });
  document.querySelector("#highlight__holder").innerHTML = contentHTML;
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
          ${
            typeof item?.ans === "string"
              ? item?.ans
              : item?.ans?.reduce((init, current) => {
                  return (init += `
              <li>${current}</li>
              `);
                }, "<ul>") + "</ul>"
          }
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
  cloneCourse.map((item) => {
    return (contentHTML += `
    <div class="others__item d-flex">
    <div class="others__left">
      <img src="./assets/img/g3.jpg" alt="..." />
    </div>
    <div class="others__right">
      <div class="others__txt d-flex flex-column justify-content-around h-100">
        <div class="others__inner-txt">
          <h3>${item?.name}</h3>
          <h5>Nói nhanh giọng Mỹ</h5>
        </div>  
        <div class="others__inner-desc">
          <p>
            ${
              item?.desc.length > 100
                ? item.desc.slice(0, 100) + "..."
                : item.desc
            }
          </p>
          <a href="${item.path}" class="btn-course-detail">Xem chi tiết</a>
        </div>
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
renderHighlight(courseRender);
renderQuestion(courseRender);
renderOthers(courseRender);
