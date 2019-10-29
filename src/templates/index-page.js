import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  subheading,
  description,
}) => (
  <React.Fragment>
    <div className="site-title-container">
      <h1
        className="site-title has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
      >
        {title}
      </h1>
      <h3
        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
      >
        {subheading}
      </h3>
    </div>
    <section className="section--gradient">
      <div className="">
        <div className="section">
          <div className="columns">
            <div className="content" style={{ width: '100%' }}>
              <div className="column is-12">
                <BlogRoll />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>

      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        description
      }
    }
  }
`
