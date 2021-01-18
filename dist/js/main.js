$(function() {
    let services = [{
            id: 1,
            name: "Giặt thảm , ghế salon",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://vesinhsachhcm.com/wp-content/uploads/2020/05/giattham-e1595839288448.jpg"
        },
        {
            id: 2,
            name: "Vệ sinh công ty, nhà ở",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://vesinhsachhcm.com/wp-content/uploads/2020/05/donnha1-e1595839368724.jpg"
        },
        {
            id: 3,
            name: "Vệ sinh sau xây dựng",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://vesinhsachhcm.com/wp-content/uploads/2020/05/donnha-e1595839420838.jpg"
        },
        {
            id: 4,
            name: "Vệ sinh nhà xưởng",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://vesinhsachhcm.com/wp-content/uploads/2020/05/factoryclean2.jpg"
        },
        {
            id: 5,
            name: "Vệ sinh công nghiệp",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://vesinhsachhcm.com/wp-content/uploads/2020/05/vesingcongnghiep2-e1595839577612.jpg"
        },
        {
            id: 6,
            name: "Phun khử khuẩn",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_923/https://vesinhsachhcm.com/wp-content/uploads/2020/12/pkk01.jpg"
        },
    ];

    let clients = [{
            id: 1,
            name: "Mr. Nguyễn Tô Việt",
            info: "CEO Công Ty TNHH Xây Dựng Nhà Việt Đương Đại",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_120,h_120/https://vesinhsachhcm.com/wp-content/uploads/2020/06/9-120x120.png",
            evaluate: "Từ ngày hợp tác với Sài Gòn Sạch về dịch vụ vệ sinh văn phòng cho công ty, không những đội ngũ đem lại cho công ty 1 không gian sạch, ngăn nắp gọn gàng mà tôi còn tiết kiệm được 1 khoản chi phí khá nhiều cho công ty tôi. Cám ơn các bạn, một đội ngũ quá tuyệt vời, chuyên nghiệp làm việc từ cái TÂM. Hẹn gặp lại các bạn!"
        },

        {
            id: 2,
            name: "Nguyễn Thị Thu Sương",
            info: "Nhà quận 2",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_120,h_120/https://vesinhsachhcm.com/wp-content/uploads/2020/06/15-120x120.png",
            evaluate: "Mình vừa sử dụng dịch vụ vệ sinh của công, chiều đi làm về vừa bước vào nhà thấy sạch bóng, không gian thoang thoảng mùi thơm tự nhiên của những cành hoa hồng mà nhân viên đã cắm. Dịch vụ quá tuyệt vời hơn sự mong đợi của mình. Cám ơn đội ngũ nhân viên công ty mình nhé!"
        },

        {
            id: 3,
            name: "Văn Uyển Nhi",
            info: "Nhà quận 12",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_120,h_120/https://vesinhsachhcm.com/wp-content/uploads/2020/06/3-120x120.png",
            evaluate: "Hôm nay chị rất cảm ơn các em, ngôi nhà chị xây dựng 1 năm đến chiều hôm nay chị mới trở nên yêu quý nó. Nhờ các em đã mang đến sự sạch sẽ, sáng bóng và thơm phức. Các em làm việc nhiệt tình, chuyên nghiệp và rất dễ thương. Mọi yêu cầu của chị các e đều hỗ trợ nhiệt tình. Hẹn gặp lại các em!"
        },

        {
            id: 4,
            name: "Ms. Nguyễn Thị Tuyết",
            info: "Nhà quận 3",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_120,h_120/https://vesinhsachhcm.com/wp-content/uploads/2020/06/7-120x120.png",
            evaluate: "Nhân viên thân thiện, làm vệ sinh ngăn nắp, không cần nhắc nhở gì nhưng các bạn tự biết sắp xếp làm rất hợp lý. Sẽ sử dụng dịch vụ lâu dài!"
        },

        {
            id: 5,
            name: "Mr. Trần Viết Thanh",
            info: "Nhà Tân Bình",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_120,h_120/https://vesinhsachhcm.com/wp-content/uploads/2020/06/Untitled-design-4-120x120.png",
            evaluate: "Chất lượng làm nên uy tín, chưa bao giờ thấy có dịch vụ nào chuyên nghiệp và làm từ cái tâm nhiệt tình như các bạn.Thực sự rất hài lòng! Sẽ ủng hộ công ty dài dài."
        },

        {
            id: 6,
            name: "Ms Nguyễn Thị Diệu Thúy",
            info: "Nhà Hiệp Thành City, Q.12",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_120/https://vesinhsachhcm.com/wp-content/uploads/2020/06/0-120x120.jpg",
            evaluate: "Gia đình mình rất hài lòng với dịch vụ vệ sinh căn hộ, từ trong ra ngoài đều được nhân viên dọn dẹp kỹ lưỡng, sạch bong, có những chỗ vết bẩn lâu ngày vẫn được các bạn xử lý tươm tất sáng bóng. Cám ơn đội ngũ và sẽ ủng hộ công ty. Chúc công ty ngày càng phát triển!"
        },

        {
            id: 7,
            name: "Ms. Nguyễn Thị Hoài",
            info: "Giám Đốc Công Ty TNHH ĐT SX TM DV Đại Phát",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_120,h_120/https://vesinhsachhcm.com/wp-content/uploads/2020/06/2-2-120x120.png",
            evaluate: "Tôi cảm thấy rất hài lòng về dịch vụ vệ sinh văn phòng bên công ty Sài Gòn Sạch từ tác phong nhân viên thái độ rất thân thiện, chuyên nghiệp cho đến chất lượng vệ sinh rất tốt mà giá cả chi phí lại phải chăng. Sự lựa chọn đúng đắn cho công ty chúng tôi từ xưa giờ. Cám ơn Sài Gòn Sạch, chúc công ty ngày càng phát triển!"
        },

        {
            id: 8,
            name: "Ms. Trần Phương Dung",
            info: "Giám Đốc Kinh Doanh Công Ty Nội Thất Lavender",
            img: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_120,h_120/https://vesinhsachhcm.com/wp-content/uploads/2020/06/6-120x120.png",
            evaluate: "Mình là 1 người khá khó tính trong việc lau dọn vệ sinh nhà cửa, tuy nhiên khi được hợp tác với công ty về dịch vụ tổng vệ sinh cho căn hộ của mình thì mình cảm thấy cực kỳ hài lòng về chất lượng, nhà cửa từ trong ra ngoài, nội thất sạch bong kin kít như lúc ban đầu mới vào ở. Chắc chắn mình sẽ giúp cho nhiều bạn bè mình biết đến cơ hội hợp tác với công ty. Hẹn gặp lại các bạn kỳ tới nhé!"
        },
    ]

    services.map((val) => {
        $(`
        <div class="col-lg-4 col-sm-6 col-xs-12 service-item">
            <a href="">
                <img src=${val.img} alt="">
                <p>${val.name}</p>
            </a>
        </div>
        `).appendTo(".service-content.row");
    })

    clients.map((val) => {
        $(`
        <div class="item">
            <div class="img-client">
                <img src=${val.img} alt="">
            </div>
            <div class="name-client">
                <h3>${val.name}</h3>
            </div>
            <div class="client-testimonial">
                <p>
                    <em>
                        <strong class="client-info">${val.info}</strong>
                    </em>
                </p>
                <p class="info-evaluate">${val.evaluate}</p>
            </div>
        </div>
        `).appendTo(".client-evaluate.owl-carousel.owl-theme");
    })

    // kiểm tra độ rộng page
    $(window).scroll(function() {
        let withPage = $(window).width();;
        if (withPage > 992) {
            $('.client-evaluate.owl-carousel.owl-theme').owlCarousel({
                items: 3,
                loop: true,
                margin: 10,
            })
        } else if (withPage > 576 && withPage < 992) {
            $('.client-evaluate.owl-carousel.owl-theme').owlCarousel({
                items: 2,
                loop: true,
                margin: 10,
            })
        } else if (withPage < 576) {
            $('.client-evaluate.owl-carousel.owl-theme').owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
            })
        }
    });

});