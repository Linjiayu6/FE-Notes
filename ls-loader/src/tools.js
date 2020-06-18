
const headTag = document.querySelector('head')

export default {
  handleCss: url => {
    const linkTag = document.createElement('link')
    linkTag.href = url
    headTag.appendChild(linkTag)
  },
  
  handleJs: url => {
    const scriptTag = document.createElement('script')
    scriptTag.src = url
    headTag.appendChild(scriptTag)
  }
}