import React from 'react'
import PropTypes from 'prop-types'

import { graphql, StaticQuery } from 'gatsby'

import BlogListItem from './BlogListItem';


const BlogRoll = ({ data }) => {
  const { edges: posts = [] } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts.map(({ node: post }) => (
        <BlogListItem
          post={post}
          key={`post-item-${post.fields.slug}`}
        />
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
