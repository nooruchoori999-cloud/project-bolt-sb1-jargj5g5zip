---
name: Importing X Articles
description: How to preserve fidelity when turning a public X Article into a site article.
---

Treat X Articles as structured rich-text documents rather than ordinary posts: preserve block order, inline styles, links, media entities, and the separate cover image.

**Why:** The normal post text can contain only a link to the article, while the full article body and original-resolution media are stored in the article payload.

**How to apply:** When adding another X Article, verify the title, all content blocks, embedded references, and original media dimensions before rendering it under the appropriate site menu.

Do not assume an original-size URL parameter guarantees the correct download. Verify saved image dimensions against the article's media metadata.

**Why:** X's image host can reject size-qualified URLs even when the unqualified image URL returns the full original image.

**How to apply:** If a media URL fails, try the source URL without size parameters, then check its dimensions before accepting it. Keep referenced posts distinct from inline image blocks.