const WP_BASE = "https://internconnectvn.com/wp-json/wp/v2";

export async function fetchPostsList({
    page = 1,
    perPage = 6,
} = {}) {
    const url =
        `${WP_BASE}/posts` +
        `?page=${page}` +
        `&per_page=${perPage}` +
        `&_embed` +
        `&_fields=` +
        [
            "id",
            "slug",
            "title.rendered",
            "excerpt.rendered",
            "date",
            "tags",
            "_links.wp:featuredmedia"
        ].join(",");

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch posts list");

    return res.json();
}

export async function fetchPostBySlug(slug) {
    const url =
        `${WP_BASE}/posts` +
        `?slug=${slug}` +
        `&_embed` +
        `&_fields=` +
        [
            "id",
            "slug",
            "title.rendered",
            "content.rendered",
            "date",
            "tags",
            "_embedded.wp:featuredmedia"
        ].join(",");

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch post");

    const posts = await res.json();
    return posts[0] || null;
}


export async function fetchTags() {
    const url =
        `${WP_BASE}/tags` +
        `?per_page=100` +
        `&_fields=id,name,slug`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch tags");

    const tags = await res.json();

    // Normalize into lookup map
    return Object.fromEntries(
        tags.map(tag => [tag.id, tag])
    );
}

const API_BASE = "https://YOUR-WP-DOMAIN/wp-json/wp/v2";
