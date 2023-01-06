/* eslint-disable react/jsx-no-target-blank */
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CAccordion } from "@coreui/react";
import { CAccordionBody } from "@coreui/react";
import { CAccordionHeader } from "@coreui/react";
import { CAccordionItem } from "@coreui/react";
function App() {
  return (
    <div className="bg-black">
      <section className="banner bg-[url('../public/images/wow-banner.png')] bg-center bg-no-repeat bg-cover w-full h-[100vh]"></section>
      <section className="project">
        <div className="page-container py-section">
          <CAccordion activeItemKey={1}>
            <CAccordionItem itemKey={1}>
              <CAccordionHeader>
                Thiết kế Website / Landing Page
              </CAccordionHeader>
              <CAccordionBody>
                <div className="grid grid-cols-6 gap-[15px]">
                  <div className="project-item">
                    <div className="img">
                      <img src="/images/ccvietnam.png" alt="" />
                    </div>
                    <div>
                      <p className="title">CC Việt Nam</p>
                      <a target="_blank" href="https://ccvietnam.com/">
                        Xem Website
                      </a>
                    </div>
                  </div>
                  <div className="project-item">
                    <div className="img">
                      <img src="/images/vms.png" alt="" />
                    </div>
                    <div>
                      <p className="title">V.M.S</p>
                      <a target="_blank" href="https://linx.com.vn/">
                        Xem Website
                      </a>
                    </div>
                  </div>
                  <div className="project-item">
                    <div className="img">
                      <img src="/images/cht.png" alt="" />
                    </div>
                    <div>
                      <p className="title">ActionCOACH CHT Firm</p>
                      <a target="_blank" href="https://actioncoachcht.com/">
                        Xem Website
                      </a>
                    </div>
                  </div>
                  <div className="project-item">
                    <div className="img">
                      <img src="/images/pbc26.png" alt="" />
                    </div>
                    <div>
                      <p className="title">Planning Bootcamp</p>
                      <a
                        target="_blank"
                        href="https://pbc26.planningbootcampcbd.com/"
                      >
                        Xem Landing Page
                      </a>
                    </div>
                  </div>
                  <div className="project-item">
                    <div className="img">
                      <img src="/images/megawine.png" alt="" />
                    </div>
                    <div>
                      <p className="title">Mega Wine</p>
                      <a target="_blank" href="https://importer.megawine.vn/">
                        Xem Landing Page
                      </a>
                    </div>
                  </div>
                  <div className="project-item">
                    <div className="img">
                      <img src="/images/gst.png" alt="" />
                    </div>
                    <div>
                      <p className="title">Golden Star Travel</p>
                      <a
                        target="_blank"
                        href="https://spectrum.goldenstartravel.vn/"
                      >
                        Xem Landing Page
                      </a>
                    </div>
                  </div>
                </div>
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={2}>
              <CAccordionHeader>
                Sáng tạo nội dung trên các nền tảng mạng xã hội: Facebook -
                Youtube - Tiktok
              </CAccordionHeader>
              <CAccordionBody>
                <div className="grid grid-cols-2">
                  <div className="project-item">
                    <div>
                      <p className="title">Tiktok Ms.Anna</p>
                      <a
                        target="_blank"
                        href="https://www.tiktok.com/@annahangnguyencbd?lang=en"
                      >
                        Xem Kênh Tiktok
                      </a>
                    </div>
                  </div>
                  <div className="project-item">
                    <div>
                      <p className="title">
                        Xem Các Khách Hàng Khác Của Chúng Tôi
                      </p>
                      <a
                        target="_blank"
                        href="https://www.canva.com/design/DAFRjIxOAyc/I9Kc83Gsw2W-KaEnThPukw/view?utm_content=DAFRjIxOAyc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                      >
                        Đặc Biệt Quà Tặng Cho Thành Viên BNI
                      </a>
                    </div>
                  </div>
                </div>
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={3}>
              <CAccordionHeader>Sản xuất video</CAccordionHeader>
              <CAccordionBody>
                <div className="grid grid-cols-3">
                  <div className="flex gap-[10px]">
                    <div className="project-item">
                      <div>
                        <p className="title">Mega Wine</p>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/megawine.tuyendaily/videos/1509921242847899"
                        >
                          Xem Video
                        </a>
                      </div>
                    </div>
                    <div className="project-item">
                      <div>
                        <p className="title">Đại lý thuế Sài Nam</p>
                        <a
                          target="_blank"
                          href="https://drive.google.com/file/d/1H3brr7-kqAd7msfFc2XrEl7Sp1YJUOE2/view"
                        >
                          Xem Video
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="project-item">
                      <div>
                        <p className="title">
                          Hiệp Hội Thiết Kế TP. HCM - VDAS
                        </p>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/watch/?v=543035260999810"
                        >
                          Xem Video
                        </a>
                      </div>
                    </div>
                    <div className="project-item">
                      <div>
                        <p className="title">BNI Central 6</p>
                        <a
                          target="_blank"
                          href="https://www.youtube.com/watch?v=90EJ9TBsB14&feature=youtu.be"
                        >
                          Xem Video
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="project-item">
                      <div>
                        <p className="title">Đại Lý Vé Máy Bay Hồ Phi Long</p>
                        <a
                          target="_blank"
                          href="https://www.facebook.com/watch/live/?ref=watch_permalink&v=480120200943701"
                        >
                          Xem Video
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={4}>
              <CAccordionHeader>Tổ chức sự kiện</CAccordionHeader>
              <CAccordionBody>
                <div className="grid grid-cols-4">
                  <div className="project-item">
                    <div>
                      <p className="title">
                        Tổ chức sự kiện ra mắt, khai trương
                      </p>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=e8KGwSiLQ4o&feature=youtu.be"
                      >
                        Xem Video
                      </a>
                    </div>
                  </div>
                  <div className="project-item">
                    <div>
                      <p className="title">
                        Sự kiện đào tạo, hội thảo, hội nghị
                      </p>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=LUcCB-stchA&feature=youtu.be"
                      >
                        Xem Video
                      </a>
                    </div>
                  </div>
                  <div className="project-item">
                    <div>
                      <p className="title">
                        Sự kiện Year End Party, lễ kỷ niệm
                      </p>
                    </div>
                  </div>
                </div>
              </CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={5}>
              <CAccordionHeader>
                Bài trắc nghiệm DISC & Motivators - Công cụ đọc vị nhân sự &
                Quản trị doanh nghiệp hiệu quả
              </CAccordionHeader>
              <CAccordionBody>
                <p>
                  Đối với các lãnh đạo doanh nghiệp của thời đại mới, rõ ràng
                  câu chuyện tuyển dụng và thu hút nhân tài trở nên quan trọng
                  hơn bao giờ hết. Không khó để nhận ra những "nỗi đau" của chủ
                  doanh nghiệp trong quản trị nhân sự:
                </p>
                <p>⁉ Làm thế nào để quản lý hệ thống nhân sự?</p>
                <p>
                  ⁉ Làm thế nào để kích hoạt được các động lực tiềm ẩn của đội
                  ngũ nhân sự?
                </p>
                <p>
                  ⁉ Làm thế nào để tận dụng được nguồn lực của mỗi nhân sự giúp
                  doanh nghiệp bứt phá?
                </p>
                <p>
                  ⁉ Làm thế nào để tìm kiếm nhân sự phù hợp với vị trí còn thiếu
                  của công ty?
                </p>
                <p>
                  Bài test DISC & Motivators chính là lời giải phù hợp nhất khi
                  nó giúp nhà quản lý/người Chủ doanh nghiệp phân nhóm được nhân
                  sự của mình và điều phối họ cho những công việc phù hợp, vừa
                  khơi gợi niềm đam mê từ phía nhân sự vừa tối ưu hiệu suất cho
                  doanh nghiệp. giúp cải thiện các mối quan hệ trong nhóm, giúp
                  mọi người hiểu nhau và làm việc hiệu quả hơn.
                </p>
                <p>
                  Hiện nay, WOW là đối tác chiến lược của ASSESSMENT 24X7 đang
                  có mức giá hỗ trợ rất tốt đối với những Anh/Chị Chủ doanh
                  nghiệp muốn mua Bài test DISC cho đội ngũ.
                </p>
                <p>
                  **** ĐẶC BIỆT, khi mua link test DISC của chúng tôi, Anh/Chị
                  sẽ được TẶNG KHÓA ĐÀO TẠO DISC TRỊ GIÁ 500.000VNĐ do Chuyên
                  gia hàng đầu được cấp quyền huấn luyện DISC đào tạo. Khóa đào
                  tạo DISC sẽ giúp Anh/Chị hiểu rõ hơn về DISC cũng như cách đọc
                  bài Test của mình một cách hiệu quả nhất.
                </p>
                <p>
                  Anh/Chị có thể tìm hiểu thêm thông tin về Bài test DISC và
                  đăng ký mua bài test tại:{" "}
                  <a
                    href="https://a247.vn/bai-danh-gia/disc-danh-gia-phong-cach-hanh-vi/"
                    target="_blank"
                  >
                    https://a247.vn
                  </a>
                </p>
              </CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </div>
      </section>
    </div>
  );
}

export default App;
