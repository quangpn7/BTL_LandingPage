const teacherData = [
  {
    id: 1,
    vName: "Phan Hồng Ngọc",
    eName: "Ms. RUBY PHAN",
    certi: [
      "Chứng chỉ TESOL - Australian International Tesol",
      "Th.S Quản Trị Kinh Doanh - Columbia Southern University",
    ],
    feedBack: [
      "Cô Ruby mô tả cách tạo âm IPA và các kỹ thuật nói hay tiếng Anh như nối âm, ngữ điệu rất chi tiết, dễ hình dung, dễ làm theo.",
      "Cô luôn truyền năng lượng tích cực trong lớp học cũng như tổ chức nhiều hoạt động cho lớp tương tác.",
    ],
    motto:
      "Nói tiếng Anh không chỉ đơn thuần là nói mà còn là một màn “performance” (biểu diễn) kết hợp phát âm chuẩn IPA và nhiều kỹ thuật khác để tạo ra giai điệu trong từng âm tiết, câu từ. Không chỉ giúp học viên nói được mà còn nói hay giống bản ngữ.",
  },
  {
    id: 2,
    vName: "",
    eName: "Ms. HARLEY TRẦN",
    certi: [
      "Cử nhân Ngôn ngữ Anh - ĐH Nha Trang",
      "Th.S Phương pháp Giảng dạy Tiếng Anh - Benedictine University",
    ],
    feedBack: [
      "Cô Harley hiểu được các lỗi sai thường gặp của người học ngoại ngữ ở Việt Nam trong phát âm cũng như cách sử dụng tiếng Anh. Từ đó, cô hướng dẫn sửa rất chi tiết và nhiệt tình.",
      "Luôn sáng tạo trong việc nghĩ ra tình huống và nội dung giảng dạy để giúp học viên sử dụng ngôn ngữ mục tiêu một cách tối đa trong từng buổi học.",
    ],
    motto:
      "Việc học phát âm tiếng Anh cũng giống như việc xây dựng móng nhà của bạn. Móng nhà phải thật chắc thì mới có thể gia cố thêm bằng ngữ pháp và từ vựng. Phát âm quan trọng đối với người học ngoại ngữ vì đây là yếu tố đầu tiên để mọi người đánh giá khả năng ngoại ngữ của bạn.",
  },
  {
    id: 3,
    vName: "",
    eName: "Ms. LINDSIE ĐÀO",
    certi: ["Cử nhân Ngôn ngữ Anh - ĐH Văn Lang"],
    feedBack: [
      "Cô Lindsie luôn “customize” (cá nhân hoá) bài giảng theo nhu cầu học viên, nên khiến học viên cảm thấy luôn có người đồng hành khi học tiếng Anh. Cô luôn lắng nghe những khó khăn cũng như hướng dẫn bài rất tận tâm.",
      "Luôn quan tâm đến sự phát triển bản thân, kiến thức đến xã hội và lĩnh vực ngành nghề khác nhau để mang lại cho học viên những bài giảng sinh động, gần gũi và mang tính ứng dụng cao.",
    ],
    motto:
      "Language is not only about communication but also a voice of the soul, a beautiful voice reflects a magnificent spirit. (Tạm dịch: Ngôn ngữ không chỉ là phương tiện giao tiếp mà còn là tiếng nói của tâm hồn, một giọng nói hay thể hiện một tâm hồn đẹp).",
  },
  {
    id: 4,
    vName: "",
    eName: "Mr. RYAN TRẦN",
    certi: [
      "Cử nhân Tài chính - ĐH Ngân hàng Tp.HCM",
      "Chứng chỉ TEFL - Teaching English as a Foreign Language",
      "IELTS 7.5",
    ],
    feedBack: [
      "Thầy luôn mang lại không khí vui vẻ và thoải mái trong lớp học. Học với thầy đôi khi cảm thấy những căng thẳng sau một ngày làm việc tan biến vì thầy luôn biết cách chọc cười và giúp học viên “enjoy” (tận hưởng) từng giờ học phát âm.",
      "Siêu thích các video đưa feedback sửa phát âm của thầy, rất dễ thương, dễ hình dung và đặc biệt giọng thầy rất chuẩn American accent (giọng Anh Mỹ).",
    ],
    motto:
      "Phát âm và từ vựng luôn đặt hàng đầu vì sẽ là nòng cốt để có thể nói tiếng Anh trôi chảy. Chỉ cần cố gắng thì tiếng Anh sẽ không ngoảnh mặt với bạn.",
  },
  {
    id: 5,
    vName: "",
    eName: "Ms. JOSIE HUNG",
    certi: ["Cử nhân Ngôn ngữ Anh - ĐH Văn Lang"],
    feedBack: [
      "Cô Josie luôn tạo không khí lớp học vui tươi và tràn đầy năng lượng. Giọng cô rất truyền cảm và đặc biệt cô nói tiếng Anh rất giống bản ngữ, nhiều khi học viên không phân biệt được giọng thật của cô và giọng audio nước ngoài",
      "Luôn lắng nghe, thấu hiểu những khó khăn trong việc phát âm của học viên và hướng dẫn chi tiết, đơn giản hoá bài học để học viên nói chuẩn nhất có thể.",
    ],
    motto: "Phát âm chuẩn - chìa khoá của giao tiếp chuẩn bản ngữ!",
  },
  {
    id: 6,
    vName: "",
    eName: "Ms. EMMA HOÀNG",
    certi: ["Cử nhân Ngôn ngữ Anh - ĐH Văn Lang"],
    feedBack: [
      "Cô Emma luôn quan tâm, thấu hiểu những khó khăn của học viên trong quá trình học phát âm và giao tiếp tiếng Anh. Từ đó, cô hướng dẫn chi tiết và sửa các lỗi sai thường gặp trong lớp.",
      "Chuẩn bị nội dung và phương pháp giảng dạy phù hợp với từng trình độ của mỗi học viên. Học được rất nhiều cách dùng từ và câu giao tiếp hay từ cô mỗi khi chat trong group lớp.",
    ],
    motto:
      "Học phát âm luôn là xuất phát điểm quan trọng nhất khi bắt đầu học một ngôn ngữ mới đặc biệt là tiếng Anh. Nó không chỉ giúp bạn tự tin hơn khi giao tiếp mà còn giúp cuộc trò chuyện trở nên cuốn hút, thú vị hơn. Phát âm chuẩn sẽ giúp bạn dễ dàng ghi điểm trong mắt người đối diện.",
  },
];

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
