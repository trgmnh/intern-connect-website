const WP_BASE = "https://internconnectvn.com/wp-json/wp/v2";

/**
 * Fetch posts list by language
 */
export async function fetchPostsList({
    page = 1,
    perPage = 6,
    lang = "en",
} = {}) {
    const url =
        `${WP_BASE}/posts` +
        `?page=${page}` +
        `&per_page=${perPage}` +
        `&lang=${lang}` +
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

/**
 * Fetch single post by slug + language
 */
export async function fetchPostBySlug(slug, lang = "en") {
    const url =
        `${WP_BASE}/posts` +
        `?slug=${slug}` +
        `&lang=${lang}` +
        `&_embed`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch post");

    const posts = await res.json();
    return posts[0] || null;
}


/**
 * Tags are shared across languages (Polylang default)
 */
export async function fetchTags() {
    const url =
        `${WP_BASE}/tags` +
        `?per_page=100` +
        `&_fields=id,name,slug`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch tags");

    const tags = await res.json();
    return Object.fromEntries(tags.map(tag => [tag.id, tag]));
}
