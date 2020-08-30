import React from "react"
import SanitizedHTML from 'react-sanitized-html';

const basicTemplate = props => {
  const { pageContext } = props
  const { slug, title, image, content } = pageContext
  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <a href={slug}><h1>{title}</h1></a>
      <img src={image} alt={title} style={{float:'left', marginRight:'1rem', width:'200px'}}/>
      <br></br>
      <SanitizedHTML html={content} />
    </div>
  )
}
export default basicTemplate