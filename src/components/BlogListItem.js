import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const BlogListItem = ({ post }) => {
  return (
    <div className="is-parent column is-4" key={post.id}>
      <article className={
        cx('blog-list-item tile is-child', {
          'is-featured': post.frontmatter.featuredpost,
        })
      }>
        <Link to={post.fields.slug}>
          <div className="featured-thumbnail">
            <PreviewCompatibleImage
              imageInfo={{
                image: post.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.title}`,
              }}
            />
          </div>
        </Link>
      </article>
    </div>
  );
};

export default BlogListItem;
