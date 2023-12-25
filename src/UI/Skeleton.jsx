
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={200}
    viewBox="0 0 300 200"
    backgroundColor="#ebebdb"
    foregroundColor="#d6d6d6"
    {...props}
  >
     <rect x="1" y="8" rx="3" ry="3" width="285" height="186" />
      </ContentLoader>
)

export default MyLoader