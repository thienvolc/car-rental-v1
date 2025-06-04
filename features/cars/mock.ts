export interface Review {
  username: string;
  comment: string;
  rating: number; // từ 1-5 sao
  date: string;
}

export interface Car {
  id: number;
  name: string;
  images: string[];
  price: number;
  year: number;
  location?: string;
  description: string;
  bookings: number; // Số lượng người đã đặt
  reviews: Review[]; // Đánh giá của người dùng
}

export const mockCars: Car[] = [
  {
    id: 1,
    name: 'SUZUKI XL7',
    year: 2022,
    location: 'Hà Nội',
    images: [
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2022/p/g/2025/02/05/18/IiFokEq9DVlq7dUnNJbUpQ.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2022/p/g/2025/02/05/18/vau7CSrxZEVFHAw6r_bu4g.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2022/p/g/2025/02/05/18/GmfxqHJJaDpoFSg8KYmiEg.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/suzuki_xl7_2022/p/g/2025/02/05/18/X_OEww4PA9BWRcOuwElrhA.jpg',
    ],
    price: 730,
    description: 'Xe SUV rộng rãi và thoải mái với các tính năng hiện đại, phù hợp cho gia đình đi du lịch.',
    bookings: 45,
    reviews: [
      {
        username: 'NguyenVanA',
        comment: 'Xe rất sạch sẽ, chạy êm, tiết kiệm nhiên liệu. Chủ xe dễ thương và nhiệt tình hỗ trợ.',
        rating: 5,
        date: '15/05/2025',
      },
      {
        username: 'TranThiB',
        comment: 'Xe đẹp, nội thất thoải mái. Tuy nhiên máy lạnh hơi yếu khi trời nóng.',
        rating: 4,
        date: '20/05/2025',
      },
    ],
  },
  {
    id: 2,
    name: 'MITSUBISHI XPANDER CROSS',
    year: 2023,
    location: 'Hồ Chí Minh',
    images: [
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_cross_2023/p/g/2024/04/16/11/GONbUIT3q_QYII00KiZxeg.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_cross_2023/p/g/2024/04/16/11/bHUxHoZOQbJC0HKzjVNHgA.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_cross_2023/p/g/2024/04/16/11/2wpbUCtMt3nTnvBlyqwntw.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_cross_2023/p/g/2024/04/16/11/izdetEbq6RezwGSI8Zkt9A.jpg',
    ],
    price: 780,
    description:
      'Xe crossover đa dụng với tính năng an toàn cao cấp và không gian nội thất rộng rãi, thích hợp cho cả gia đình.',
    bookings: 62,
    reviews: [
      {
        username: 'LeVanC',
        comment: 'Xe rất rộng rãi, phù hợp cho chuyến đi dài. Tôi rất hài lòng với trải nghiệm lái xe này.',
        rating: 5,
        date: '10/04/2025',
      },
      {
        username: 'PhamThiD',
        comment: 'Xe tốt, tiết kiệm xăng, nhưng vô lăng hơi nặng khi đánh lái ở tốc độ thấp.',
        rating: 4,
        date: '22/04/2025',
      },
    ],
  },
  // ...giữ nguyên các xe còn lại và thêm thông tin tương tự
  {
    id: 3,
    name: 'MITSUBISHI XPANDER CROSS',
    year: 2024,
    location: 'Đà Nẵng',
    images: [
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_cross_2024/p/g/2025/02/01/13/Y8GO9ICYLNSYIYjyR2uJMg.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_cross_2024/p/g/2025/02/01/13/qiew0lfuM-1Ry351HhFL5g.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_cross_2024/p/g/2025/02/01/13/GIJN2Xlye0RFIISL-bPfMw.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/mitsubishi_xpander_cross_2024/p/g/2025/02/01/13/ahtJSVoB2flk-vO1UKViAA.jpg',
    ],
    price: 925,
    description:
      'Mẫu xe mới nhất với hiệu suất được nâng cấp và công nghệ tiên tiến, thích hợp cho những người yêu thích công nghệ.',
    bookings: 38,
    reviews: [
      {
        username: 'TranVanE',
        comment: 'Xe mới đẹp, nhiều tính năng hiện đại. Hệ thống giải trí rất tốt, kết nối dễ dàng với điện thoại.',
        rating: 5,
        date: '05/03/2025',
      },
      {
        username: 'NguyenThiF',
        comment: 'Xe chạy êm, nhưng hơi đắt so với các mẫu xe cùng phân khúc. Tính năng an toàn tốt.',
        rating: 4,
        date: '15/03/2025',
      },
    ],
  },
  {
    id: 4,
    name: 'SUBARU FORESTER 2.0i-S',
    year: 2019,
    location: 'Hồ Chí Minh',
    images: [
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/subaru_forester_2.0i-s_2019/p/g/2023/07/20/18/AEBf30iADTQPtFcKJQ_EVQ.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/subaru_forester_2.0i-s_2019/p/g/2023/07/20/18/XOhzI2Fo8WbmExFRkBwNjg.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/subaru_forester_2.0i-s_2019/p/g/2023/07/20/18/-q9cBw67adzy0p9SiK06Gw.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/subaru_forester_2.0i-s_2019/p/g/2023/07/20/18/fX9Hsams7UxwbXdskNHrnA.jpg',
    ],
    price: 1120,
    description:
      'SUV nhỏ gọn với hệ dẫn động 4 bánh và các tính năng an toàn cao cấp, phù hợp cho cả đi phố và địa hình.',
    bookings: 55,
    reviews: [
      {
        username: 'HoangVanG',
        comment: 'Xe mạnh mẽ, cảm giác lái tuyệt vời. Hệ thống an toàn Eyesight rất hiệu quả trên đường cao tốc.',
        rating: 5,
        date: '12/02/2025',
      },
      {
        username: 'TrinhThiH',
        comment: 'Xe tốt nhưng hơi tốn xăng. Không gian nội thất rộng rãi, phù hợp cho gia đình nhỏ.',
        rating: 4,
        date: '28/02/2025',
      },
    ],
  },
  {
    id: 5,
    images: [
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2018/p/g/2025/04/15/17/69HO2dAukkkUQVTrCLnrjA.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2018/p/g/2025/04/15/17/jj9EDRfP_UFgwP6iKAx-mg.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2018/p/g/2025/04/15/17/VkgYF6wlYVsqihp0rdEGug.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2018/p/g/2025/04/15/17/eAwDvAhBem8QgZ0W-_3Szg.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2018/p/g/2025/04/15/17/1Xr0dYHsZyU0TtGc_17Q6w.jpg',
    ],
    name: 'TOYOTA INNOVA',
    year: 2018,
    location: 'Hà Nội',
    price: 599,
    description: 'MPV đáng tin cậy và rộng rãi, hoàn hảo cho các chuyến đi gia đình với nhiều hành lý.',
    bookings: 78,
    reviews: [
      {
        username: 'NguyenVanI',
        comment: 'Xe rộng rãi, thoải mái cho 7 người. Chủ xe nhiệt tình, giao xe đúng hẹn.',
        rating: 5,
        date: '01/05/2025',
      },
      {
        username: 'LyThiK',
        comment: 'Xe có tuổi nhưng được bảo dưỡng tốt. Tuy nhiên, hệ thống giải trí hơi cũ.',
        rating: 4,
        date: '10/05/2025',
      },
    ],
  },
  {
    id: 6,
    name: 'TOYOTA INNOVA',
    year: 2021,
    location: 'Hồ Chí Minh',
    images: [
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2021/p/g/2024/10/03/04/eJa4QGEtEqmtuutVHAYVmg.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2021/p/g/2024/10/03/04/nPsoa5kkzt_Mfh2nlJGMMg.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2021/p/g/2024/10/03/02/SZSr8F8gKxCmjyqafz-ljQ.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2021/p/g/2024/10/06/11/G0zXKdAb60Lm_WE4XYtKEA.jpg',
    ],
    price: 771,
    description:
      'MPV hiện đại với các tính năng tiên tiến và nội thất rộng rãi, phù hợp cho các chuyến đi gia đình và công tác.',
    bookings: 53,
    reviews: [
      {
        username: 'TranDucL',
        comment:
          'Xe đẹp, chạy êm, nhiều tiện nghi. Cảm ơn chủ xe đã tạo điều kiện cho gia đình tôi có chuyến đi vui vẻ.',
        rating: 5,
        date: '17/04/2025',
      },
      {
        username: 'PhanThiM',
        comment: 'Xe tốt, rộng rãi. Tuy nhiên hệ thống điều hòa hàng ghế sau hơi yếu khi trời nóng.',
        rating: 4,
        date: '25/04/2025',
      },
    ],
  },
  {
    id: 7,
    name: 'TOYOTA INNOVA',
    year: 2018,
    location: 'Hồ Chí Minh',
    images: [
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2018/p/g/2024/10/25/17/qxwhORIgdTt-jztliRLWnA.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2018/p/g/2023/03/21/10/_YsZX7E90QQvLdntJJHUOQ.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2018/p/g/2023/03/21/10/bALqZJ5dIyS9xHkWN_Jm6Q.jpg',
      'https://n1-pstg-org.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_innova_2018/p/g/2024/10/25/17/qxwhORIgdTt-jztliRLWnA.jpg',
    ],
    price: 639,
    description:
      'MPV được bảo dưỡng tốt với khoang cabin rộng rãi, lý tưởng cho các chuyến đi gia đình và du lịch nhóm.',
    bookings: 65,
    reviews: [
      {
        username: 'VoVanN',
        comment: 'Xe gia đình rất tốt, đủ rộng cho 7 người và hành lý. Chủ xe thân thiện và hỗ trợ nhiệt tình.',
        rating: 5,
        date: '05/05/2025',
      },
      {
        username: 'DinhThiP',
        comment: 'Xe cũ nhưng chạy tốt, tiết kiệm nhiên liệu. Ghế hơi cứng khi đi đường dài.',
        rating: 3,
        date: '12/05/2025',
      },
    ],
  },
];
