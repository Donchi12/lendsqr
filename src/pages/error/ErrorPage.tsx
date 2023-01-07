import "./error.scss"
import { Link, useLocation } from 'react-router-dom'

function ErrorPage() {
  const {pathname} =useLocation()
  return (
    <section className='error-container'>
      <div className='error-wrapper'>
      <div className='error-content'>
      <span>404</span>
      <p>Ooop! we couldn't find path {pathname} your are searching for </p>
      <Link to="/">Goto Home</Link>
      </div>
    </div>
    </section>
  )
}

export default ErrorPage