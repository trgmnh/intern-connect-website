import { Globe, PeopleFill, HeadSet } from "../components/ui/Icons";
import globalpartnershipImg from '../assets/card/globalpartnership.jpg';
import candidateselectionImg from '../assets/card/candidateselection.jpeg';
import supportImg from '../assets/card/candidatesupport.jpeg';

export const activities = {
    en: [
        {
            id: "globalpartnership",
            title: "Global Partnerships",
            description:
                "Internship placements at 4–5 star hotels across Australia, Malaysia, the UAE, Thailand, and Vietnam.",
            icon: Globe,
            imageSrc: globalpartnershipImg
        },
        {
            id: "candidateselection",
            title: "Professional Candidate Selection",
            description:
                "Conducting assessments of language proficiency and service skills, along with interview training.",
            icon: PeopleFill,
            imageSrc: candidateselectionImg
        },
        {
            id: "support",
            title: "Comprehensive Candidate Support",
            description:
                "Providing assistance with visa applications, airport pickup, accommodation, training, and ongoing monitoring.",
            icon: HeadSet
            , imageSrc: supportImg
        }
    ],

    vi: [
        {
            id: "globalpartnership",
            title: "Đối Tác Toàn Cầu",
            description:
                "Cơ hội thực tập tại các khách sạn 4-5 sao ở Australia, Malaysia, UAE, Thái Lan và Việt Nam.",
            icon: Globe
        },
        {
            id: "candidateselection",
            title: "Tuyển Chọn Ứng Viên Chuyên Nghiệp",
            description:
                "Tổ chức đánh giá về khả năng thành thạo ngôn ngữ, kỹ năng phục vụ, đồng thời huấn luyện phỏng vấn.",
            icon: PeopleFill
        },
        {
            id: "support",
            title: "Hỗ Trợ Ứng Viên Toàn Diện",
            description:
                "Hỗ trợ trong việc ứng tuyển visa, đón tại sân bay, chỗ ở, đào tạo, và theo dõi suốt chương trình.",
            icon: HeadSet
        }
    ]
};


export const collaboration = {
    en: {
        academicsupport: {
            title: "Academic Credit Partnerships",
            description: "Collaborating with universities to provide academic credits for internship programs."
        },
        mobilityprogram: {
            title: "Student Mobility Programs",
            description: "Facilitating international exchange programs to enhance students' global exposure."
        },
        cobranding: {
            title: "Co-Branding & Instition Promotion",
            description: "Partnering with educational institutions for joint branding and marketing initiatives."
        }
    },

    vi: {
        academicsupport: {
            title: "Hợp Tác Tín Chỉ Học Tập",
            description: "Hợp tác với các trường đại học để cung cấp tín chỉ học tập cho các chương trình thực tập."
        },
        mobilityprogram: {
            title: "Chương Trình Trao Đổi Sinh Viên",
            description: "Tạo điều kiện cho các chương trình trao đổi quốc tế nhằm nâng cao trải nghiệm toàn cầu của sinh viên."
        },
        cobranding: {
            title: "Đồng Thương Hiệu & Quảng Bá",
            description: "Hợp tác với các cơ sở giáo dục để thực hiện các sáng kiến đồng thương hiệu và tiếp thị."
        }
    }
};
