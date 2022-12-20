//main-js
import data from "../data/data.json" assert { type: "json" };

let teacherData = data.teacher;

let renderTeacher = (data) => {
  let contentHTML = "";
  data.map((teacher) => {
    const { eName, certi, feedBack, motto } = teacher;
    return (contentHTML += `
        <div class="teacher__item row">
            <div class="teacher__img col-lg-5 col-12 text-center">
              <img src="./assets/img/g3.jpg" alt="" />
            </div>
            <div class="teacher__personal col-lg-7 col-12">
              <div class="teacher__name">
                <p>${eName}</p>
                ${certi
                  .map((item) => {
                    return `<h6>${item}</h6>`;
                  })
                  .join("")}
              </div>
              <div class="teacher__exp">
                <p>Châm ngôn giáo dục:</p>
                <ul class="list-unstyled">
                  <li>
                    - ${motto}
                  </li>
                  
                </ul>
                <p>Feedback của học viên:</p>
                <ul class="list-unstyled">
                ${feedBack
                  .map((item) => {
                    return `<li>- ${item}</li>`;
                  })
                  .join("")}  
               
                </ul>
              </div>
            </div>
          </div>
        `);
  });
  document.querySelector("#teacherHolder").innerHTML = contentHTML;
};

renderTeacher(teacherData);
