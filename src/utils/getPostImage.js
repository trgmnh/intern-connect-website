import img101 from '../assets/posts/101.jpg';
import img102 from '../assets/posts/102.jpg';
import img103 from '../assets/posts/103.jpg';
import img104 from '../assets/posts/104.jpg';
import img105 from '../assets/posts/105.jpg';
import img106 from '../assets/posts/106.jpg';
import img107 from '../assets/posts/107.jpg';
import img108 from '../assets/posts/108.jpg';
import img109 from '../assets/posts/109.jpg';
import img110 from '../assets/posts/110.jpg';

const mockImages = {
    101: img101,
    102: img102,
    103: img103,
    104: img104,
    105: img105,
    106: img106,
    107: img107,
    108: img108,
    109: img109,
    110: img110,
};

export function getPostImage(post) {
    // Future: real WordPress
    if (post._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
        return post._embedded["wp:featuredmedia"][0].source_url;
    }

    // Mock mode (USE THE MAP YOU CREATED)
    if (post.id && mockImages[post.id]) {
        return mockImages[post.id];
    }

    return "/placeholder.jpg";
}