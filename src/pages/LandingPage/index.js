import './style.css';

export default function LandingPage() {
  return (
    <div className="land-page">
      <div className="land-page-container">
        <div className="left-side-container">
          <div className="event-date">
            <p>de 29 à 5 de maio</p>
          </div>
          <div className="head-line">
            <h1>GOLDEN</h1>
            <h1>WEEK</h1>
          </div>
          <div className="left-deck">
            <p>COMPLETE A SUA COLEÇÃO</p>
            <p>DESCONTOS DE ATÉ 70% OFF</p>
            <p>E FRETE <span>GRÁTIS</span> EM TODO BRASIL</p>
          </div>
          <div className="attention-call">
            <p>estoques ilimitados</p>
            <p>quero receber as promoções!</p>
            <p>não fique fora dessa!!</p>
          </div>
        </div>
        <div className="right-side-container">
          <div className="right-deck">
            <p>TUDO POR ATÉ</p>
            <h1>70%</h1>
            <h1>OFF</h1>
            <div className="bullet">
              <p>DO SEU MANGÁ FAVORITO!! são mais de 80 títulos de magás, quadrinhos e edições especiais</p>
            </div>
            <div className="form-container">
              <p>SEJA O PRIMEIRO A SABER!</p>
              <form className="form-lead">
                <input type="text" placeholder="nome*" />
                <input type="email" placeholder="e-mail*" />
                <button type="button">Me avise!</button>
              </form>
              <div className="countdown-container">
                <p>Promoção inicia em: </p>
                <div className="countdown">
                  <div className="countdown-timer">
                    <p>07 :</p>
                    <p>dias</p>
                  </div>
                  <div className="countdown-timer">
                    <p>18 :</p>
                    <p>horas</p>
                  </div>
                  <div className="countdown-timer">
                    <p>12 :</p>
                    <p>min</p>
                  </div>
                  <div className="countdown-timer">
                    <p>07</p>
                    <p>segs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}