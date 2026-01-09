export function getPostImage(post) {
    const media = post?._embedded?.["wp:featuredmedia"]?.[0];

    if (!media) {
        console.warn("No featured image for post:", post?.id);
        return "/placeholder.jpg";
    }

    return (
        media.media_details?.sizes?.medium?.source_url ||
        media.media_details?.sizes?.large?.source_url ||
        media.source_url
    );
}
