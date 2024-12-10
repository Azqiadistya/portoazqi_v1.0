import { useContext } from "react";
import { context } from "../context";
import SectionContainer from "./SectionContainer";

const blogsData = [
  {
    id: 1,
    title: "Memanfaatkan Web Assembly dalam Frontend Web",
    date: "April 12, 2023",
    img: "assets/img/news/1.png",
    article:
      "Dalam era pengembangan web yang semakin kompleks, Web Assembly (Wasm) menjadi solusi menarik untuk meningkatkan kinerja dan kemampuan aplikasi frontend. Dengan WebAssembly, pengembang dapat mengompilasi kode yang ditulis dalam bahasa pemrograman seperti C, C++, atau Rust menjadi format biner yang dapat dieksekusi oleh browser. Hal ini membuka pintu bagi integrasi dengan kode legacy, kinerja yang lebih baik, dan pilihan baru untuk membangun aplikasi web. Dalam konteks pengembangan frontend, WebAssembly memungkinkan penggunaan library dan framework yang lebih canggih tanpa mengorbankan kinerja, sehingga menghadirkan pengalaman pengguna yang lebih responsif dan aplikasi web yang lebih kuat. Implementasi WebAssembly dalam proyek frontend web juga dapat meningkatkan kolaborasi antara pengembang dengan latar belakang yang beragam. Dengan kemampuan untuk menulis komponen tertentu dalam bahasa yang lebih familier bagi mereka, tim pengembang dapat bekerja secara lebih efisien dan produktif. Selain itu, penggunaan WebAssembly dapat memperluas ekosistem alat dan library yang tersedia untuk pengembangan frontend, membuka pintu bagi inovasi dan eksperimen yang lebih luas dalam pembuatan aplikasi web. Namun, seperti halnya dengan setiap teknologi baru, penggunaan WebAssembly juga memunculkan pertimbangan keamanan dan kinerja. Karena memungkinkan eksekusi kode yang lebih kompleks di sisi klien, perlu dilakukan pengujian yang menyeluruh untuk memastikan bahwa kode yang dieksekusi melalui WebAssembly tidak membuka celah keamanan. Selain itu, pengembang perlu memahami dengan baik kapan dan bagaimana menggunakan WebAssembly dalam proyek mereka, mengingat potensi overhead yang terkait dengan ukuran dan kompleksitas modul yang dihasilkan. Dengan pemahaman yang matang dan penerapan yang bijak, WebAssembly dapat menjadi alat yang sangat kuat untuk meningkatkan pengalaman pengguna dan kinerja aplikasi frontend.",
  },
  {
    id: 2,
    title: "Desain UI/UX Terbaru untuk Frontend",
    date: "April 01, 2023",
    img: "assets/img/news/2.jpg",
    article: "Desain antarmuka pengguna (UI) dan pengalaman pengguna (UX) memiliki peran yang semakin penting dalam pembangunan aplikasi web modern. Dalam panduan ini, kami akan menjelajahi prinsip-prinsip desain UI/UX terbaru dan memberikan wawasan tentang cara menerapkannya dalam pengembangan frontend web. Salah satu prinsip utama yang perlu dipertimbangkan adalah kesederhanaan. Desain yang sederhana dan intuitif akan meningkatkan kegunaan aplikasi, mengurangi kebingungan pengguna, dan membantu mereka mencapai tujuan mereka dengan cepat dan efisien. Selain kesederhanaan, prinsip desain lainnya yang perlu diperhatikan adalah konsistensi. Konsistensi dalam desain antarmuka membantu menciptakan pengalaman yang mulus bagi pengguna, di mana elemen-elemen seperti navigasi, warna, dan tata letak memiliki pola yang dapat diprediksi. Selain itu, prinsip-prinsip desain responsif juga sangat penting dalam konteks pengembangan frontend web saat ini. Dengan memastikan bahwa antarmuka pengguna beradaptasi dengan baik dengan berbagai ukuran layar dan perangkat, pengembang dapat memberikan pengalaman pengguna yang konsisten dan memuaskan, tanpa mengorbankan fungsionalitas atau estetika. Dalam mengimplementasikan prinsip-prinsip desain UI/UX terbaru dalam pengembangan frontend web, pengembang juga perlu memperhatikan aksesibilitas. Memastikan bahwa aplikasi dapat diakses dan digunakan dengan mudah oleh semua orang, termasuk mereka yang memiliki kebutuhan khusus, merupakan aspek penting dari pengembangan yang inklusif. Dengan menerapkan prinsip-prinsip desain UI/UX terbaru ini, pengembang dapat menciptakan aplikasi web yang tidak hanya fungsional dan efisien, tetapi juga menarik dan memuaskan bagi pengguna.",
  },
  {
    id: 3,
    title: "Strategi Framework Frontend: React vs Vue vs Angular",
    date: "March 30, 2023",
    img: "assets/img/news/3.png",
    article: "Dalam dunia pengembangan frontend web, pemilihan framework menjadi keputusan kunci yang memengaruhi keseluruhan arsitektur dan pengalaman pengguna aplikasi. Dalam artikel ini, kami akan mengeksplorasi tiga framework frontend terkemuka saat ini: React, Vue, dan Angular. Kami akan menyajikan studi kasus untuk masing-masing framework, menganalisis kelebihan, kelemahan, serta kasus penggunaan yang paling sesuai. Studi kasus ini akan membantu pengembang memahami mana framework yang paling cocok untuk proyek mereka, berdasarkan kebutuhan spesifik dan prioritas pengembangan. Pertama-tama, kita akan mempelajari React, framework JavaScript yang sangat populer dikembangkan oleh Facebook. React dikenal dengan pendekatannya yang komponen, dimana antarmuka pengguna dibangun dari serangkaian komponen yang dapat digabungkan secara modular. Kemudian, kita akan melihat Vue.js, framework yang memiliki fokus pada kesederhanaan dan keluwesan. Vue.js menawarkan sintaksis yang intuitif dan mudah dipahami, membuatnya menjadi pilihan yang menarik bagi pengembang pemula maupun berpengalaman. Terakhir, kita akan menjelajahi Angular, framework yang dikembangkan oleh Google dan menawarkan rangkaian alat yang lengkap untuk membangun aplikasi web skala besar. Dengan memahami kelebihan dan kelemahan masing-masing framework ini, pengembang dapat membuat keputusan yang lebih terinformasi dalam memilih framework yang sesuai dengan kebutuhan proyek mereka.",
  },
  {
    id: 4,
    title: "Desain Responsif: Kiat Terkini",
    date: "Feb 20, 2023",
    img: "assets/img/news/4.jpg",
    article: "Desain responsif menjadi semakin penting dalam pengembangan frontend web, mengingat beragamnya perangkat dan ukuran layar yang digunakan oleh pengguna. Dalam artikel ini, kami akan membahas kiat terbaru dalam desain responsif yang dapat membantu pengembang membangun antarmuka pengguna yang menyesuaikan dengan baik dengan berbagai ukuran layar. Salah satu kiat penting adalah menggunakan unit CSS yang fleksibel, seperti persentase atau viewport units, untuk menentukan ukuran elemen dalam desain responsif. Hal ini memungkinkan elemen-elemen antarmuka pengguna untuk beradaptasi secara dinamis dengan ukuran layar, memberikan pengalaman pengguna yang konsisten di berbagai perangkat. Selain itu, penggunaan media queries juga menjadi kunci dalam desain responsif. Dengan menggunakan media queries, pengembang dapat menentukan aturan tata letak, tampilan, dan perilaku elemen antarmuka pengguna berdasarkan ukuran layar dan perangkat pengguna. Strategi lain yang dapat membantu dalam desain responsif adalah penggunaan framework CSS yang responsif, seperti Bootstrap atau Foundation. Framework ini menyediakan kumpulan komponen dan gaya yang dapat dengan mudah disesuaikan dengan berbagai ukuran layar, mempercepat proses pengembangan dan memastikan konsistensi dalam desain antarmuka pengguna.",
  },
  {
    id: 5,
    title: "Web Components: Modular dan Reusable",
    date: "March 15, 2023",
    img: "assets/img/news/5.jpg",
    article: "Teknologi Web Components menjadi semakin populer dalam pengembangan frontend web karena kemampuannya untuk membangun komponen yang dapat digunakan kembali secara efisien di berbagai proyek. Dalam artikel ini, kami akan melakukan eksplorasi mendalam tentang teknologi Web Components, menjelaskan konsep dasarnya dan bagaimana pengembang dapat memanfaatkannya dalam pembangunan aplikasi web. Web Components terdiri dari tiga spesifikasi utama: Custom Elements, Shadow DOM, dan HTML Templates. Custom Elements memungkinkan pengembang untuk membuat elemen HTML baru dengan perilaku yang ditentukan secara kustom, sementara Shadow DOM menyediakan lingkungan terisolasi untuk styling dan perilaku elemen. HTML Templates digunakan untuk mendefinisikan bagian-bagian dari markup HTML yang dapat digunakan kembali dalam komponen. Dengan memanfaatkan teknologi Web Components, pengembang dapat membangun komponen antarmuka pengguna yang modular dan dapat digunakan kembali di berbagai proyek. Hal ini tidak hanya meningkatkan efisiensi pengembangan, tetapi juga memungkinkan untuk memelihara konsistensi dan kohesi antarmuka pengguna di seluruh aplikasi. Selain itu, dengan dukungan yang semakin luas dari browser modern dan kerangka kerja frontend, seperti React dan Vue.js, implementasi teknologi Web Components menjadi semakin mudah dan dapat diadopsi dengan lebih luas dalam proyek pengembangan frontend web.",
  },
  {
    id: 6,
    title: "CSS-in-JS dalam Pengembangan Frontend",
    date: "Feb 11, 2023",
    img: "assets/img/news/6.jpg",
    article: "Pengembangan frontend modern semakin mengadopsi pendekatan CSS-in-JS untuk mengelola gaya dan tata letak dalam aplikasi web. Dalam artikel ini, kami akan membahas peran CSS-in-JS dalam pengembangan frontend, menjelaskan konsep dasarnya dan manfaat yang ditawarkannya. CSS-in-JS adalah pendekatan dalam pengembangan frontend di mana gaya aplikasi web ditentukan dan dikelola menggunakan JavaScript, bukan CSS tradisional. Dengan CSS-in-JS, pengembang dapat mengikat gaya langsung ke komponen antarmuka pengguna, menghasilkan aplikasi yang lebih modular, responsif, dan mudah dipelihara. Salah satu keuntungan utama dari pendekatan CSS-in-JS adalah kemampuannya untuk mengurangi over-fetching dan dead code, yang dapat meningkatkan kinerja aplikasi web. Dengan hanya memuat gaya yang diperlukan untuk komponen yang digunakan dalam tampilan, pengembang dapat mengoptimalkan performa aplikasi dan mengurangi beban jaringan. Selain itu, CSS-in-JS juga memungkinkan pengembang untuk menangani kebutuhan styling yang kompleks, seperti tema dinamis dan styling berbasis kondisi, dengan lebih mudah dan efisien. Dengan pemahaman yang baik tentang konsep dan praktik terbaik CSS-in-JS, pengembang dapat meningkatkan kualitas, kinerja, dan pemeliharaan kode dalam pengembangan frontend web mereka.",
  },
  {
    id: 7,
    title: "WebGL dalam Pembangunan Frontend",
    date: "Jan 31, 2023",
    img: "assets/img/news/7.jpg",
    article: "WebGL adalah teknologi yang memungkinkan rendering grafis 3D dan 2D di browser web tanpa memerlukan plugin tambahan. Dalam artikel ini, kami akan menjelajahi integrasi WebGL dalam pembangunan frontend web, menyoroti manfaat dan tantangan yang terkait dengan penggunaan teknologi ini. Dengan WebGL, pengembang dapat menciptakan pengalaman visual yang lebih memukau, seperti grafik 3D interaktif, animasi yang halus, dan visualisasi data yang kompleks, langsung di dalam browser. Hal ini membuka pintu bagi aplikasi web yang lebih menarik dan menantang, terutama dalam industri game, simulasi, dan visualisasi data. Namun, integrasi WebGL dalam pembangunan frontend juga menghadirkan beberapa tantangan, terutama terkait dengan kompleksitas pengembangan dan kinerja. Pengembang perlu memiliki pemahaman yang kuat tentang grafika komputer dan bahasa pemrograman seperti JavaScript dan OpenGL ES untuk menggunakan WebGL secara efektif. Selain itu, pengoptimalan kinerja menjadi kunci dalam mengimplementasikan aplikasi web dengan WebGL, mengingat rendering grafis yang intensif dapat mempengaruhi performa aplikasi secara keseluruhan. Dengan pemahaman yang matang tentang potensi dan tantangan WebGL, pengembang dapat memanfaatkan teknologi ini untuk menciptakan aplikasi web yang lebih dinamis dan menarik bagi pengguna."
  },
];

