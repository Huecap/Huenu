import image from '../assets/img/doguito404.svg'

const Page404 = () => {
    return (
      <main>
        <div className="container">
          <h2 className="title-page">Pet noticias</h2>
        </div>
        <section className="container flex flex--center">
          <article className="card post">
            <img className='dog-image' src={image} alt='Doguitio' /> 
            <h2 className="post-card__title">Error 404</h2>
            <p className="post-card__text">No se logro encontrar la pagina solicitada</p>
          </article>
        </section>
      </main>
    )
  }
  
  export default Page404