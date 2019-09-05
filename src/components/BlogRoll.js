import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


const BlogRoll = ({ data }) => {
  const { edges: posts = [] } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts.map(({ node: post }) => (
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
        ))}
    </div>
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