const News = () => {
  const { modalToggle, setBlogModal, navChange } = useContext(context);
  return (
    <SectionContainer name="blogs">
      <div className="elisc_tm_news fn_w_sminiboxes w-full float-left py-[120px] px-0">
        <div className="tm_content w-full max-w-[1250px] h-auto clear-both my-0 mx-auto py-0 px-[20px]">
          <div className="wrapper w-full flex justify-between">
            <div className="left fn_w_sminibox w-1/3 pr-[50px]">
              <div className="elisc_tm_sticky_section">
                <div className="elisc_tm_title w-full float-left">
                  <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                    - Blog
                  </span>
                  <h3 className="text-[40px] font-extrabold">
                    My blog &amp; news
                  </h3>
                </div>
                <div className="elisc_tm_button transition_link mt-[45px]">
                  <a href="#contact" onClick={() => navChange("contact")}>
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
            <div className="right fn_w_sminibox w-[66.6666%] pl-[50px]">
              <div className="elisc_tm_sticky_section">
                <div className="list w-full float-left relative">
                  <ul>
                    {blogsData.map((blog) => (
                      <li
                        className="mb-[40px] w-full float-left"
                        data-img={blog.img}
                        key={blog.id}
                      >
                        <img
                          className="popup_image"
                          src={blog.img}
                          alt="Blog Image"
                        />
                        <div className="list_inner w-full float-left relative flex items-center justify-between">
                          <div className="info w-1/2">
                            <div className="meta w-full float-left flex items-center mb-[12px]">
                              <img
                                className="svg w-[18px] h-[18px]"
                                src="assets/img/svg/calendar.svg"
                                alt="image"
                              />{" "}
                              <span className="font-medium pl-[8px]">
                                {blog.date}
                              </span>
                            </div>
                            <div className="title w-full float-left">
                              <h3 className="text-[#130F49] text-[28px] font-semibold leading-[36px]">
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    modalToggle(true);
                                    setBlogModal(blog);
                                  }}
                                >
                                  {blog.title}
                                </a>
                              </h3>
                            </div>
                          </div>
                          <div className="elisc_tm_read_more w-auto">
                            <a
                              className="line_effect"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                modalToggle(true);
                                setBlogModal(blog);
                              }}
                            >
                              Learn More
                              <span className="inline-block">
                                <img
                                  className="svg"
                                  src="assets/img/svg/rightArrow.svg"
                                  alt="image"
                                />
                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default News;
