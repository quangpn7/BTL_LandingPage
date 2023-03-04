//#region data - waiting for backEnd to build more ideal data
const course = [
  {
    courseId: 1,
    path: "courses.html?course=master-pronunciation",
    name: "MASTER PRONUNCIATION",
    desc: "Khoá học tập trung vào các kỹ thuật tạo âm tiếng Anh theo hệ thống ngữ âm quốc tế *IPA gồm 44 âm giúp người học phát âm giống bản ngữ, biết cách đặt răng - môi -lưỡi cho từng âm và tự tin ráp vần đọc từ mới độc lập. Đối tượng: mọi cấp độ với mong muốn cải thiện phát âm chuẩn bản ngữ.",
    problem: [
      "Phát âm không chuẩn bản ngữ, hay thiếu âm cuối",
      "Không biết khẩu hình miệng khi phát âm",
      "Thiếu tự tin khi nói do không nhận diện được phiên âm Quốc tế",
      "Gặp từ mới không biết phát âm, lệ thuộc vào các công cụ hỗ trợ",
      "Phát âm sai dẫn đến hiểu nhầm trong giao tiếp",
      "Không có lộ trình học và người hướng dẫn",
    ],
    offer: [
      "Phát âm chuẩn 44 âm quốc tế trong hệ thống IPA*",
      "Thành thạo khẩu hình miệng cho răng-môi-lưỡi",
      "Phân biệt âm hữu thanh, vô thanh, âm chặn, âm liên tục, v.v",
      "Tự đánh vần, ráp âm và đọc từ mới độc lập",
      "Phân biệt giọng Anh-Anh và Anh-Mỹ",
      "Khắc phục lỗi thiếu âm cuối, đọc Vietlish, thiếu hơi",
      "Hiểu quy tắc phát âm -ED và -S/É dựa vào âm hơi/ tiếng",
      "Cải thiện kỹ năng Nghe/ Phát âm/ Nói",
      "Nâng cao vốn từ vựng (700 từ)",
    ],
    highlight: [
      "Cam kết đầu ra phát âm chuẩn bản ngữ",
      "Được sửa ghi âm ngoài giờ đến khi tiến bộ",
      "Nhiều khung giờ học, khai giảng hàng tuần",
      "Lớp học nhỏ 1-5 học viên, nâng cao thời gian thực hành",
      "Hệ thống gòm nhiều công cụ học tập tương tác",
      "Trình độ giáo viên Thạc sĩ, Cử nhân, IELTS, TESOL",
    ],
    questions: [
      {
        ask: "Trình độ giáo viên tại Trung tâm như thế nào?",
        ans: "Nhằm mục đích cải thiện chất lượng việc học ngôn ngữ của cộng đồng người Việt, Beyond The Limits tuyển chọn giáo viên theo tiêu chí “Có tâm, đủ tầm” để khóa học mang đến giá trị tốt nhất cho học viên. Đội ngũ giáo viên của trung tâm sở hữu IELTS 7.5+, học vị Thạc sĩ, Cử nhân trong lĩnh vực giảng dạy Tiếng Anh từ 5 năm trở lên.",
      },
      {
        ask: "Khóa học kéo dài trong bao lâu, mỗi tuần bao nhiêu buổi?",
        ans: "Khóa học kéo dài liên tục trong 2 tháng, gồm 24 buổi (tương ứng mỗi tuần 3 buổi). Chương trình được thiết kế với số giờ khoa học để đạt đầu ra theo yêu cầu (30 giờ, 75p/buổi). Ngoài ra, học viên còn được trải nghiệm thực hành mọi lúc mọi nơi với các công cụ học tập trên hệ thống.",
      },
      {
        ask: "Khóa học này dành cho đối tượng nào?",
        ans: "Đây là khóa học phát âm nền tảng khi tiếp xúc Tiếng Anh, đặc biệt quan trọng cho kỹ năng “speaking”. Khoá học sẽ phù hợp với đa dạng độ tuổi (sinh viên, người đi làm) và trình độ (cơ bản, nâng cao), chỉ cần bạn là người yêu thích Tiếng Anh và xác định được tầm quan trọng của việc phát âm chuẩn trong giao tiếp!",
      },
      {
        ask: "Sau khi học phát âm chuẩn thì nên học thêm kĩ năng gì để “speaking” tối ưu nhất?",
        ans: "Bên cạnh việc phát âm đúng, thì ngữ điệu, nhấn câu và các kỹ thuật nói nhanh cũng là quan trọng không kém. Tất cả các kỹ thuật nâng cao này sẽ được giảng dạy trong Khoá American Accent - Luyện nói nhanh chuẩn Mỹ. Bạn nên tham gia các khoá học theo lộ trình để đạt được mục tiêu “Nói tiếng Anh chuẩn bản ngữ”. ",
      },
      {
        ask: "Có chương trình ưu đãi trợ giá cho học viên mới không?",
        ans: "Nhằm tạo điều kiện tốt nhất cho học viên, chúng tôi cập nhật liên tục CTKM hằng tháng tại Fanpage: https://www.facebook.com/beyond.the.limits05",
      },
    ],
  },
  {
    courseId: 2,
    path: "courses.html?course=american-accent",
    name: "AMERICAN ACCENT",
    desc: "Khoá học tập trung vào các kỹ thuật “speaking” nâng cao giúp người học nói tiếng Anh trôi chảy, tự nhiên, có giai điệu và chất giọng giống bản ngữ. Một số kỹ thuật tiêu biểu như: nối âm (linking sounds), ngữ điệu (intonation), nhấn câu (sentence stress), chuyển giọng cổ (voice placement). Đối tượng: đã thành thạo *IPA với mong muốn nói có kỹ thuật tự nhiên, trôi chảy.",
    problem: [
      "Nói chuyện ngang, không có độ lên/ xuống",
      "Nói từng từ rời rạc, ngắt quãng",
      "Không có ngữ điệu thể hiện cảm xúc ",
      "Không có giai điệu, nhấn nhá trong câu nói",
      "Chư biết cách nói nhanh, trôi chảy ",
      "Khó khăn khi nghe cả đoạn hội thoại dài đọc nhanh",
      "Sử dụng từ vựng phổ thông rập khuôn, thiếu sự gần gũi",
      "Chất giọng chưa có độ vang trầm giống bản ngữ",
      "Hiểu lầm khi giao tiếp do không biết các kỹ thuật được bản ngữ ứng dụng trong câu nói",
    ],
    offer: [
      "Thành thạo kỹ thuật nối âm, chặn âm",
      "Chuyển âm schwa, lượt âm tiết, dùng từ viết tắt để nói nhanh",
      "Nhấn câu tạo giai điệu nhanh-chậm, to-nhỏ",
      "Ngữ điệu lên/ xuống thể hiện cảm xúc theo từng dạng câu",
      "Nói theo phong cách thân mật, gần gũi",
      "Phản xạ nói theo cụm, không nói từng từ riêng lẻ, tạo tính mạch lạc",
      "Áp dụng kỹ thuật “shadowing” để thực hành Nghe/ Nói chuẩn bản ngữ",
      "Chuyển giọng cổ trầm vang, giống chất giọng phương Tây",
      "Nâng cao vốn từ vựng (700 từ)",
      "Nắm vững một số cấu trúc ngữ pháp và tự đặt câu đơn giản",
    ],
    highlight: [
      "Cam kết đầu ra nói nhanh lưu loát, có ngữ điệu",
      "Thực hành nhiều kỹ thuật luyện giọng nâng cao",
      "Được sửa ghi âm ngoài giờ đến khi tiến bộ",
      "Nhiều khung giờ học, khai giảng hàng tuần ",
      "Lớp học nhỏ 1-5 họ viên, nâng cao thời gian thực hành",
      "Hệ thống gồm nhiều công cụ học tập tương tác",
      "Trình độ giáo viên Thạc sĩ, Cử nhân, IELTS, TESOL",
    ],
    questions: [
      {
        ask: "Trình độ giáo viên tại Trung tâm như thế nào?",
        ans: "Nhằm mục đích cải thiện chất lượng việc học ngôn ngữ của cộng đồng người Việt, Beyond The Limits tuyển chọn giáo viên theo tiêu chí “Có tâm, đủ tầm” để khóa học mang đến giá trị tốt nhất cho học viên. Đội ngũ giáo viên của trung tâm sở hữu IELTS 7.5+, học vị Thạc sĩ, Cử nhân trong lĩnh vực giảng dạy Tiếng Anh từ 5 năm trở lên.",
      },
      {
        ask: "Khóa học kéo dài trong bao lâu, mỗi tuần bao nhiêu buổi?",
        ans: "Khóa học kéo dài liên tục trong 2 tháng, gồm 24 buổi (tương ứng mỗi tuần 3 buổi). Chương trình được thiết kế với số giờ khoa học để đạt đầu ra theo yêu cầu (30 giờ, 75p/buổi). Ngoài ra, học viên còn được trải nghiệm thực hành mọi lúc mọi nơi với các công cụ học tập trên hệ thống.",
      },
      {
        ask: "Khóa học này dành cho đối tượng nào?",
        ans: "Đây là khoá học chuyên về kỹ năng nói nhanh nâng cao, bổ trợ tốt cho quá trình giao tiếp lưu loát chuẩn bản ngữ. Điều kiện cần và đủ để học tốt khóa học này là học viên đã nắm chắc kỹ năng phát âm theo hệ thống *IPA.",
      },
      {
        ask: "Nếu chỉ học Khóa American Accent - Nói nhanh chuẩn Mỹ mà không tham gia Khóa Master Pronunciation - Phát âm chuẩn *IPA  thì được không?",
        ans: "Chúng tôi khuyến khích bạn nên học cả 2 khóa để nắm chắc nền tảng phát âm theo hệ thống âm quốc tế trước, sau đó luyện kỹ thuật nâng cao sẽ dễ dàng và hiệu quả hơn.",
      },
      {
        ask: "Có chương trình ưu đãi trợ giá cho học viên mới không?",
        ans: "Nhằm tạo điều kiện tốt nhất cho học viên, chúng tôi cập nhật liên tục CTKM hằng tháng tại Fanpage: https://www.facebook.com/beyond.the.limits05",
      },
    ],
  },
  {
    courseId: 3,
    name: "ENGLISH IN LIFE",
    path: "courses.html?course=english-in-life",
    desc: "Khoá học tập trung vào giao tiếp theo chủ đề đời sống và công sở giúp người học tự tin phản xạ nhanh khi gặp tình huống thực tế và nâng cao kỹ năng mềm. Một số chủ đề tiêu biểu như: giới thiệu bản thân/ gia đình/ công việc, mô tả thói quen/ sở thích/ kỳ nghỉ/ chuyến công tác, cách thuyết trình/ gọi điện cho khách hàng, v.v. Đối tượng: mọi đối tượng (A1-B2) với mong muốn giao tiếp trong đời sống/ công sở.",
    problem: [
      "Sở hữu nhiều từ vựng, ngữ pháp nhưng lúng túng khi đặt câu",
      "Không phản xạ kịp khi giao tiếp với người bản ngữ",
      "Chưa phân biệt được văn phong gần gũi đời sống và trang trọng văn phòng",
      "Thiếu từ vựng theo nhiều chủ đề đời sống hằng ngày để mở rộng cuộc đối thoại",
      "Cần nâng cấp từ vựng/ mẫu câu chủ đề công sở để giao tiếp với đồng nghiệp, đối tác, cấp trên",
      "Mong muốn trau dồi kỹ năng mềm có sử dụng tiếng Anh như thuyết trình, đàm phán, chủ trì cuộc họp, phỏng vấn, v.v",
      "Thiếu tự tin khi xin việc ở các công ty đa quốc gia vì rào cản tiếng Anh ",
      "Cần có môi trường giao tiếp và người hướng dẫn để duy trì, rèn luyện tiếng Anh mỗi ngày",
    ],
    offer: [
      "Tăng cường từ vựng, cấu trúc câu, thành ngữ để giao tiếp hiệu quả",
      "Phản xạ nhanh trong các tình huống giao tiếp đời sống và công sở",
      "Rèn luyện tư duy suy nghĩ bằng tiếng Anh và phát triển ý tưởng để nói mạch lạc ",
      "Tự tin trình bày các chủ đề cá nhân như sở thích, gia đình, công việc lý tưởng, ...",
      "Phát triển kỹ năng tiếng Anh và kỹ năng mềm như thuyết trình, gọi điện thoại khách hàng, chủ trì cuộc họp, v.v",
      "Văn phong giao tiếp hiện đại giúp dễ dàng hòa nhập môi trường quốc tế",
      "Thực hành giao tiếp theo tình huống, nhận feedback cải thiện thêm từ giáo viên",
      "Được chỉnh sửa phát âm, nói với đa dạng ngữ điệu và nhấn câu",
      "Tiếp cận môi trường nói tiếng Anh có giáo viên Việt Nam và bản ngữ hướng dẫn ",
      "Nâng cao vốn từ vựng (1000 từ)",
    ],
    highlight: [
      "Giáo viên Việt Nam và bản ngữ xuyên suốt",
      "Cam kết đầu ra giao tiếp phản xạ nhanh",
      "Thực hành nhiều tình huống đời sống gần gũi và công sở trang trọng",
      "Nâng cao kỹ năng tiếng Anh và kỹ năng mềm",
      "Nhiều khung giờ học, khai giảng hàng tuần ",
      "Lớp học nhỏ 1-5 họ viên, nâng cao thời gian thực hành",
      "Hệ thống gồm nhiều công cụ học tập tương tác",
      "Trình độ giáo viên Thạc sĩ, Cử nhân, IELTS, TESOL",
    ],
    questions: [
      {
        ask: "Trình độ giáo viên tại Trung tâm như thế nào?",
        ans: "Nhằm mục đích cải thiện chất lượng việc học ngôn ngữ của cộng đồng người Việt, Beyond The Limits tuyển chọn giáo viên theo tiêu chí “Có tâm, đủ tầm” để khóa học mang đến giá trị tốt nhất cho học viên. Đội ngũ giáo viên của trung tâm sở hữu IELTS 7.5+, học vị Thạc sĩ, Cử nhân trong lĩnh vực giảng dạy Tiếng Anh từ 5 năm trở lên.",
      },
      {
        ask: "Khóa học kéo dài trong bao lâu, mỗi tuần bao nhiêu buổi?",
        ans: "Khóa học kéo dài liên tục trong 2 tháng, gồm 24 buổi (tương ứng mỗi tuần 3 buổi). Chương trình được thiết kế với số giờ khoa học để đạt đầu ra theo yêu cầu (30 giờ, 75p/buổi). Ngoài ra, học viên còn được trải nghiệm thực hành mọi lúc mọi nơi với các công cụ học tập trên hệ thống.",
      },
      {
        ask: "Khóa học này dành cho đối tượng nào",
        ans: "Khóa học dàn trải mọi cấp độ A1-A2-B1-B2 (từ cơ bản đến trung cấp) dành cho sinh viên và người đi làm! Tuy nhiên, bạn sẽ được test đầu vào (miễn phí), giáo viên chuyên môn sẽ đánh giá sơ bộ về kĩ năng hiện tại để đưa ra lộ trình cần cải thiện.",
      },
      {
        ask: "Hình thức học khóa English In Life như thế nào?",
        ans: [
          "Hằng tuần, học 2 buổi kiến thức nền với giáo viên Việt Nam và 1 buổi thực hành chuyên sâu với giáo viên Bản ngữ",
          "Lớp học tổ chức các hoạt động đối thoại theo tình huống giúp học viên tập trung 100%, thực hành liên tục, nhớ sâu",
          "Học giao tiếp theo nhiều chủ đề, tăng vốn từ vựng/ ngữ pháp và luôn được giáo viên chỉnh sửa phát âm/ ngữ điệu",
        ],
      },
      {
        ask: "Có chương trình ưu đãi trợ giá cho học viên mới không?",
        ans: "Nhằm tạo điều kiện tốt nhất cho học viên, chúng tôi cập nhật liên tục CTKM hằng tháng tại Fanpage: https://www.facebook.com/beyond.the.limits05",
      },
    ],
  },
];
//#endregion
// indentify viewing course
const urlParam = new URLSearchParams(window.location.search);
// alert("Test run");
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
  const currentIndex = course.findIndex(
    (item) => item.courseId === courseRender.courseId
  );
  const cloneCourse = [...course];
  cloneCourse.splice(currentIndex, 1);
  //DOM
  let contentHTML = "";
  cloneCourse.map((item) => {
    return (contentHTML += `
    <div class="others__item d-flex col-12 col-lg-6">
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
